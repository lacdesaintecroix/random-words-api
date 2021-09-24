<script>
  let json = "";
  const submit = async () => {
    alert("foo");
    const res = await fetch("/api?n=5");
    json = await res.json();
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
  <pre
    data-prefix=">"
    class="text-success">
          <code>{json}</code>
        </pre>
</div>
<br />
