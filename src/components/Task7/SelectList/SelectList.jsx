import styles from "./SelectList.module.scss";

function SelectList({
	label,
	idSelect,
	defaultOption,
	options,
	onChangeSelect,
	valueSelect,
}) {
	return (
		<div className={styles.selectGroup}>
			<label
				htmlFor={idSelect}
				className={styles.label}
			>
				{label}
			</label>
			<select
				className={styles.select}
				id={idSelect}
				onChange={onChangeSelect}
				value={valueSelect}
			>
				<option value="">{defaultOption}</option>
				{options.map((option) => (
					<option
						key={option.id}
						value={option.value}
					>
						{option.value}
					</option>
				))}
			</select>
		</div>
	);
}

export default SelectList;
