import DancersPairs from "../DancersPairs/DancersPairs";
import ListDancers from "../ListDancers/ListDancers";
import styles from "./Decision5.module.scss";
import { useState } from "react";

function Decision5() {
	const [boys, setBoys] = useState([
		{ id: 11, name: "Іван", isActive: false },
		{ id: 12, name: "Петро", isActive: false },
		{ id: 13, name: "Степан", isActive: false },
		{ id: 14, name: "Олег", isActive: false },
	]);
	const [girls, setGirls] = useState([
		{ id: 21, name: "Марія", isActive: false },
		{ id: 22, name: "Анастасія", isActive: false },
		{ id: 23, name: "Ірина", isActive: false },
	]);
	const [dancers, setDancers] = useState([]);

	const handleSelectBoy = (id) => {
		setBoys((prevBoys) =>
			prevBoys.map((boy) => {
				if (boy.id === id) {
					const newIsActive = !boy.isActive;
					return { ...boy, isActive: newIsActive };
				}
				return { ...boy, isActive: false };
			})
		);
	};

	const handleSelectGirl = (id) => {
		setGirls((prevGirls) =>
			prevGirls.map((girl) => {
				if (girl.id === id) {
					const newIsActive = !girl.isActive;
					return { ...girl, isActive: newIsActive };
				}
				return { ...girl, isActive: false };
			})
		);
	};

	const handleClickBtn = () => {
		const selectedBoys = boys.filter((boy) => boy.isActive === true);
		const selectedGirls = girls.filter((girl) => girl.isActive === true);

		setDancers((prevDancers) => [
			...prevDancers,
			{
				id: new Date().getTime(),
				boy: selectedBoys[0].name,
				girl: selectedGirls[0].name,
			},
		]);
		setBoys((prevBoys) =>
			prevBoys.filter((boy) => boy.name !== selectedBoys[0].name)
		);
		setGirls((prevGirls) =>
			prevGirls.filter((girl) => girl.name !== selectedGirls[0].name)
		);
	};

	const handleClickPairs = (id) => {
		const selectedPairs = dancers.find((dancer) => dancer.id === id);

		setDancers((prevDancers) =>
			prevDancers.filter((dancer) => dancer.id !== id)
		);
		setBoys((prevBoys) => [
			...prevBoys,
			{ id: new Date().getTime(), name: selectedPairs.boy },
		]);
		setGirls((prevGirls) => [
			...prevGirls,
			{ id: new Date().getTime(), name: selectedPairs.girl },
		]);
	};

	const isDisabled =
		boys.some((boy) => boy.isActive) && girls.some((girl) => girl.isActive);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.dancers}>
					<ListDancers
						list={boys}
						title="Хлопці"
						clickBtn={handleSelectBoy}
					/>
					<ListDancers
						list={girls}
						title="Дівчата"
						clickBtn={handleSelectGirl}
					/>
				</div>
				<button
					type="button"
					className={`${styles.button} ${!isDisabled && styles.disabled}`}
					disabled={!isDisabled}
					onClick={handleClickBtn}
				>
					Додати
				</button>
				<DancersPairs
					list={dancers}
					title="Обрані пари"
					clickPairs={handleClickPairs}
				/>
			</div>
		</div>
	);
}

export default Decision5;
