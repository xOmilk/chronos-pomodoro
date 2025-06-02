import { ButtonDefault } from "../ButtonDefault";
import { InputDefault } from "../InputDefault";
import { Cycles } from "../Cycles";
import { PlayCircleIcon } from "lucide-react";

import styles from "./styles.module.css";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";

export function FormMain() {
	const { state, setState } = useTaskContext();
	const taskNameInput = useRef<HTMLInputElement>(null);

	const nextCycle = getNextCycle(state.currentCycle);

	function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (taskNameInput.current === null) return;

		const taskName = taskNameInput.current.value.trim();

		if (!taskName) return alert("Digite um nome na tarefa");

		const newTask: TaskModel = {
			id: Date.now().toString(),
			name: taskName,
			startDate: Date.now(),
			completeDate: null,
			interruptDate: null,
			duration: 1,
			type: "workTime",
		};

		const secondsRemaining = newTask.duration * 60;

		setState((prevState) => {
			return {
				...prevState,
				config: { ...prevState.config },
				activeTask: newTask,
				currentCycle: nextCycle, //conferir
				secondsRemaining, //conferir
				formattedSecondsRemaining: "", //cofnerir
				tasks: [...prevState.tasks, newTask],
			};
		});
	}

	return (
		<form onSubmit={handleCreateNewTask} className={styles.form}>
			<div className={styles.formRow}>
				<InputDefault
					idInputElement="taskId"
					labelText="TESTEEEE"
					type="search"
					placeholder="Digite algo"
					ref={taskNameInput}
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
