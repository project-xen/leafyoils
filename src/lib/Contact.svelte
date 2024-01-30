<!-- TallyEmbed.svelte -->
<script>
  // @ts-nocheck

  import { onMount } from "svelte";

  onMount(() => {
    // Function to load Tally embeds
    const loadTallyEmbeds = () => {
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
      } else {
        document
          .querySelectorAll("iframe[data-tally-src]:not([src])")
          .forEach((iframe) => {
            iframe.src = iframe.dataset.tallySrc;
          });
      }
    };

    // Check if the Tally script is already loaded
    if (
      !document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
    ) {
      // Load the Tally script dynamically
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.onload = loadTallyEmbeds;
      script.onerror = loadTallyEmbeds;
      document.body.appendChild(script);
    } else {
      loadTallyEmbeds();
    }
  });
</script>

<!-- Embed Tally iframe -->
<iframe
  data-tally-src="https://tally.so/embed/wLpNel?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
  loading="lazy"
  width="100%"
  height="476"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  title="Contact Leafy Oils"
></iframe>

<style>
  /* Add any additional styling if needed */
</style>
