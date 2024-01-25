<script>
  // @ts-nocheck

  import Blogposts from "../components/Blogposts.svelte";
  import Head from "../components/layout/Head.svelte";

  export let data;

  const posts = data.props.posts.posts;
</script>

<div class="p-6 xl:px-0 w-full lg:max-w-6xl mx-auto md:px-12">
  <section
    class="lg:flex justify-between gap-6 xl:gap-12 mt-12 lg:mt-24 lg:h-[90vh]"
  >
    <div class="lg:w-1/3">
      <h1
        class="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-900 to-green-400
      inline-block text-transparent bg-clip-text"
      >
        Exploring the Magic and Vitality of Natural Oils
      </h1>
    </div>

    <div class="my-12 lg:my-0 lg:w-1/3">
      <img
        src="./hero-img.svg"
        alt="green nature design from undraw"
        class="block object-cover w-60 mx-auto"
      />
    </div>

    <div class="lg:w-1/3 font-medium text-lg lg:text-xl">
      <p class=" bg-green-50 p-4 text-black mb-6 rounded-md">
        Natural oils are plant-derived liquids extracted from seeds, nuts, or
        fruits. Rich in nutrients, these oils are renowned for their many health
        benefits.
      </p>
      <p class=" bg-green-800 p-4 text-white rounded-md">
        Discover the transformative qualities of natural oils and a holistic
        approach to self-care with Leafy Oils
      </p>
    </div>
  </section>

  <section class="mt-20 lg:mt-4 mb-24">
    <h2 class="text-3xl font-bold text-green-600 mb-8">LATEST POSTS</h2>
    <Blogposts {posts} />
  </section>
</div>

<Head />
