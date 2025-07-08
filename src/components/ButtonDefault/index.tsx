import styles from "./styles.module.css";

type ButtonDefaultProps = {
	icon: React.ReactNode;
	color?: "green" | "red";
	idButtonElement?: string;
} & React.ComponentProps<"button">;

export function ButtonDefault({
	idButtonElement,
	icon,
	color = "green",
	...props
}: ButtonDefaultProps) {
	return (
		<>
			<button
				id={idButtonElement}
				className={`${styles.button} ${styles[color]}`}
				{...props}
			>
				{icon}
			</button>
		</>
	);
}
