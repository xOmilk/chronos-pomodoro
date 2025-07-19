import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

import "./styles.module.css";

export function Tips() {
	const { state } = useTaskContext();

	const nextCycle = getNextCycle(state.currentCycle);
	const nextCycleType = getNextCycleType(nextCycle);

	const tipsForWhenActiveTask = {
		workTime: (
			<span>
				Foque por <b>{state.config.workTime}min</b>
			</span>
		),
		shortBreakTime: (
			<span>
				Descanse por <b>{state.config.shortBreakTime}min</b>
			</span>
		),
		longBreakTime: <span>Descanso longo</span>,
	};
	const tipsForNoActiveTask = {
		workTime: (
			<span>
				Proximo ciclo é de <b>{state.config.workTime}min</b>
			</span>
		),
		shortBreakTime: (
			<span>
				Proximo ciclo é de <b>{state.config.shortBreakTime}min</b>
			</span>
		),
		longBreakTime: <span>Proximo descanso será longo</span>,
	};

	return (
		<>
			{!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
			{!state.activeTask && tipsForNoActiveTask[nextCycleType]}
		</>
	);
}
