import { Home } from "./pages/Home";

import "./css/theme.css";
import "./css/global.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";

export function App() {
	return (
		<TaskContextProvider>
			<MessagesContainer>
				<Home />
			</MessagesContainer>
		</TaskContextProvider>
	);
}
