<script lang="ts">
  export let cellNumbers: number[];
  let extractedNumbers: number[] = [];
  const rows: number[][] = cellNumbers.reduce((rows, number, index) => {
    const row = Math.floor(index / 5);
    rows[row] = [].concat(rows[row]).filter(Boolean).concat(number);
    return rows;
  }, []);
</script>

<main>
  <li>
    <table>
      {#each rows as row}
        <tr>
          {#each row as cell}
            <td class={extractedNumbers.includes(cell) ? "extracted" : ""}>
              {cell}
            </td>
          {/each}
        </tr>
      {/each}
    </table>
  </li>
</main>

<style>
  .extracted {
    color: red;
  }
</style>
