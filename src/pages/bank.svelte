<script lang="ts">
  import Card from "../components/BankCard.svelte";
  import { gameName, lastExtractedNumber } from "../store";

  let extractedNumbers: number[] = [];
  const bankCards = new Array(90)
    .fill(0)
    .map((_, i) => i)
    .reduce((result, number) => {
      const row = Math.floor(number / 30);
      const col = Math.floor(number / 5) % 2;
      result[row * 2 + col] = []
        .concat(result[row * 2 + col])
        .filter(Boolean)
        .concat(number + 1);
      return result;
    }, []);

  function extractNumber() {
    lastExtractedNumber.set(0);
    do {
      lastExtractedNumber.set(Math.round(Math.random() * 90));
    } while (extractedNumbers.includes($lastExtractedNumber));
    extractedNumbers = extractedNumbers.concat($lastExtractedNumber);
  }
</script>

<main>
  <h1>Banco - Partita {$gameName}</h1>
  <button on:click={extractNumber}>estrai numero</button>
  {#if $lastExtractedNumber}
    <p>ultimo numero estratto: {$lastExtractedNumber}</p>
  {/if}
  <ul>
    {#each bankCards as bankCard}
      <Card
        cellNumbers={bankCard}
        extractedNumbers={extractedNumbers.filter((number) =>
          bankCard.includes(number)
        )}
      />
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
