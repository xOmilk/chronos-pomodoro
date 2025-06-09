import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState.ts";
import type { TaskActionModel } from "./taskActions.ts";

type TaskContextProps = {
	state: TaskStateModel;
	dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
	state: initialTaskState,
	dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
