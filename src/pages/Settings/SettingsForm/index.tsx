import { SaveAllIcon } from "lucide-react";
import { ButtonDefault } from "../../../components/ButtonDefault";
import { InputDefault } from "../../../components/InputDefault";
import { Container } from "../../../components/Container";
import { useRef } from "react";

import { useTaskContext } from "../../../contexts/TaskContext/useTaskContext";

import styles from "./styles.module.css";
import { showMessage } from "../../../adapters/toastifyAdapter";

export function SettingsForm() {
	const { state } = useTaskContext();

	const workTimeInput = useRef<HTMLInputElement>(null);
	const shortBreakTimeInput = useRef<HTMLInputElement>(null);
	const longBreakTimeInput = useRef<HTMLInputElement>(null);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		showMessage.dismiss();
		const formErrors = [];
		const workTime = Number(workTimeInput.current?.value);
		const shortBreakTime = Number(shortBreakTimeInput.current?.value);
		const longBreakTime = Number(longBreakTimeInput.current?.value);

		if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
			formErrors.push("Digite apenas números para TODOS os campos");
		}

		if (workTime < 1 || workTime > 99) {
			formErrors.push("Digite valores entre 1 e 99 para foco");
		}

		if (shortBreakTime < 1 || shortBreakTime > 30) {
			formErrors.push("Digite valores entre 1 e 30 para descanso curto");
		}

		if (longBreakTime < 1 || longBreakTime > 60) {
			formErrors.push("Digite valores entre 1 e 60 para descanso longo");
		}

		if (formErrors.length > 0) {
			formErrors.forEach((error) => {
				showMessage.error(error);
			});
			return;
		}
	}

	return (
		<Container>
			<form className={styles.form} action="" onSubmit={handleSubmit}>
				<div className={styles.formRow}>
					<InputDefault
						type="number"
						ref={workTimeInput}
						idInputElement="workTime"
						labelText="Foco"
						defaultValue={state.config.workTime}
					/>
				</div>
				<div className={styles.formRow}>
					<InputDefault
						type="number"
						ref={shortBreakTimeInput}
						idInputElement="shortBreakTime"
						labelText="Descanso curto"
						defaultValue={state.config.shortBreakTime}
					/>
				</div>
				<div className={styles.formRow}>
					<InputDefault
						type="number"
						ref={longBreakTimeInput}
						idInputElement="longBreakTime"
						labelText="Descanso longo"
						defaultValue={state.config.longBreakTime}
					/>
				</div>

				<div className={styles.formRow}>
					<ButtonDefault
						type="submit"
						icon={<SaveAllIcon />}
						aria-label="Salvar Configuracoes"
						title="Salvar Configuracoes"
					/>
				</div>
			</form>
		</Container>
	);
}
