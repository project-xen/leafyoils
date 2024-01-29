<script>
  import { page } from "$app/stores";

  const analyticsId = import.meta.env.VITE_GOOGLE_TAG;

  $: {
    if (typeof gtag !== "undefined") {
      gtag("config", analyticsId, {
        page_title: document.title,
        page_path: $page.url.pathname,
      });
    }
  }
</script>

<svelte:head>
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
  >
  </script>

  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", analyticsId);
  </script>
</svelte:head>
