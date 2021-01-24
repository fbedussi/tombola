<script lang="ts">
	import { createNewPlayer } from '../../db'
	import { goto, params } from '@roxi/routify'

	let numberOfCards = 1

	function joinGame(ev) {
		ev.preventDefault()
		createNewPlayer($params.gameId, numberOfCards).then(playerId => {
			$goto(`/player/${playerId}/game/${$params.gameId}`)
		})
	}
</script>

<header class="header">
	<h1 class="pageTitle">Tombola | Unisciti come giocatore</h1>
</header>

<main>
	<form on:submit={joinGame}>
		<label for="gameId"> Codice partita </label>
		<input
			type="text"
			name="gameId"
			id="gameId"
			bind:value={$params.gameId}
			disabled
		/>
		<label for="numberOfCards"> Numero di schede </label>
		<input
			type="number"
			name="numberOfCards"
			id="numberOfCards"
			bind:value={numberOfCards}
		/>
		<button class="btn" type="submit">unisciti</button>
	</form>
</main>

<style>
	button {
		width: 100%;
	}

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 2rem;
		margin-top: 1rem;
		border: var(--border-thickness) solid grey;
		border-radius: var(--border-radius);
	}

	label {
		color: grey;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	input {
		margin-bottom: 1rem;
	}
</style>
