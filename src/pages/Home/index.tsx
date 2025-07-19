import { useEffect } from "react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { FormMain } from "../../components/FormMain";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
	useEffect(() => {
		document.title = "Chronos Pomodoro";
	}, []);

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
