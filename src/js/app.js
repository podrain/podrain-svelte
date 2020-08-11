import '../css/app.css'
import '@fortawesome/fontawesome-free/css/all.css'
import localforage from 'localforage'
import Dexie from 'dexie'
import State from './State'
import App from '../svelte/App.svelte'

let dexieDB = new Dexie('podrain')
dexieDB.version(1).stores({
  podcasts: '&_id',
  episodes: '&_id,podcast_id,pubDate',
})
State.dexieDB = dexieDB

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'Podrain Episodes'
})

new App({
  target: document.getElementById('app')
})