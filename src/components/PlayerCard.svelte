<script lang="ts">
  function switchRowsCols(row, col) {
      const temp = rows[row - 1][col]
      rows[row - 1][col] = rows[row][col]
      rows[row][col] = temp
  }

  const rows = [new Array(9).fill(null), new Array(9).fill(null), new Array(9).fill(null)];
  while (rows.some(row => row.filter(cell => cell).length < 5)) {
    let randomNumber
    do {
      randomNumber = Math.round(Math.random() * 90)
    } while (rows.flatMap(row => row).includes(randomNumber))
    let rowToFillIndex = rows.findIndex(row => row.filter(cell => cell).length < 5)
    const colToFill = Math.floor((randomNumber - 1) / 10)
    rows[rowToFillIndex][colToFill] = randomNumber
    while (rowToFillIndex > 0 && rows[rowToFillIndex][colToFill] < rows[rowToFillIndex - 1][colToFill]) {
      switchRowsCols(rowToFillIndex, colToFill)
      rowToFillIndex--
    }
  }
  
  let extractedNumbers: number[] = [];

  function toggleCell(cell) {
    extractedNumbers = extractedNumbers.includes(cell) ? extractedNumbers.filter(n => n !==cell) : extractedNumbers.concat(cell)
  }
</script>

<main>
  <li>
    <table>
      {#each rows as row}
        <tr>
          {#each row as cell}
            <td class={extractedNumbers.includes(cell) ? "extracted" : ""} on:click={() => toggleCell(cell)}>
              {cell !== null ? cell : ''}
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
