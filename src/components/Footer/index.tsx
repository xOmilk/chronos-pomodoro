import { RouterLink } from "../RouterLink";
import styles from "./styles.module.css";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerLinks}></div>
			<RouterLink href="/about-pomodoro">
				Entenda como funciona a técnica pomodoro
			</RouterLink>
			<RouterLink href="https://github.com/xOmilk/chronos-pomodoro">
				Chronos Pomodoro &copy; {new Date().getFullYear()}
			</RouterLink>
		</footer>
	);
}
