<script>
  import prettyJs from "pretty-js";
  let json = "";
  const url = "https://jsonplaceholder.typicode.com/users/1"; //"/api?n=5"
  const submit = async () => {
    const res = await fetch(url);
    const jsonString = JSON.stringify(await res.json());
    json = prettyJs(jsonString);
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
<div class="mockup-code">
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
<br />
