import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision6 from "./Decision6/Decision6";

function Task6() {
	const { title, text} = tasks[5];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<Decision6/>
		</>
	);
}

export default Task6;