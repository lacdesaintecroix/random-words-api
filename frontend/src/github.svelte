<script>
  import { GithubIcon } from "svelte-feather-icons";
  import { repoUrl } from "./lib/globals";
</script>

<div class="flex items-center justify-center">
  <a
    href={repoUrl}
    class="rounded-full py-2 my-2 px-4 bg-gray-700 text-gray-200 dark:text-purple-900 dark:bg-purple-200 border-gray-200 dark:border-purple-200 border-2  text-md"
  >
    <GithubIcon size="32" />
  </a>
</div>
