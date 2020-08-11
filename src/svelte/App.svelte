<div class="flex flex-col h-screen">
  <div class="flex items-center justify-between h-16 bg-teal-800 px-4 text-white">
    <i on:click={() => changePage('PodcastList')} class="fas fa-home text-4xl"></i>
    <i class="fas fa-list-ol text-4xl"></i>
    <i class="fas fa-plus text-4xl"></i>
    <i on:click={() => changePage('Settings')} class="fas fa-cog text-4xl"></i>
  </div>
  <div class="flex-1 overflow-y-scroll bg-gray-800 text-white">
    <svelte:component this={currentPage} />
  </div>
</div>

<script>
  import PodcastList from './PodcastList.svelte'
  import Settings from './Settings.svelte'

  let pages = {
    PodcastList,
    Settings
  }

  let currentPage = pages['Settings']

  function changePage(newPage) {
    currentPage = pages[newPage]
  }
</script>