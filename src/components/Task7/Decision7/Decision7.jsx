import styles from "./Decision7.module.scss";
import { useEffect, useState } from "react";
import { selectData, carsList } from "../dataTask7";
import SelectList from "../SelectList/SelectList";
import CarsList from "../CarsList/CarsList";

function Decision7() {
	const [selectBrand, setSelectBrand] = useState("");
	const [selectYear, setSelectYear] = useState("");
	const [cars, setCars] = useState(() => carsList);

	const handleSelectBrand = (e) => {
		setSelectBrand(e.target.value);
	};

	const handleSelectYear = (e) => {
		setSelectYear(e.target.value);
	};

	useEffect(() => {
		let filtered = carsList;

		if (selectBrand && selectYear) {
			filtered = carsList.filter(
				(car) => car.brand === selectBrand && car.age === selectYear
			);
		} else if (selectBrand) {
			filtered = carsList.filter((car) => car.brand === selectBrand);
		} else if (selectYear) {
			filtered = carsList.filter((car) => car.age === selectYear);
		}

		setCars(filtered);
	}, [selectBrand, selectYear]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.selectBody}>
					<SelectList
						label="Марка"
						idSelect="brand"
						defaultOption="--Виберіть марку--"
						options={selectData.brand}
						onChangeSelect={handleSelectBrand}
						valueSelect={selectBrand}
					/>
					<SelectList
						label="Рік"
						idSelect="year"
						defaultOption="--Виберіть рік--"
						options={selectData.year}
						onChangeSelect={handleSelectYear}
						valueSelect={selectYear}
					/>
				</div>
				<CarsList list={cars} />
			</div>
		</div>
	);
}

export default Decision7;
