<div class="p-3">
  <h1 class="text-xl text-center">Settings</h1>

  <span>Proxy URL</span>
  <input type="text" class="w-full p-1 mt-1 text-black" bind:value={proxyURL}>
  <button on:click={addProxyURL} class="w-full bg-green-500 h-8">
    <i class="fas fa-save mr-3"></i>
    Save
  </button>

  <button on:click={downloadBackup} class="mt-6 bg-purple-600 p-1 mr-1 w-full">
    <i class="fas fa-download mr-3"></i>
    Download backup
  </button>

  <h2 class="mt-3">Restore backup</h2>
  <input on:change={(e) => {
    restoreFile = e.target.files[0]
  }} type="file" class="mt-1">

  {#if restoreFile}
  <button on:click={restoreBackup} class="bg-orange-600 p-1 text-white mr-1 w-full mt-3">
    {#if restoring}
      <div class="fas fa-spinner fa-spin mr-3"></div>
    {:else}
      <i class="fas fa-upload mr-3"></i>
    {/if}
    {#if restoreStatus}
      {restoreStatus}
    {:else}
      Restore backup
    {/if}
  </button>
  {/if}
</div>

<script>
  import State from '../js/State'
  import FileSaver from 'file-saver'

  let proxyURL = localStorage.getItem('proxy_url') || ''
  let restoreStatus = ''
  let restoring = false
  let restoreFile = null

  function addProxyURL() {
    localStorage.setItem('proxy_url', proxyURL)
  }

  function restoreBackup() {
    restoring = true
    restoreStatus = 'Starting restore...'
    restoreFile.text().then(result => {
      let parsedResult = JSON.parse(result)
      restoreStatus = 'Clearing podcasts...'
      return Promise.all([
        State.dexieDB.podcasts.clear(),
        State.dexieDB.episodes.clear(),
      ]).then(() => {
        restoreStatus = 'Loading new podcasts...'
        return Promise.all([
          State.dexieDB.podcasts.bulkAdd(parsedResult.podcasts),
          State.dexieDB.episodes.bulkAdd(parsedResult.episodes),
        ])
      }).then(() => {
        restoreStatus = 'podcasts loaded!'
        restoring = false
      })
    })
  }

  function downloadBackup() {
    let getPodcasts = State.dexieDB.podcasts.toArray()
    let getEpisodes = State.dexieDB.episodes.toArray()

    Promise.all([getPodcasts, getEpisodes]).then(result => {
      let downloadPayload = {
        podcasts: result[0],
        episodes: result[1]
      }

      let downloadBlob = new Blob([JSON.stringify(downloadPayload)], {
        type: 'text/plain;charset=utf8'
      })

      FileSaver.saveAs(downloadBlob, 'backup.json')
    })
  }
</script>