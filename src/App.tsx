import "./css/theme.css";
import "./css/global.css";

//import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { Footer } from "./components/Footer";
import { FormMain } from "./components/FormMain";

export function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>

			<Container>
				<Menu />
			</Container>

			<Container>
				<CountDown />
			</Container>

			<Container>
				<FormMain></FormMain>
			</Container>

			<Container>
				<Footer></Footer>
			</Container>
		</>
	);
}
