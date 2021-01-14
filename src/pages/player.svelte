<script lang="ts">
  import Card from "../components/PlayerCard.svelte";
  import { gameName, lastExtractedNumber } from "../store";

  const numberOfCards = 5
  const cards = new Array(numberOfCards)
</script>

<main>
  <h1>PLayer - Partita {$gameName}</h1>
  {#if $lastExtractedNumber}
    <p>ultimo numero estratto: {$lastExtractedNumber}</p>
  {/if}
  <ul>
    {#each cards as card}
      <Card/>
    {/each}
  </ul>
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
