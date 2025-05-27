import styles from "./styles.module.css";

type InputDefaultProps = {
	labelText: string;
	idInputElement: string;
} & React.ComponentProps<"input">;

export function InputDefault({
	idInputElement,
	type="text",
	labelText,
	...anyParam
}: InputDefaultProps) {
	return (
		<>
			<label className={styles.label} htmlFor={idInputElement}>
				{labelText}
			</label>
			<input id={idInputElement} className={styles.input} type={type} {...anyParam} />
		</>
	);
}
