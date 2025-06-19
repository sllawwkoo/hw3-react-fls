import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision7 from "./Decision7/Decision7";

function Task7() {
	const { title, text} = tasks[6];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<Decision7/>
		</>
	);
}

export default Task7;