<script>
  import { SunIcon, MoonIcon } from "svelte-feather-icons";
  import { darkMode } from "./globals";
</script>

<div class="flex items-center justify-center">
  <input type="checkbox" bind:checked={$darkMode} class="toggle" />
  <div class="ml-3  font-medium">
    {#if $darkMode}
      <MoonIcon size="24" />
    {:else}
      <SunIcon size="24" />
    {/if}
  </div>
</div>
