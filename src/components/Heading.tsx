import styles from "./Heading.module.css";

export function Heading() {
	return (
		<div className={styles.outra}>
			<div className={styles.container}>
				<div className={styles.heading}>
					<h1>Olá pra todos</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et iusto
						recusandae laudantium eum aliquid dicta doloribus cupiditate impedit
						similique corporis perferendis omnis, quod odio ad dolor pariatur
						neque nam? Ducimus.
					</p>
					<p>
						Ab iste modi corrupti expedita asperiores. Deleniti cum, quibusdam
						mollitia earum quidem excepturi nihil autem maiores, vitae
						perspiciatis tenetur. Ratione libero modi natus vitae. Dolorem in
						laboriosam magni sapiente reiciendis?
					</p>
				</div>
			</div>
		</div>
	);
}
