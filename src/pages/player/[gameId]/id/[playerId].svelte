<script lang="ts">
	import Card from '../../../../components/PlayerCard.svelte'
	import { subscribeLastNumber, getPlayerCards } from '../../../../db'
	import { params } from '@roxi/routify'

	let lastExtractedNumber
	subscribeLastNumber(
		$params.gameId,
		lastNumber => (lastExtractedNumber = lastNumber),
	)

	let cards = []
	getPlayerCards($params.playerId).then(playerCards => (cards = playerCards))
</script>

<header class="header">
	<h1 class="pageTitle">Player</h1>
	{#if lastExtractedNumber}
		<div class="number">{lastExtractedNumber}</div>
	{/if}
</header>
<main class="main">
	<ul class="cards">
		{#each cards as card}
			<li><Card rows={card} /></li>
		{/each}
	</ul>
</main>

<style>
	.header {
		grid-template-columns: 1fr 1fr;
	}

	.header .number {
		place-self: center right;
	}

	.cards {
		grid-template-columns: repeat(auto-fit, minmax(43rem, 1fr));
	}
</style>
