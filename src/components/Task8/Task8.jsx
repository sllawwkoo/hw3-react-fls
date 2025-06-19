import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision8 from "./Decision8/Decision8";

function Task8() {
	const { title, text} = tasks[7];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<Decision8/>
		</>
	);
}

export default Task8;