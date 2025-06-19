import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision5 from "./Decision5/Decision5";

function Task5() {
	const { title, text} = tasks[4];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<Decision5/>
		</>
	);
}

export default Task5;