import { ButtonDefault } from "../ButtonDefault";
import { InputDefault } from "../InputDefault";
import { Cycles } from "../Cycles";
import { PlayCircleIcon } from "lucide-react";

import styles from "./styles.module.css";

export function FormMain() {
	return (
		<div className={styles.form}>
			<div className={styles.formRow}>
				<InputDefault
					idInputElement="taskId"
					labelText="TESTEEEE"
					type="search"
					placeholder="Digite algo"
				></InputDefault>
			</div>
			<div className={styles.formRow}>
				<p></p>
			</div>
			<div className={styles.formRow}>
				<Cycles />
			</div>
			<div className={styles.formRow}>
				<ButtonDefault
					idButtonElement="play"
					icon={<PlayCircleIcon />}
				></ButtonDefault>
			</div>
		</div>
	);
}
