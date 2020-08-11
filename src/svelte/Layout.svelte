<div class="flex flex-col h-screen">
  <div class="flex items-center justify-between h-16 bg-teal-800 px-4 text-white">
    <i on:click={() => push('/podcasts')} class="fas fa-home text-4xl"></i>
    <i class="fas fa-list-ol text-4xl"></i>
    <i class="fas fa-plus text-4xl"></i>
    <i on:click={() => push('/settings')} class="fas fa-cog text-4xl"></i>
  </div>
  <div class="flex-1 overflow-y-scroll bg-gray-800 text-white">
    <slot></slot>
  </div>
</div>

<script>
  import App from './App.svelte'
  import { push } from 'svelte-spa-router'
</script>