import styles from "./CarsList.module.scss";

function CarsList({ list }) {
	return (
		<ul className={styles.list}>
			{list?.map(({ id, brand, age, price }) => (
				<li key={id}>{`${brand} - ${age} - ${price}$`}</li>
			))}
			{list?.length === 0 && (
				<li className={styles.empty}>Нікого не знайдено!</li>
			)}
		</ul>
	);
}

export default CarsList;
