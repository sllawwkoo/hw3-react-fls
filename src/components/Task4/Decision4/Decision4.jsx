import AthleteslList from "../AthleteslList/AthleteslList";
import styles from "./Decision4.module.scss";
import { useState } from "react";

function Decision4() {
	const [generalList, setGeneralList] = useState([
		{ id: 1, name: "John Depp" },
		{ id: 2, name: "Sara Wik" },
		{ id: 3, name: "Den Miro" },
		{ id: 4, name: "Alan Woo" },
	]);
	const [selectedList, setSelectedList] = useState([
		{ id: 5, name: "Piter Smith" },
		{ id: 6, name: "Alex Doe" },
	]);

	const handleGeneralClick = (id) => {
		const athlete = generalList.find((a) => a.id === id);
		setSelectedList((prevSelectedList) => [...prevSelectedList, athlete]);
		setGeneralList((prevGeneralList) =>
			prevGeneralList.filter((athlete) => athlete.id !== id)
		);
	};

	const handleSelectClick = (id) => {
		const athlete = selectedList.find((a) => a.id === id);
		setGeneralList(prevGeneralList => [...prevGeneralList, athlete]);
		setSelectedList(prevSelectedList => prevSelectedList.filter(athlete => athlete.id !== id));
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<AthleteslList
					list={generalList}
					title="Загальний список"
					btnClass={styles.generalBtn}
					clickBtn={handleGeneralClick}
				/>
				<AthleteslList
					list={selectedList}
					title="Обрані для змагання"
					btnClass={styles.selectedBtn}
					clickBtn={handleSelectClick}
				/>
			</div>
		</div>
	);
}

export default Decision4;
