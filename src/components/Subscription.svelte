<script>
  // @ts-nocheck
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  let email = "";
  let loading = false;
  let errorMessage = "";

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const subscribe = () => {
    if (!isValidEmail(email)) {
      errorMessage = "Please enter a valid email address.";
      return;
    }

    loading = true;

    setTimeout(() => {
      loading = false;
      errorMessage = "";
      email = "";
    }, 2000);
  };

  onMount(() => {
    setTimeout(() => {
      errorMessage = "";
    }, 2000);
  });
</script>

<section
  class="bg-black text-white px-8 py-10 md:px-12 xl:px-0 max-w-6xl mx-auto"
>
  <div class="text-center lg:flex items-center justify-between lg:space-x-12">
    <div class="flex items-center justify-center space-x-2 text-4xl">
      <Icon icon="quill:inbox-newsletter" />
      <h4 class="mt-1.5">Newsletter</h4>
    </div>

    <p class="my-6 text-lg text-gray-200 lg:text-center">
      Stay updated with exclusive content! Join our newsletter for the latest
      news, offers, and updates. Subscribe now for free!
    </p>

    <form class="w-full">
      <input
        bind:value={email}
        type="email"
        class="p-2 w-full text-black font-head"
        placeholder="Enter your email"
      />
      {#if errorMessage}
        <p class="text-red-400 text-sm pt-1">{errorMessage}</p>
      {/if}
      <button
        on:click={subscribe}
        class="p-2 border px-6 font-head font-semibold w-full mt-2"
        disabled={loading}
      >
        {#if loading}
          <div class="animate-spin">&#9696;</div>
        {:else}
          Subscribe
        {/if}
      </button>
    </form>
  </div>
</section>
