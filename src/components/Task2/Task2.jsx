import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision2 from "./Decision2/Decision2";

function Task2() {
	const { title, text} = tasks[1];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<Decision2/>
		</>
	);
}

export default Task2;