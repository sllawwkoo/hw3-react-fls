import styles from "./Decision8.module.scss";
import { words } from "../dataTask8";
import { useState, useEffect, useRef } from "react";
import WordList from "../WordList/WordList";

function Decision8() {
	const [cards, setCards] = useState([]);
	const timeoutRef = useRef(null);

	const enCards = cards.filter((c) => c.lang === "en");
	const uaCards = cards.filter((c) => c.lang === "ua");

	const handleClickCard = (id) => {
		setCards((prev) => {
			const clicked = prev.find((c) => c.id === id);
			if (!clicked || clicked.isMatched) return prev;

			// Активуємо натиснуту картку та скидаємо інші тієї ж мови
			let updated = prev.map((card) => {
				if (card.id === clicked.id) {
					return { ...card, isActive: !card.isActive };
				}
				if (card.lang === clicked.lang && card.isActive && !card.isMatched) {
					return { ...card, isActive: false };
				}
				return card;
			});

			const active = updated.filter((c) => c.isActive && !c.isMatched);

			if (active.length === 2) {
				const [first, second] = active;

				if (first.lang !== second.lang && first.pairId === second.pairId) {
					// ставимо matched: true
					updated = updated.map((card) =>
						card.id === first.id || card.id === second.id
							? { ...card, isMatched: true }
							: card
					);
				} else {
					// ставимо error: true
					updated = updated.map((card) =>
						card.id === first.id || card.id === second.id
							? { ...card, isError: true }
							: card
					);
				}
			}

			return updated;
		});
	};

	useEffect(() => {
		const mixed = words
			.flatMap(({ id, en, ua }) => [
				{
					id: Math.random(),
					word: en,
					lang: "en",
					pairId: id,
					isMatched: false,
					isActive: false,
					isError: false,
				},
				{
					id: Math.random(),
					word: ua,
					lang: "ua",
					pairId: id,
					isMatched: false,
					isActive: false,
					isError: false,
				},
			])
			.sort(() => Math.random() - 0.5);

		setCards(mixed);
	}, []);

	useEffect(() => {
		const error = cards.filter((card) => card.isError);
		const matched = cards.filter((card) => card.isMatched && card.isActive);

		if (matched.length === 2) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(() => {
				setCards((prev) =>
					prev.filter((card) => !matched.some((word) => word.id === card.id))
				);
			}, 1000);
		}

		if (error.length === 2) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(() => {
				setCards((prev) =>
					prev.map((card) =>
						card.isError ? { ...card, isError: false, isActive: false } : card
					)
				);
			}, 1000);
		}

		return () => clearTimeout(timeoutRef.current);
	}, [cards]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.body}>
					<WordList
						list={enCards}
						onClickWord={handleClickCard}
					/>
					<WordList
						list={uaCards}
						onClickWord={handleClickCard}
					/>
				</div>
			</div>
		</div>
	);
}

export default Decision8;
