import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision1 from "./Decision1/Decision1";


function Task1() {
	const { title, text} = tasks[0];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<Decision1/>
		</>
	);
}

export default Task1;