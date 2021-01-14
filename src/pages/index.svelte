<script lang="ts">
  import {initNewGame} from "../db"
  import { goto } from '@roxi/routify'

  function startNewGame() {
    initNewGame().then(gameId =>  $goto(`/bank/${gameId}`))
  }
</script>
<main>
  <h1>Tombola</h1>
  <nav>
    <ul>
      <li>
        <button on:click={startNewGame}>Inizia una nuova partita come banco</button>
      </li>
      <li>
        <a href="/player">Giocatore</a>
      </li>
    </ul>
  </nav>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
