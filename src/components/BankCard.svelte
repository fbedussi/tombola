<script lang="ts">
import type { Row } from "../model";
	export let cellNumbers: number[]
	export let extractedNumbers: number[]

	const rows: Row[] = cellNumbers.reduce((rows, number, index) => {
		const row = Math.floor(index / 5)
		rows[row] = [].concat(rows[row]).filter(Boolean).concat(number)
		return rows
	}, [])
</script>

<table class="card">
	{#each rows as row}
		<tr>
			{#each row as cell}
				<td>
					<div class:extracted={extractedNumbers.includes(cell)} class="number">
						<span>{cell}</span>
					</div>
				</td>
			{/each}
		</tr>
	{/each}
</table>

<style>
</style>
