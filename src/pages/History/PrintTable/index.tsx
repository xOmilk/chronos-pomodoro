import { useTaskContext } from "../../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../../utils/formatDate";
import { getTaskStatus } from "../../../utils/getTaskStatus";
import { sortTasks } from "../../../utils/sortTask";

import styles from "../styles.module.css";

type PrintTableProps = {
	hasTasks: boolean;
};

export function PrintTable({ hasTasks }: PrintTableProps) {
	const { state } = useTaskContext();
	const sortedTasks = sortTasks({ tasks: state.tasks });
	if (!hasTasks)
		return (
			<p style={{ textAlign: "center" }}>
				Você não possui nenhum tarefa registrada no historico
			</p>
		);

	return (
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
					{sortedTasks.map((task) => {
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
								<td>{getTaskStatus(task, state.activeTask)}</td>
								<td>{taskTypeDictionary[task.type]}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
