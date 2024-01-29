<script>
  // @ts-nocheck

  import Icon from "@iconify/svelte";

  const navigation = [
    { href: "/", title: "Home" },
    { href: "/category/wellness", title: "Wellness" },
    { href: "/category/skincare", title: "Skin care" },
    { href: "/category/haircare", title: "Hair care" },
    { href: "/category/nutrition", title: "Nutrition" },
    { href: "/category/organics", title: "Organics" },
  ];
</script>

<div class="flex">
  <input type="checkbox" id="drawer-toggle" class="relative sr-only peer" />

  <button class="inline-block text-3xl text-green-800 hover:text-green-500">
    <label for="drawer-toggle">
      <Icon icon="gg:menu-right" />
    </label>
  </button>

  <div
    class="p-12 fixed top-0 left-0 z-20 w-full h-full transition-all duration-500
    transform -translate-y-full peer-checked:translate-y-0 bg-green-800 text-white"
  >
    <div class="text-5xl text-right w-full">
      <button class="hover:text-green-200">
        <label for="drawer-toggle">
          <Icon icon="eva:close-outline" />
        </label>
      </button>
    </div>

    <ul class="my-12 grid place-content-center">
      {#each navigation as link}
        <li
          class="font-bold uppercase text-4xl py-4 hover:text-green-200 hover:underline underline-offset-8"
        >
          <a
            href={link.href}
            on:click={() =>
              (document.getElementById("drawer-toggle").checked = false)}
          >
            {link.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
