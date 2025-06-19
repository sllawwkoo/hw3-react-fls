import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision3 from "./Decision3/Decision3";

function Task3() {
	const { title, text} = tasks[2];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<Decision3/>
		</>
	);
}

export default Task3;