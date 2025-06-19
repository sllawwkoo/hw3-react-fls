import styles from "./ListDancers.module.scss";

function ListDancers({ list, clickBtn, title }) {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>
				{list?.map(({ id, name, isActive }) => (
					<li
						key={id}
						className={`${styles.dancer} ${isActive && styles.active}`}
						role="button"
						onClick={() => clickBtn(id)}
					>
						{name}
					</li>
				))}
				{list?.length === 0 && <li className={styles.empty}>Всіх розібрали!</li>}
			</ul>
		</div>
	);
}

export default ListDancers;
