<script>
  import Explanation from "./explanation.svelte";
  import Header from "./header.svelte";
  import HowTo from "./howTo.svelte";
  import { darkMode } from "./lib/globals";
  import Try from "./try.svelte";
</script>

<div class:dark={$darkMode}>
  <main
    class="w-screen h-screen font-mono relative transition-colors duration-500 dark:bg-gray-800 dark:text-purple-200 bg-purple-300 text-gray-600"
  >
    <div class="flex relative z-20 items-center">
      <div
        class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4"
      >
        <div class="flex flex-col">
          <Header />
          <Explanation />
          <HowTo />
          <br />
          <Try />
        </div>
      </div>
    </div>
  </main>
</div>
