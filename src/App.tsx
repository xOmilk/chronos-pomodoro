import "./css/theme.css";
import "./css/global.css";

import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

export function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>

			<Container>
				<Heading>MENU</Heading>

				<Menu />
			</Container>
		</>
	);
}
