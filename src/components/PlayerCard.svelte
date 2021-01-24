<script lang="ts">
	import type { Row } from '../model'

	export let rows: Row[]

	let extractedNumbers: number[] = []

	function toggleCell(cell) {
		extractedNumbers = extractedNumbers.includes(cell)
			? extractedNumbers.filter(n => n !== cell)
			: extractedNumbers.concat(cell)
	}
</script>

<table class="card">
	{#each rows as row}
		<tr>
			{#each row as cell}
				<td on:click={() => cell && toggleCell(cell)}>
					<div class:extracted={extractedNumbers.includes(cell)} class="number">
						<span>{cell !== null ? cell : ''}</span>
					</div>
				</td>
			{/each}
		</tr>
	{/each}
</table>

<style>
</style>
