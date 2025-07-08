import { TrashIcon } from "lucide-react";
import { ButtonDefault } from "../../components/ButtonDefault";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";

import styles from "./styles.module.css";

export function History() {
	return (
		<MainTemplate>
			<Heading>
				<span>History</span>
				<span className={styles.buttonContainer}>
					<ButtonDefault icon={<TrashIcon />} color="red" />
				</span>
			</Heading>

			<Container>
				<div className="table"></div>
			</Container>
		</MainTemplate>
	);
}
