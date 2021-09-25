<script>
  import prettyJs from "pretty-js";
  import { DoubleBounce } from "svelte-loading-spinners";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  let loading = false;
  let mounted = false;
  let json = "";
  const url = "/api?n=5";
  const submit = async () => {
    mounted = true;
    loading = true;
    const res = await fetch(url);
    const jsonString = JSON.stringify(await res.json());
    setTimeout(() => {
      json = prettyJs(jsonString);
      loading = false;
    }, 2000);
  };
</script>

<div class="flex justify-center">
  <button
    on:click={submit}
    class="inline-flex text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
    >Try Now!</button
  >
</div>
<br />
{#if loading}
  <div class="flex justify-center">
    <DoubleBounce size="60" color="#4c1d95" unit="px" duration="1s" />
  </div>
{:else if mounted}
  <div
    transition:slide={{ delay: 0, duration: 200, easing: quintOut }}
    class="mockup-code dark:bg-purple-900"
  >
    <pre data-prefix="$">
  <code>Result:</code>
</pre>
    <pre
      data-prefix=">"
      class="text-success">
  <code><br><div class="px-5">
    {json}
  </div></code>
</pre>
  </div>
{/if}
<br />
