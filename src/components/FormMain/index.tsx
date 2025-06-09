import { ButtonDefault } from "../ButtonDefault";
import { InputDefault } from "../InputDefault";
import { Cycles } from "../Cycles";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

import styles from "./styles.module.css";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function FormMain() {
	const { state, dispatch } = useTaskContext();
	const taskNameInput = useRef<HTMLInputElement>(null);

	const nextCycle = getNextCycle(state.currentCycle);
	const nextCycleType = getNextCycleType(nextCycle);

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
			duration: state.config[nextCycleType],
			type: nextCycleType,
		};

		dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
	}

	function handleInterruptTask() {
		/* 		setState((prevState) => {
			return {
				...prevState,
				activeTask: null,
				secondsRemaining: 0, //conferir
				formattedSecondsRemaining: "00:00",
				tasks: prevState.tasks.map((task) => {
					if (
						prevState.activeTask &&
						prevState.activeTask.id === task.id
					) {
						return { ...task, interruptDate: Date.now() };
					}
					return task;
				}),
			};
		}); */
		dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
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
					disabled={!!state.activeTask}
				></InputDefault>
			</div>
			<div className={styles.formRow}>
				<p></p>
			</div>

			{state.currentCycle > 0 && (
				<div className="formRow">
					<Cycles />
				</div>
			)}
			<div className={styles.formRow}>
				{!state.activeTask && (
					<ButtonDefault
						key="botaoSUBMIT"
						aria-label="Iniciar nova tarefa"
						title="Iniciar nova tarefa"
						type="submit"
						idButtonElement="play"
						icon={<PlayCircleIcon />}
					></ButtonDefault>
				)}

				{!!state.activeTask && (
					<ButtonDefault
						key="botaoBUTTON"
						aria-label="Interromper tarefa atual"
						title="Interromper tarefa atual"
						type="button"
						idButtonElement="stop"
						color="red"
						icon={<StopCircleIcon />}
						onClick={handleInterruptTask}
					></ButtonDefault>
				)}
			</div>
		</form>
	);
}
