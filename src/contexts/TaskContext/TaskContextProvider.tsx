import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";

type TaskContextProviderProps = {
	children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
	const [state, dispatch] = useReducer(taskReducer, initialTaskState);

	const worker = TimerWorkerManager.getInstance();

	worker.onmessage((event) => {
		const countDownSeconds = event.data;
		console.log(countDownSeconds);

		if (countDownSeconds <= 0) {
			dispatch({
				type: TaskActionTypes.COMPLETE_TASK,
			});
			console.log("Worker completed!!!");
			worker.terminate();
		} else {
			dispatch({
				type: TaskActionTypes.COUNT_DOWN,
				payload: { secondsRemaining: countDownSeconds },
			});
		}
	});

	useEffect(() => {
		console.log(state);

		if (!state.activeTask) {
			worker.terminate();
		}

		worker.postMessage(state);
	}, [worker, state]);

	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
}
