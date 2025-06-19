import styles from "./EmployeesList.module.scss";

function EmployeesList({ list }) {
	return (
		<ul className={styles.list}>
			{list.map(({ id, name }) => (
				<li key={id}>{name}</li>
			))}
			{list?.length === 0 && (
				<li className={styles.empty}>Нікого не знайдено!</li>
			)}
		</ul>
	);
}

export default EmployeesList;
