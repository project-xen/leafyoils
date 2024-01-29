<script>
  // @ts-nocheck

  import { scale } from "svelte/transition";
  import { expoInOut } from "svelte/easing";
  export let title;
  export let slug;
</script>

<section transition:scale={{ duration: 1000, easing: expoInOut }}>
  <div>
    <a href={`/${slug}`}>
      <h2
        class="mt-2 mb-4 text-2xl text-gray-600 font-semibold leading-9 hover:text-black"
      >
        {title}
      </h2>
    </a>
  </div>
</section>
