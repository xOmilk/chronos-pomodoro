import styles from "./styles.module.css";

export function CountDown() {
	return (
		<div className={styles.countDown}>
			<div className={styles.number}>00:00</div>
		</div>
	);
}
