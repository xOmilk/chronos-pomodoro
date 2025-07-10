import { TrashIcon } from "lucide-react";
import { ButtonDefault } from "../../components/ButtonDefault";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";

import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";

export function History() {
	const { state } = useTaskContext();

	return (
		<MainTemplate>
			<Heading>
				<span>History</span>
				<span className={styles.buttonContainer}>
					<ButtonDefault
						icon={<TrashIcon />}
						color="red"
						aria-label="Apagar todo o historico"
						title="Apagar todo o historico"
					/>
				</span>
			</Heading>

			<Container>
				<div className={styles.responsiveTable}>
					<table>
						<thead>
							<tr>
								<th>Tarefa</th>
								<th>Duração</th>
								<th>Data</th>
								<th>Status</th>
								<th>Tipo</th>
							</tr>
						</thead>

						<tbody>
							{state.tasks.map((task) => {
								const taskTypeDictionary = {
									workTime: "Foco",
									longBreakTime: "Descanso longo",
									shortBreakTime: "Descanso curto",
								};

								return (
									<tr key={task.id}>
										<td>{task.name}</td>
										<td>{task.duration}</td>
										<td>{formatDate(task.startDate)}</td>
										<td>
											{getTaskStatus(
												task,
												state.activeTask
											)}
										</td>
										<td>{taskTypeDictionary[task.type]}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</Container>
		</MainTemplate>
	);
}
