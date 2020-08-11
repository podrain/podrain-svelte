{#if expanded}
<div 
  in:slide="{{ delay: 100, duration: 300 }}" 
  out:slide="{{ duration: 300 }}" 
  class="h-48 bg-gray-200 p-3 flex flex-col justify-between"
>
  <div class="flex justify-between">
    <div class="flex flex-col w-4/5">
      <div class="w-full text-gray-800 text-sm">
        Some podcast title
      </div>
      <div class="w-full whitespace-no-wrap overflow-x-hidden">
        <!-- svelte-ignore a11y-distracting-elements -->
        <marquee scrollamount="4">
          Some podcast title
        </marquee>
      </div>
    </div>
    <div class="flex justify-end items-start w-4/5">
      <i 
        class="fas fa-chevron-down text-4xl"
        on:click={() => { expanded = false }}
      ></i>
    </div>
  </div>
  <div class="flex justify-between">
    <i class="fas fa-step-backward text-4xl"></i>
    <i class="fas fa-undo text-4xl"></i>
    <i class="fas fa-play text-4xl text-teal-500"></i>
    <i class="fas fa-redo text-4xl"></i>
    <i class="fas fa-step-forward text-4xl"></i>
  </div>
  <div>
    00:00:00 / 1:00:00
  </div>
  <div class="flex items-center justify-between">
    <div class="relative w-full">
      <input type="range" id="play-slider" class="w-full appearance-none bg-gray-200">
    </div>
  </div>
</div>
{:else}
<div 
  in:slide="{{ delay: 300, duration: 100 }}"
  out:slide="{{ duration: 100 }}"
  on:click={() => { expanded = true }}
  class="h-12 bg-gray-200 flex items-center justify-center"
>
  <i class="fas fa-chevron-up text-4xl"></i>
</div>
{/if}

<script>
  import { slide } from 'svelte/transition'
  let expanded = true
</script>