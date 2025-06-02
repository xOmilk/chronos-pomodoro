import { Home } from "./pages/Home";

import "./css/theme.css";
import "./css/global.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";

export function App() {
	return (
		<TaskContextProvider>
			<Home />
		</TaskContextProvider>
	);
}
