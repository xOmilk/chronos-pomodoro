import styles from "./styles.module.css";

export function Cycles() {
	return (
		<div className={styles.cycles}>
			<span>Ciclos</span>

			<div className={styles.cycleDots}>
				<div className={`${styles.dot} ${styles.workTime}`}></div>
				<div className={`${styles.dot} ${styles.shortBreakTime}`}></div>
				<div className={`${styles.dot} ${styles.workTime}`}></div>
				<div className={`${styles.dot} ${styles.shortBreakTime}`}></div>
				<div className={`${styles.dot} ${styles.workTime}`}></div>
				<div className={`${styles.dot} ${styles.shortBreakTime}`}></div>
				<div className={`${styles.dot} ${styles.workTime}`}></div>
				<div className={`${styles.dot} ${styles.longBreakTime}`}></div>
			</div>
		</div>
	);
}
