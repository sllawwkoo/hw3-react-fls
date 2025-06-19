import styles from "./Decision2.module.scss";
import { useState } from "react";

function Decision2() {
	const [temperature, setTemperature] = useState(0);

	const handleChange = (e) => {
		setTemperature(e.target.value);
	};

	const getTemperatureClass = () => {
		if (temperature < 0) return styles.cold;
		if (temperature <= 10) return styles.cool;
		if (temperature <= 22) return styles.warm;
		return styles.hot;
	};

	const getTemperatureMood = () => {
		if (temperature < 0) return "❄️ Морозець";
		if (temperature <= 10) return "🧥 Прохолодно";
		if (temperature <= 22) return "🌤 Комфортно";
		return "🔥 Спекотно!";
	};

	return (
		<div className={styles.wrapper}>
			<div className={`${styles.container} ${getTemperatureClass()}`}>
				<div className={styles.inputLine}>
					<label
						htmlFor="temperature"
						className={styles.label}
					>
						Введіть температуру:
					</label>
					<input
						className={styles.input}
						type="number"
						id="temperature"
						value={temperature}
						onChange={handleChange}
					/>
				</div>

				<div className={styles.resultLine}>
					<span>Поточна температура: {temperature}°</span>
					<span>{getTemperatureMood()}</span>
				</div>
			</div>
		</div>
	);
}

export default Decision2;
