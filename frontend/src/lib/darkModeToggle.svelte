<script>
  import { SunIcon, MoonIcon } from "svelte-feather-icons";
  import { darkMode } from "./globals";
</script>

<div class="flex items-center justify-center w-full mb-12">
  <label for="toggleB" class="flex items-center cursor-pointer">
    <div class="relative">
      <input
        bind:checked={$darkMode}
        type="checkbox"
        id="toggleB"
        class="sr-only"
      />
      <div class="block bg-gray-600 w-14 h-8 rounded-full" />
      <div
        class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
      />
    </div>
    <div class="ml-3  font-medium">
      {#if $darkMode}
        <MoonIcon size="24" />
      {:else}
        <SunIcon size="24" />
      {/if}
    </div>
  </label>
</div>

<style>
  input:checked ~ .dot {
    transform: translateX(100%);
  }
</style>
