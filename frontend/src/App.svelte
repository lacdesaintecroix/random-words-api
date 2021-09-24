<script>
  import spinningWheelPng from "./assets/spinning-wheel.png";
  import { GithubIcon } from "svelte-feather-icons";
</script>

<main
  class="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen"
>
  <div class="flex relative z-20 items-center">
    <div
      class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4"
    >
      <div class="flex flex-col">
        <img src={spinningWheelPng} class="rounded-full w-28 mx-auto" />
        <p class="text-3xl my-6 text-center dark:text-white">Out of words?</p>
        <h2
          class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2"
        >
          RANDOM WORDS API
        </h2>
        <div class="flex items-center justify-center">
          <a
            href="https://github.com/lacdesaintecroix/random-words-api"
            class="uppercase py-2 my-2 px-4 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
          >
            <div class="flex items-center">
              <span><GithubIcon size="32" /></span>
              <span class="ml-2 text-xl">Check out the Repo</span>
            </div>
          </a>
        </div>
        <h2
          class="mt-4 max-w-3xl text-4xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2"
        >
          How do I use this ?
        </h2>
        <div class="mockup-code">
          <pre>
            <code>// Get one word</code>
          </pre>
          <pre
            data-prefix="$"
            class="text-warning">
            <code>fetch("https://random-words-api.xyz/api")</code>
          </pre>
          <pre
            data-prefix=">"
            class="text-success">
            <code>{"{word:'spaghetti',length:'9'}"}</code>
          </pre>
          <pre>
            <code>// Get 20 words</code>
          </pre>
          <pre
            data-prefix="$"
            class="text-warning">
            <code>fetch("https://random-words-api.xyz/api?n=20")</code>
          </pre>
          <pre
            data-prefix=">"
            class="text-success">
            <code>{"[{word:'moms',length:4},...,{word:'spaghetti',length:'9'}]"}</code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    background-color: hsl(274, 28%, 75%);
  }
</style>
