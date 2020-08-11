
<Router {routes}/>

<script>
  import Router, { wrap, replace } from 'svelte-spa-router'
  import PodcastList from './PodcastList.svelte'
  import Settings from './Settings.svelte'
  import PodcastShow from './PodcastShow.svelte'

  const routes = {
    '/': wrap(PodcastList, () => {
      replace('/podcasts')
    }),
    '/podcasts/:id': PodcastShow,
    '/podcasts': PodcastList,
    '/settings': Settings,
  }
</script>