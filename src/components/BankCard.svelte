<script lang="ts">
  export let cellNumbers: number[];
  export let extractedNumbers: number[];

  const rows: number[][] = cellNumbers.reduce((rows, number, index) => {
    const row = Math.floor(index / 5);
    rows[row] = [].concat(rows[row]).filter(Boolean).concat(number);
    return rows;
  }, []);
</script>

<table class="card">
  {#each rows as row}
    <tr>
      {#each row as cell}
        <td>
          <div class:extracted={extractedNumbers.includes(cell)} class="number">{cell}</div>
        </td>
      {/each}
    </tr>
  {/each}
</table>

<style>
</style>
