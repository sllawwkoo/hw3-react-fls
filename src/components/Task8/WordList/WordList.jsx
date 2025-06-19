import styles from "./WordList.module.scss";

function WordList({ list, onClickWord }) {
	function getWordClass(isActive, isMatched, isError) {
		if (isError) return styles.error;
		if (isMatched) return styles.matched;
		if (isActive) return styles.active;
		return "";
	}
	return (
		<ul className={styles.list}>
			{list?.map(({ id, word, isActive, isMatched, isError }) => (
				<li
					key={id}
					role="button"
					onClick={() => onClickWord(id)}
					className={`${styles.word} ${getWordClass(
						isActive,
						isMatched,
						isError
					)}`}
				>
					{word}
				</li>
			))}
		</ul>
	);
}

export default WordList;
