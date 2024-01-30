<script>
  import { FooterLinkGroup, FooterLink } from "flowbite-svelte";

  const navigation = [
    { href: "/category/oils", title: "Oils" },
    { href: "/category/herbs", title: "Herbs" },
    { href: "/category/organics", title: "Organics" },
    { href: "/category/wellness", title: "Wellness" },
  ];

  let year = new Date().getFullYear();
</script>

<section class="p-6 md:px-12 xl:px-0 w-full lg:max-w-6xl mx-auto">
  <div class="lg:flex md:justify-between pt-4">
    <div class="mb-8 lg:mb-0">
      <div class="flex items-center">
        <img src="/logo.png" alt="site logo" class="block w-28 lg:w-40" />
        <div class="text-4xl lg:text-6xl font-semibold tracking-wide -ml-4">
          <span class="text-green-400">Leafy</span> <br /> Oils
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div>
        <h3 class="mb-6 text-sm font-semibold uppercase text-green-200">
          Quick Links
        </h3>
        <FooterLinkGroup ulClass="text-gray-50 tracking-wide">
          {#each navigation as link}
            <FooterLink liClass="mb-4" href={link.href}>
              {link.title}
            </FooterLink>
          {/each}
        </FooterLinkGroup>
      </div>

      <div>
        <h3 class="mb-6 text-sm font-semibold uppercase text-green-200">
          Company
        </h3>
        <FooterLinkGroup ulClass="text-gray-50 tracking-wide">
          <FooterLink liClass="mb-4" href="/info/about">About</FooterLink>
          <FooterLink liClass="mb-4" href="/info/contact">Contact</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h3 class="mb-6 text-sm font-semibold uppercase text-green-200">
          Legal
        </h3>
        <FooterLinkGroup ulClass="text-gray-50 tracking-wide">
          <FooterLink liClass="mb-4" href="/info/privacy-policy"
            >Privacy Policy</FooterLink
          >
          <FooterLink liClass="mb-4" href="/info/terms"
            >Terms & Conditions</FooterLink
          >
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <hr class="my-6 border-green-400 sm:mx-auto lg:my-8" />

  <span class="text-sm text-green-100 tracking-wide"
    >&copy; {year} Leafy Oils™ - All Rights Reserved.
  </span>
</section>
