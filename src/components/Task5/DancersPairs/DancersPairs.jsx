import styles from "./DancersPairs.module.scss";

function DancersPairs({ list, title, clickPairs }) {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>
				{list?.map(({ id, boy, girl }) => (
					<li
						key={id}
						className={styles.pairs}
						role="button"
						onClick={() => clickPairs(id)}
					>
						{`${boy} - ${girl}`}
					</li>
				))}
				{list?.length === 0 && <li className={styles.empty}>Пари відсутні</li>}
			</ul>
		</div>
	);
}

export default DancersPairs;
