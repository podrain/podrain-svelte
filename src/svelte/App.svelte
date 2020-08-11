<div class="flex flex-col h-screen">
  <div class="flex items-center justify-between h-16 bg-teal-800 px-4 text-white">
    <i on:click={ () => page('/podcasts') } class="fas fa-home text-4xl"></i>
    <i class="fas fa-list-ol text-4xl"></i>
    <i class="fas fa-plus text-4xl"></i>
    <i on:click={ () => page('/settings') } class="fas fa-cog text-4xl"></i>
  </div>
  <div class="flex-1 overflow-y-scroll bg-gray-800 text-white">
    <svelte:component this={currentPage} {...currentProps}/>
  </div>
  <Playbox />
</div>

<script>
  import Layout from './Layout.svelte'
  import PodcastList from './PodcastList.svelte'
  import Settings from './Settings.svelte'
  import PodcastShow from './PodcastShow.svelte'
  import Playbox from './Playbox.svelte'
  import page from 'page'

  let currentPage
  let currentProps

  page.base('/#!')
  page('/', () => {
    page.redirect('/podcasts')
  })

  page('/podcasts/:id', (e) => {
    currentProps = {
      podcastID: e.params.id
    }
    currentPage = PodcastShow
  })

  page('/podcasts', () => {
    currentProps = {}
    currentPage = PodcastList
  })

  page('/settings', () => {
    currentProps = {}
    currentPage = Settings
  })

  page()
</script>