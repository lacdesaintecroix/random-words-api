<script>
  import Explanation from "./explanation.svelte";
  import Github from "./github.svelte";
  import Header from "./header.svelte";
  import HowTo from "./howTo.svelte";
  import Try from "./try.svelte";
</script>

<main
  class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen"
>
  <div class="flex relative z-20 items-center">
    <div
      class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4"
    >
      <div class="flex flex-col">
        <Header />
        <Explanation />
        <Try />
        <HowTo />
        <br />
        <Github />
      </div>
    </div>
  </div>
</main>

<style>
  main {
    background-color: hsl(274, 28%, 75%);
  }
</style>
