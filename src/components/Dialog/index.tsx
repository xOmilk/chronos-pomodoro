import { type ToastContentProps } from "react-toastify";
import { ButtonDefault } from "../ButtonDefault";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

import styles from "./styles.module.css";

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
	return (
		<>
			<div className={styles.container}>
				<p>{data}</p>

				<div className={styles.buttonsContainer}>
					<ButtonDefault
						onClick={() => closeToast(true)}
						icon={<ThumbsUpIcon />}
						aria-label="Confirmar ação e fechar"
						title="Confirmar ação e fechar"
					/>
					<ButtonDefault
						onClick={() => closeToast(false)}
						icon={<ThumbsDownIcon />}
						color="red"
						aria-label="Cancelar ação e fechar"
						title="Cancelar ação e fechar"
					/>
				</div>
			</div>
		</>
	);
}
