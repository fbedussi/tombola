<script lang="ts">
  import Card from "../../components/BankCard.svelte";
  import { extractedNumbers } from "../../store";
  import { writeLastNumber, getExtractedNumbers } from "../../db";
 
  export let gameId

  getExtractedNumbers(gameId).then((data) => extractedNumbers.set(data.extractedNumbers))

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
    let lastExtractedNumber;
    do {
      lastExtractedNumber = Math.round(Math.random() * 90);
    } while ($extractedNumbers.includes(lastExtractedNumber));
    writeLastNumber(gameId, lastExtractedNumber)
    extractedNumbers.set($extractedNumbers.concat(lastExtractedNumber));
  }
</script>


<header class="header">
  <h1 class="pageTitle">Banco</h1>
  {#if $extractedNumbers[$extractedNumbers.length - 1]}
    <div class="number">{$extractedNumbers[$extractedNumbers.length - 1]}</div>
  {/if}
  <button class="btn" on:click={extractNumber}>estrai numero</button>
</header>
<main class="main">
  <ul class="cards">
    {#each bankCards as bankCard}
      <li>
        <Card
          cellNumbers={bankCard}
          extractedNumbers={$extractedNumbers.filter((number) =>
            bankCard.includes(number)
          )}
        />
      </li>
    {/each}
  </ul>
</main>

<style>
  .header {
    grid-template-columns: 1fr 1fr 1fr;
  }


  .header .number {
    place-self: center center;
  }

  .btn {
    background-color: transparent;
    border: 3px solid white;
    place-self: center right;
  }

  .cards {
    grid-template-columns: repeat( auto-fit, minmax(23rem, 1fr) );
  }
</style>
