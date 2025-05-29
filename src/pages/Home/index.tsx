import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { FormMain } from "../../components/FormMain";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
	return (
		<MainTemplate>
			<Container>
				<CountDown />
			</Container>

			<Container>
				<FormMain />
			</Container>
		</MainTemplate>
	);
}
