import { History, House, MoonIcon, Settings, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { RouterLink } from "../RouterLink";

type AvailableThemes = "dark" | "light";

export function Menu() {
	const [theme, setTheme] = useState<AvailableThemes>(() => {
		const storageTheme =
			(localStorage.getItem("theme") as AvailableThemes) ?? "dark";
		return storageTheme;
	});

	function handleThemeChange(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) {
		event.preventDefault();

		setTheme((prevTheme) => {
			const nextTheme = prevTheme === "dark" ? "light" : "dark";
			return nextTheme;
		});
	}

	useEffect(() => {
		//alterando o elemento principal
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const nextThemeIcon = {
		dark: <SunIcon />,
		light: <MoonIcon />,
	};

	return (
		<nav className={styles.menu}>
			<RouterLink
				title="Ir para a home"
				className={styles.menuLink}
				href="/"
			>
				<House />
			</RouterLink>

			<RouterLink
				title="Verificar histórico"
				className={styles.menuLink}
				href="/history"
			>
				<History />
			</RouterLink>
			<RouterLink
				title="Ir para as configurações"
				className={styles.menuLink}
				href="/settings"
			>
				<Settings />
			</RouterLink>
			<RouterLink
				title="Mudar o tema"
				className={styles.menuLink}
				href="#"
				onClick={handleThemeChange}
			>
				{nextThemeIcon[theme]}
			</RouterLink>
		</nav>
	);
}
