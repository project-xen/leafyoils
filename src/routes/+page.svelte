<script>
  // @ts-nocheck

  import FeaturedPosts from "../components/FeaturedPosts.svelte";
  import RecentPosts from "../components/RecentPosts.svelte";
  import Head from "../components/layout/Head.svelte";

  export let data;

  const posts = data.props.posts.posts;

  const featuredPosts = posts.filter((post) => post.featured === true);
  const recentPosts = posts.filter((post) => post.featured === false);
</script>

<div class="p-6 xl:px-0 w-full lg:max-w-6xl mx-auto md:px-12">
  <section
    class="lg:flex justify-between gap-6 xl:gap-10 mt-8 lg:mt-24 lg:h-[88vh]"
  >
    <div class="lg:w-1/3">
      <h1
        class="text-6xl font-bold bg-gradient-to-br from-green-900 to-green-400
      inline-block text-transparent bg-clip-text lg:mt-6"
      >
        Get Connected <br /> To Nature's Goodness
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
        Gain insights into properties and value of different natural oils, herbs
        and other organic products
      </p>
      <p class=" bg-green-800 p-4 text-white rounded-md">
        And discover the transformative qualities of natural plants, and a
        holistic approach to self-care with Leafy Oils
      </p>
    </div>
  </section>

  <section class="mt-20 lg:mt-4 mb-24">
    <FeaturedPosts {featuredPosts} />
  </section>

  <section class="mt-20 lg:mt-4 mb-24">
    <RecentPosts {recentPosts} />
  </section>
</div>

<Head />
