import { useEffect, useState } from "react";
import { TrashIcon } from "lucide-react";
import { ButtonDefault } from "../../components/ButtonDefault";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { PrintTable } from "./PrintTable";

import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

import { toast } from "react-toastify";
import { showMessage } from "../../adapters/toastifyAdapter";

import styles from "./styles.module.css";

History.Table = PrintTable;

export function History() {
	const [confirmClearHistory, setConfirmClearHistory] = useState(false);
	const { state, dispatch } = useTaskContext();
	const hasTasks = state.tasks.length > 0;

	useEffect(() => {
		document.title = "Histórico - Chronos Pomodoro";
	}, []);

	function handleResetHistory() {
		toast.dismiss();
		showMessage.confirm(
			"Tem certeza que deseja apagar todo o historico?",
			(confirmation) => {
				setConfirmClearHistory(confirmation);
			}
		);
	}

	useEffect(() => {
		if (!confirmClearHistory) return;

		setConfirmClearHistory(false);

		dispatch({ type: TaskActionTypes.RESET_STATE });
	}, [confirmClearHistory, dispatch]);

	useEffect(() => {
		return () => {
			showMessage.dismiss();
		};
	}, []);

	return (
		<MainTemplate>
			<Heading>
				<span>History</span>
				<span className={styles.buttonContainer}>
					{hasTasks && (
						<ButtonDefault
							icon={<TrashIcon />}
							color="red"
							aria-label="Apagar todo o historico"
							title="Apagar todo o historico"
							onClick={handleResetHistory}
						/>
					)}
				</span>
			</Heading>

			<Container>
				<History.Table hasTasks={hasTasks} />
			</Container>
		</MainTemplate>
	);
}
