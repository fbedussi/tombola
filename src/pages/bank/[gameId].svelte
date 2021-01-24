<script lang="ts">
	import Card from '../../components/BankCard.svelte'
	import ShareIcon from '../../icons/ShareIcon.svelte'
	import { extractedNumbers } from '../../store'
	import { writeLastNumber, getExtractedNumbers } from '../../db'

	export let gameId

	getExtractedNumbers(gameId).then(
		data => data && extractedNumbers.set(data.extractedNumbers),
	)

	const bankCards = new Array(90)
		.fill(0)
		.map((_, i) => i)
		.reduce((result, number) => {
			const row = Math.floor(number / 30)
			const col = Math.floor(number / 5) % 2
			result[row * 2 + col] = []
				.concat(result[row * 2 + col])
				.filter(Boolean)
				.concat(number + 1)
			return result
		}, [])

	function extractNumber() {
		let lastExtractedNumber
		do {
			lastExtractedNumber = Math.round(Math.random() * 90)
		} while ($extractedNumbers.includes(lastExtractedNumber))
		writeLastNumber(gameId, lastExtractedNumber)
		extractedNumbers.set($extractedNumbers.concat(lastExtractedNumber))
	}

	function copyGameId() {
		navigator.clipboard
			.writeText(gameId)
			.then(() => alert('Codice partita copiatoh'))

		navigator.share({
			url: `${__myapp.env.APP_URL}/player/${gameId}`,
			title: 'Unisciti alla partita di tombola',
		})
	}
</script>

<header class="header">
	<button class="btn share" on:click={copyGameId}>
		<ShareIcon />
	</button>
	<h1 class="pageTitle">Banco</h1>
	<button class="btn extract-number" on:click={extractNumber}
		>estrai numero</button
	>
	{#if $extractedNumbers[$extractedNumbers.length - 1]}
		<div class="number">{$extractedNumbers[$extractedNumbers.length - 1]}</div>
	{/if}
</header>
<main class="main">
	<ul class="cards">
		{#each bankCards as bankCard}
			<li>
				<Card
					cellNumbers={bankCard}
					extractedNumbers={$extractedNumbers.filter(number =>
						bankCard.includes(number),
					)}
				/>
			</li>
		{/each}
	</ul>
</main>

<style>
	.header {
		grid-template-columns: auto 1fr auto 4rem;
		gap: 1rem;
	}

	.header .number {
		grid-column-start: 4;
		place-self: center center;
	}

	.extract-number {
		grid-column-start: 3;
		background-color: transparent;
		border: 3px solid white;
		place-self: center right;
	}

	.cards {
		grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
		padding: 0 1.5rem;
	}
</style>
