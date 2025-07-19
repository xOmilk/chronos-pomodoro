import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { SettingsForm } from "./SettingsForm";

import styles from "./styles.module.css";

Settings.Form = SettingsForm;
export function Settings() {
	return (
		<MainTemplate>
			<Container>
				<Heading>Configurações</Heading>
			</Container>

			<Container classname={styles.tipMessage}>
				<p>
					Nesta seção você pode modificar as configurações de como
					planeja modificar seu temporizador.
				</p>
				<p>
					Modifique as configurações para tempo de <b> foco</b>,{" "}
					<b>descanso curto</b> e <b>descanso longo</b>.
				</p>
			</Container>

			<Settings.Form />
		</MainTemplate>
	);
}
