<script>
  export let data;

  // @ts-ignore
  const post = data.props.post.post;

  console.log(data);
</script>

<div class="p-6 xl:px-0 w-full lg:max-w-6xl mx-auto my-8 md:px-12">
  <div
    class="bg-gradient-to-br from-green-900 to-green-500 text-white p-4 lg:p-12 rounded-md lg:mx-20 xl:mx-28"
  >
    <span class="font-medium text-sm text-green-100">
      {new Date(post.lastUpdated).toISOString().split("T")[0]}
    </span>
    <h2 class="text-3xl lg:text-5xl font-bold leading-8 pt-2">
      {post.title}
    </h2>
  </div>

  <article>
    {@html post.content.html}
  </article>
</div>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={`Discover | ${post.title}`} />
</svelte:head>
