import styles from "./Decision6.module.scss";
import { useState, useEffect } from "react";
import EmployeesList from "../EmployeesList/EmployeesList";
import { listEmployees } from "../dataTask6";

function Decision6() {
	const [employees, setEmployees] = useState(() => listEmployees);
	const [search, setSearch] = useState("");

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		if (search.trim() === "") {
			setEmployees(listEmployees);
		} else {
			const filtered = listEmployees.filter((employee) =>
				employee.name.toLowerCase().includes(search.toLowerCase())
			);
			setEmployees(filtered);
		}
	}, [search]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.inputLine}>
					<label
						htmlFor="search"
						className={styles.label}
					>
						Працівники
					</label>
					<input
						className={styles.input}
						type="text"
						id="search"
						placeholder="Пошук"
						value={search}
						onChange={handleSearchChange}
					/>
				</div>
				<EmployeesList list={employees} />
			</div>
		</div>
	);
}

export default Decision6;
