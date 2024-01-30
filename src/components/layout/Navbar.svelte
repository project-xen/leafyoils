<script>
  import MobileMenu from "../MobileMenu.svelte";
  import Icon from "@iconify/svelte";

  const navigation = [
    { href: "/category/oils", title: "Oils" },
    { href: "/category/herbs", title: "Herbs" },
    { href: "/category/organics", title: "Organics" },
    { href: "/category/wellness", title: "Wellness" },
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

    <ul class="hidden space-x-8 lg:flex">
      {#each navigation as link}
        <li
          class="font-semibold text-green-800 hover:text-green-500 hover:underline underline-offset-8 tracking-widest uppercase"
        >
          <a href={link.href}>{link.title}</a>
        </li>
      {/each}
    </ul>

    <div class="hidden lg:flex items-center space-x-2 text-2xl">
      <a href="/search">
        <span class="hover:text-green-500">
          <Icon icon="ic:baseline-search" />
        </span>
      </a>
      <span class="hover:text-green-500 cursor-pointer">
        <Icon icon="humbleicons:rss" />
      </span>
    </div>

    <div class="flex items-center space-x-2.5 lg:hidden">
      <a href="/search">
        <span class="text-green-800 hover:text-green-500 text-3xl">
          <Icon icon="ic:baseline-search" />
        </span>
      </a>
      <div>
        <MobileMenu />
      </div>
    </div>
  </div>
</nav>
