<script>
  import spinningWheelPng from "./assets/spinning-wheel.png";
  import Github from "./github.svelte";
  import DarkModeToggle from "./lib/darkModeToggle.svelte";
</script>

<div class="w-full flex justify-between top-5">
  <Github />
  <DarkModeToggle />
</div>
<img
  src={spinningWheelPng}
  alt="spinning-wheel.png"
  class="rounded-full w-28 mx-auto"
/>
<p class="text-3xl my-6 text-center">Out of words?</p>
<h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto text-center py-2">
  RANDOM WORDS API
</h2>
