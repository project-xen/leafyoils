<script>
  import Blogpost from "../../../components/Blogpost.svelte";

  export let data;

  const allPosts = data.props.posts.posts;

  let visible = 30;
  let posts = allPosts.slice(0, visible);

  function showMore() {
    visible += 9;
    posts = allPosts.slice(0, visible);
  }
</script>

<div>
  <img
    src="/haircare.jpg"
    alt="natural greens"
    class="w-full block h-60 object-cover relative -z-10"
  />
</div>

<div class="p-6 xl:px-0 w-full lg:max-w-6xl mx-auto mb-20 md:px-12">
  <h2
    class="text-4xl lg:text-5xl pb-8 mb-10 font-bold text-center text-green-800 border-b border-gray-400 tracking-widest"
  >
    HAIRCARE
  </h2>

  <div>
    {#if !allPosts.length}
      <h2 class="my-8 text-3xl text-gray-600 font-medium mb-80 tracking-tight">
        No posts found!
      </h2>
    {:else}
      <ul class="md:grid grid-cols-2 lg:grid-cols-3 gap-12">
        {#each posts as post}
          <li class="bg-green-50 p-8 hover:shadow-lg rounded-md my-8 md:my-0">
            <Blogpost {post} />
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="text-center">
    <button
      on:click|preventDefault={showMore}
      class={allPosts.length <= visible
        ? "hidden"
        : "bg-gray-600 px-16 py-4 uppercase rounded-full text-white text-lg font-medium hover:bg-gray-700 lg:mt-12"}
      type="button">Show More</button
    >
  </div>
</div>
