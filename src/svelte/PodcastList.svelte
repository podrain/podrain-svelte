
<div class="flex flex-wrap">
  {#each podcasts as pc}
  <div 
    on:click={() => { window.location.href = '/#!/podcasts/'+pc._id}}
    class="w-1/3 flex-none"
  >
    <img 
      src="{pc.meta.imageURL}"
      alt="{pc.meta.title}"
    >
  </div>
  {/each}
</div>

<script>
  import State from '../js/State'
  import Layout from './Layout.svelte'

  let podcasts = []
  let loading = false

  function getPodcasts() {
    loading = true
    State.dexieDB.podcasts.toArray().then(result => {
      podcasts = result
      loading = false
    })
  }

  getPodcasts()
</script>