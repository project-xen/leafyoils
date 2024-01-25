<script>
  import Blogposts from "../../../components/Blogposts.svelte";

  export let data;

  const posts = data.props.posts.posts;
</script>

<div class="p-6 xl:px-0 w-full lg:max-w-6xl mx-auto mt-10 mb-20 md:px-12">
  <h2 class="text-4xl font-bold text-green-600 mb-6">WELLNESS</h2>

  <Blogposts {posts} />
</div>
