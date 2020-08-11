
<Router {routes}/>

<script>
  import Router from 'svelte-spa-router'
  import PodcastList from './PodcastList.svelte'
  import Settings from './Settings.svelte'

  const routes = {
    '/podcasts': PodcastList,
    '/settings': Settings,
    '/': PodcastList
  }
</script>