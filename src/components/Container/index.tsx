import styles from "./styles.module.css";

type ContainerProps = {
	children: React.ReactNode;
	classname?: string;
};

export function Container({ children, classname }: ContainerProps) {
	return (
		<div className={`${styles.container}`}>
			<div className={styles.content}>
				<section className={classname}>{children}</section>
			</div>
		</div>
	);
}
