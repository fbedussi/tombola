<script lang="ts">
  export let rows
  
  let extractedNumbers: number[] = [];

  function toggleCell(cell) {
    extractedNumbers = extractedNumbers.includes(cell) ? extractedNumbers.filter(n => n !==cell) : extractedNumbers.concat(cell)
  }
</script>

<table class="card">
  {#each rows as row}
    <tr>
      {#each row as cell}
        <td on:click={() => cell && toggleCell(cell)}>
          <div class:extracted={extractedNumbers.includes(cell)} class="number" >{cell !== null ? cell : ''}</div>
        </td>
      {/each}
    </tr>
  {/each}
</table>

<style>
</style>
