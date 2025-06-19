import styles from "./Decision3.module.scss";
import { useState } from "react";

function Decision3() {
	const [speedLimit, setSpeedLimit] = useState("");
	const [currentSpeed, setCurrentSpeed] = useState("");
	const handleChangeLimitSpeed = (e) => {
		setSpeedLimit(e.target.value);
	};
	const handleChangeCurrentSpeed = (e) => {
		setCurrentSpeed(e.target.value);
	};

	const getSpeedPercent = () => {
		if (!speedLimit || !currentSpeed) return 0;
		return (currentSpeed / speedLimit) * 100;
	};

	console.log(getSpeedPercent());

	const getSpeedClass = () => {
		if (!speedLimit || !currentSpeed) return styles.disabled;

		const percent = (currentSpeed / speedLimit) * 100;

		if (percent < 50) return styles.orange;
		if (percent <= 100) return styles.green;
		if (percent > 100) return styles.red;
	};

	const showWarning = getSpeedPercent() > 90;

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.inputLine}>
					<label
						htmlFor="speedLimit"
						className={styles.label}
					>
						Введіть дозволену швидкість:
					</label>
					<input
						className={styles.input}
						type="number"
						id="speedLimit"
						value={speedLimit}
						onChange={handleChangeLimitSpeed}
						min="0"
					/>
				</div>
				<div className={styles.inputLine}>
					<label
						htmlFor="currentSpeed"
						className={styles.label}
					>
						Введіть поточну швидкість:
					</label>
					<input
						className={`${styles.input} ${styles.current}  ${getSpeedClass()} `}
						type="number"
						id="currentSpeed"
						value={currentSpeed}
						onChange={handleChangeCurrentSpeed}
						min="0"
						disabled={!speedLimit}
					/>
				</div>
				{showWarning && <div className={`${styles.warning} `}>⚠️ Увага!</div>}
			</div>
		</div>
	);
}

export default Decision3;
