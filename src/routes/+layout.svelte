<script>
  import Subscription from "../components/Subscription.svelte";
  import Footer from "../components/layout/Footer.svelte";
  import Navbar from "../components/layout/Navbar.svelte";
  import Analytics from "../lib/Analytics.svelte";

  import "../index.css";
</script>

<div class="font-head">
  <header class="border-b shadow-sm h-[10vh] lg:h-[12vh] flex items-center">
    <Navbar />
  </header>

  <main>
    <slot />
  </main>

  <div class="text-white bg-black">
    <Subscription />
  </div>

  <footer class="bg-green-800 text-white">
    <Footer />
  </footer>

  <Analytics />
</div>
