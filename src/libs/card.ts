type Row = (null | number)[]

export function generateNewPlayerCard() {
	function switchRowsCols(row: number, col: number) {
		const temp = rows[row - 1][col]
		rows[row - 1][col] = rows[row][col]
		rows[row][col] = temp
	}

	const rows: Row[] = [
		new Array(9).fill(null),
		new Array(9).fill(null),
		new Array(9).fill(null),
	]

	while (rows.some(row => row.filter(cell => cell).length < 5)) {
		let randomNumber
		do {
			randomNumber = Math.round(Math.random() * 90)
		} while (rows.flatMap(row => row).includes(randomNumber))
		let rowToFillIndex = rows.findIndex(
			row => row.filter(cell => cell).length < 5,
		)
		const colToFill = Math.floor((randomNumber - 1) / 10)
		rows[rowToFillIndex][colToFill] = randomNumber
		while (
			rowToFillIndex > 0 &&
			rows[rowToFillIndex][colToFill] < rows[rowToFillIndex - 1][colToFill]
		) {
			switchRowsCols(rowToFillIndex, colToFill)
			rowToFillIndex--
		}
	}

	return rows
}
