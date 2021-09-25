<script>
  import Explanation from "./explanation.svelte";
  import Github from "./github.svelte";
  import Header from "./header.svelte";
  import HowTo from "./howTo.svelte";
  import { darkMode } from "./lib/globals";
  import Try from "./try.svelte";
</script>

<div class:dark={$darkMode}>
  <main
    class="transition-colors duration-500 dark:bg-gray-800 dark:text-purple-200 bg-purple-300 text-gray-600 font-mono relative h-screen"
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
          <Github />
        </div>
      </div>
    </div>
  </main>
</div>
