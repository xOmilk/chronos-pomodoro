import "./css/theme.css";
import "./css/global.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";
import { MainRouter } from "./components/routers/MainRouter";

export function App() {
	return (
		<TaskContextProvider>
			<MessagesContainer>
				<MainRouter />
			</MessagesContainer>
		</TaskContextProvider>
	);
}
