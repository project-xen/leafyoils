<script>
  import MobileMenu from "../MobileMenu.svelte";
  import Icon from "@iconify/svelte";

  const navigation = [
    { href: "/category/wellness", title: "Wellness" },
    { href: "/category/skincare", title: "Skincare" },
    { href: "/category/haircare", title: "Haircare" },
    { href: "/category/nutrition", title: "Nutrition" },
  ];
</script>

<nav class="p-6 xl:px-0 w-full lg:max-w-6xl mx-auto md:px-12">
  <div class="flex items-center justify-between">
    <a href="/">
      <div class="flex items-center">
        <img src="/logo.png" alt="site logo" class="block w-10" />
        <div class="text-2xl font-semibold tracking-wide">
          <span class="text-green-600">Leafy</span>Oils
        </div>
      </div>
    </a>

    <ul class="hidden space-x-6 lg:flex">
      {#each navigation as link}
        <li
          class="font-semibold text-green-800 hover:text-green-500 hover:underline underline-offset-8 tracking-widest uppercase"
        >
          <a href={link.href}>{link.title}</a>
        </li>
      {/each}
    </ul>

    <div class="hidden lg:flex items-center space-x-2 text-2xl">
      <span class="hover:text-green-500">
        <Icon icon="ic:baseline-search" />
      </span>
      <span class="hover:text-green-500">
        <Icon icon="humbleicons:rss" />
      </span>
    </div>

    <div class="block lg:hidden">
      <MobileMenu />
    </div>
  </div>
</nav>
