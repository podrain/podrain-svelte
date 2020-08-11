{#if podcast}
  <div class="flex flex-col">
    <div class="flex">
      <div class="w-1/3 m-3">
        <img src="{podcast.meta.imageURL}" alt="{podcast.meta.title}">
      </div>
      <div class="w-2/3 flex flex-col justify-center text-lg py-3 pr-3">
        <h1 class="font-bold leading snug">{podcast.meta.title}</h1>
        <div class="mt-3 flex-col">
          <div class="flex">
            <button class="bg-indigo-500 p-3 text-sm flex-1">
              <i class="fas fa-sync mr-3"></i>
              Refresh
            </button>
            <button class="bg-red-500 p2 text-sm flex-1">
              <i class="fas fa-times mr-3"></i>
              Delete
            </button>
          </div>
          <button class="bg-yellow-500 text-black p-2 text-sm w-full">
            <i class="fas fa-search mr-3"></i>
            Search episodes
          </button>
        </div>
      </div>
    </div>

    <ul class="mx-3 mb-3">
      {#each episodes as ep}
      <li class="flex flex-col mt-3">
        <div class="flex-1 p-3 relative bg-gray-700">
          <div class="leading-tight text-xs font-bold truncate">
            { ep.title }
          </div>
          <div class="flex mt-3">
            <div class="w-1/5">
              <img src="{ep.imageURL || podcast.meta.imageURL}" alt="">
            </div>
            <div class="w-4/5 text-xs font-light ml-3">
              {Helpers.cleanHTMLString(ep.description).substr(0, 125) + '...'}
            </div>
          </div>
        </div>
      </li>
      {/each}
    </ul>

    <button 
      on:click={() => getMoreEpisodes(10)}
      class="bg-purple-500 mx-3 mb-3 p-3"
    >Load more</button>
  </div>
{/if}

<script>
  import State from '../js/State'
  import Helpers from '../js/Helpers'
  export let podcastID = null

  let podcast = null
  let allEpisodes = []
  let episodes = []

  function getMoreEpisodes(numEpisodes) {
    let newBatch = allEpisodes.slice(episodes.length, episodes.length + numEpisodes)
    episodes = episodes.concat(newBatch)
  }

  State.dexieDB.podcasts.where({ _id: podcastID }).toArray().then((podcasts) => {
    podcast = podcasts[0]
  })

  State.dexieDB.episodes.where({
    podcast_id: podcastID
  }).reverse().sortBy('pubDate').then((inEpisodes) => {
    allEpisodes = inEpisodes
    episodes = allEpisodes.slice(0, 10)
  })
</script>