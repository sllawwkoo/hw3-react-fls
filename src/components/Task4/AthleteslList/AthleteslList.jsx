import styles from "./AthleteslList.module.scss";

function AthleteslList({ list, btnClass, clickBtn, title }) {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>
				{list.map(({ id, name }) => (
					<li
						key={id}
						className={styles.athlete}
					>
						<span className={styles.name}>{name}</span>
						<button
							type="button"
							className={btnClass}
							onClick={() => clickBtn(id)}
						></button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default AthleteslList;
