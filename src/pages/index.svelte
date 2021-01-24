<script lang="ts">
  import { initNewGame, createNewPlayer } from "../db"
  import { goto } from '@roxi/routify'
  import { fly } from 'svelte/transition';

  let numberOfCards = 1
  let gameId

  function startNewGame() {
    initNewGame().then(gameId =>  $goto(`/bank/${gameId}`))
  }

  function joinGame(ev) {
    ev.preventDefault();
    createNewPlayer(gameId, numberOfCards).then(playerId =>  {
      debugger
      $goto(`/player/${gameId}/id/${playerId}`)
    })
  }

  let showJoinGameForm = false
  function toggleJoinGameForm() {
    showJoinGameForm = !showJoinGameForm
    console.log({showJoinGameForm});
  }
</script>

<header class="header">
  <h1 class="pageTitle">Tombola</h1>
</header>

<main>
    <ul>
      <li>
        <button class="btn" on:click={startNewGame}>Inizia una nuova partita come banco</button>
      </li>
      <li>
        <button class="btn" on:click={toggleJoinGameForm}>Unisciti ad una partita come giocatore</button>
        {#if showJoinGameForm}
          <form on:submit={joinGame}
            transition:fly="{{ y: 200, duration: 2000 }}"
          >
            <label for="gameId">
              Codice partita
            </label>
            <input type="text" name="gameId" id="gameId" bind:value={gameId}/>
            <label for="numberOfCards">
              Numero di schede
            </label>
            <input type="number" name="numberOfCards" id="numberOfCards" bind:value={numberOfCards}/>
            <button class="btn" type="submit" disabled={!gameId}>unisciti</button>
          </form>
        {/if}
      </li>
    </ul>
</main>

<style>
  ul {
    display: grid;
    gap: 2em;
    width: 20em;
    margin: 0 auto;
  }

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
