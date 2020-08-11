{#if name}
<h1 >Hey there {name}!</h1>
{/if}
<input type="text" bind:value={name}>
<button on:click={countUp}>I clicked this {count} times.</button>

<script>
  let name = ''
  let count = 0

  function countUp() {
    count += 1
  }
</script>