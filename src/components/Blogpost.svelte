<script>
  // @ts-nocheck
  import Icon from "@iconify/svelte";

  export let post;
</script>

<div>
  <a href={`/${post.slug}`}>
    <span class="font-medium">
      {new Date(post.lastUpdated).toISOString().split("T")[0]}
    </span>

    <h2
      class="mt-2 mb-4 text-3xl text-gray-600 font-semibold leading-9 tracking-tight hover:text-black"
    >
      {post.title}
    </h2>

    <div class="flex items-center space-x-2 font-medium text-green-600">
      <small class="text-sm">READ MORE</small>
      <span class="text-2xl"><Icon icon="ci:arrow-right-sm" /></span>
    </div>
  </a>
</div>
