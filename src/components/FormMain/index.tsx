import { ButtonDefault } from "../ButtonDefault";
import { InputDefault } from "../InputDefault";
import { Cycles } from "../Cycles";
import { PlayCircleIcon } from "lucide-react";

import styles from "./styles.module.css";
import { useState } from "react";

export function FormMain() {
	const [taskName, setTaskName] = useState("");

	function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log("Lidando com a criação de task");
		console.log("Tarefa", taskName);
	}

	return (
		<form onSubmit={handleCreateNewTask} className={styles.form}>
			<div className={styles.formRow}>
				<InputDefault
					idInputElement="taskId"
					labelText="TESTEEEE"
					type="search"
					placeholder="Digite algo"
					value={taskName}
					onChange={(e) => setTaskName(e.target.value)}
				></InputDefault>
			</div>
			<div className={styles.formRow}>
				<p></p>
			</div>
			<div className={styles.formRow}>
				<Cycles />
			</div>
			<div className={styles.formRow}>
				<ButtonDefault
					idButtonElement="play"
					icon={<PlayCircleIcon />}
				></ButtonDefault>
			</div>
		</form>
	);
}
