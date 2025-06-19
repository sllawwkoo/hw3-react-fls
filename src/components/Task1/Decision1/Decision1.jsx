import styles from "./Decision1.module.scss";
import { useState } from "react";

function Decision1() {
	const [sm, setSm] = useState(0);

	const handleSmChange = (e) => {
		setSm(e.target.value);
	};

	const smValue = parseFloat(sm);
	const meters = smValue / 100;
	const km = meters / 1000;

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.inputLine}>
					<label htmlFor="sm" className={styles.label}>Введіть довжину в сантиметрах:</label>
					<input
					className={styles.input}
						type="number"
						id="sm"
						value={sm}
						onChange={handleSmChange}
						min="0"
					/>
				</div>

				<div className={styles.resultLine}>
					<span>Довжина в метрах:</span>
					<span>{meters.toFixed(2)}</span>
				</div>
				<div className={styles.resultLine}>
					<span>Довжина в кілометрах:</span>
					<span>{km.toFixed(5)}</span>
				</div>
			</div>
		</div>
	);
}

export default Decision1;