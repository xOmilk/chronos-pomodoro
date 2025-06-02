export function getNextCycle(currentCycle: number) {
	//Se o ciclo for 1 ou 8 reseta, caso contrario acrescenta
	return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}
