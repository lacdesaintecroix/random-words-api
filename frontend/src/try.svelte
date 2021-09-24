<script>
  import prettyJs from "pretty-js";
  let jsonLines = [];
  const submit = async () => {
    const res = await fetch("/api?n=5");
    const jsonString = JSON.stringify(await res.json());
    const prettyPrinted = prettyJs(jsonString);
    jsonLines = prettyPrinted.split("\n");
  };
</script>

<div class="flex justify-center">
  <button
    on:click={submit}
    class="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >Try Now!</button
  >
</div>
<br />
<div class="mockup-code">
  <pre data-prefix="$">
    <code>Result:</code>
  </pre>
  {#each jsonLines as line}
    <pre
      data-prefix=">"
      class="text-success">
        <code>{line}</code>
      </pre>
  {/each}
</div>
<br />
