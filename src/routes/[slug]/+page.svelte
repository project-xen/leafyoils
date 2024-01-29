<script>
  // @ts-nocheck
  import DOMPurify from "isomorphic-dompurify";

  export let data;

  const post = data.props.post.post;

  const content = DOMPurify.sanitize(post.content.html);
</script>

<div>
  <img
    src="/cover.jpg"
    alt="natural greens"
    class="w-full block h-60 object-cover relative -z-10"
  />
</div>

<div class="p-6 xl:px-0 w-full lg:max-w-6xl mx-auto my-8 md:px-12 static z-10">
  <div
    class="bg-gradient-to-br from-green-900 to-green-500 text-center text-white
     px-4 py-6 lg:p-12 rounded-md lg:mx-20 xl:mx-28 -mt-32"
  >
    <span class="font-medium text-sm text-green-50">
      {new Date(post.lastUpdated).toISOString().split("T")[0]}
    </span>

    <h1 class="text-4xl lg:text-5xl font-bold leading-9 pt-2">
      {post.title}
    </h1>
  </div>

  <article>
    {@html content}
  </article>
</div>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={`Discover | ${post.title}`} />
</svelte:head>
