<script>
  // @ts-nocheck
  import Icon from "@iconify/svelte";

  export let searchTerm;
</script>

<div
  class=" flex items-center justify-between max-w-3xl mx-auto lg:px-4 border-b border-gray-400"
>
  <input
    type="text"
    id="search-field"
    placeholder="What are you looking for?"
    autocomplete="off"
    bind:value={searchTerm}
    on:input
    class="w-full border-none text-3xl lg:text-4xl font-body p-4 focus:outline-none
	focus:ring-0 focus:text-green-800"
  />

  <span class="text-5xl lg:text-6xl text-gray-400 mb-2">
    <Icon icon="ic:baseline-search" />
  </span>
</div>
