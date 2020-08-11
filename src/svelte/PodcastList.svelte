<Layout>
  <div class="flex flex-wrap">
    {#each podcasts as pc}
    <div class="w-1/3 flex-none">
      <img src="{pc.meta.imageURL}" alt="">
    </div>
    {/each}
  </div>
</Layout>

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