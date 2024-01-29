<script>
  // @ts-nocheck

  import FilteredPost from "../../components/FilteredPost.svelte";

  // @ts-nocheck

  import Search from "../../components/Search.svelte";

  export let data;

  const posts = data.props.posts.posts;

  // Query results
  let filteredPosts = [];

  // For Search Input
  let searchTerm = "";

  const searchPosts = () => {
    return (filteredPosts = posts.filter((post) => {
      let postTitle = post.title.toLowerCase();
      return postTitle.includes(searchTerm.toLowerCase());
    }));
  };
</script>

<section class="p-6 md:px-12 xl:px-0 w-full lg:max-w-6xl mx-auto my-6">
  <Search bind:searchTerm on:input={searchPosts} />

  <div class="my-8">
    {#if searchTerm && filteredPosts.length === 0}
      <p class="my-10 text-3xl text-gray-800 text-center h-[60ch]">
        No Results Found!
      </p>
    {:else if searchTerm && filteredPosts.length > 0}
      <ul class="md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {#each filteredPosts as { title, slug }}
          <li class="bg-green-50 p-6 hover:shadow-lg rounded-md my-8 md:my-0">
            <FilteredPost {title} {slug} />
          </li>
        {/each}
      </ul>
    {:else}
      <!-- <ul class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each posts as { title, slug }}
          <li><FilteredPost {title} {slug} /></li>
        {/each}
      </ul> -->
      <div class="h-[70vh]"></div>
    {/if}
  </div>
</section>
