<script lang="ts">
  import NavBar from '../lib/NavBar.svelte';
</script>

<NavBar bgIsDark />

<section class="w-full h-screen">
  <picture>
    <source
      media="(min-width: 1600px)"
      srcset="https://storage.googleapis.com/public_website_asset/landing_1600px-3up.jpg 3x"
    />
    <source
      media="(min-width: 1600px)"
      srcset="https://storage.googleapis.com/public_website_asset/landing_1600px.jpg"
    />
    <source
      media="(min-width: 667px)"
      srcset="https://storage.googleapis.com/public_website_asset/landing_667px-3up.jpg 3x"
    />
    <source
      media="(min-width: 820px)"
      srcset="https://storage.googleapis.com/public_website_asset/landing_820px-3up.jpg 3x"
    />
    <source
      media="(min-width: 375px)"
      srcset="https://storage.googleapis.com/public_website_asset/landing_375px-3up.jpg 3x"
    />
    <source
      media="(min-width: 1180px)"
      srcset="https://storage.googleapis.com/public_website_asset/landing_1180px-3up.jpg 3x"
    />
    <source
      media="(min-width: 375px)"
      srcset="https://storage.googleapis.com/public_website_asset/landing_375px.jpg"
    />
    <source
      media="(min-width: 1400px)"
      srcset="https://storage.googleapis.com/public_website_asset/landing_1400px.jpg"
    />

    <img
      class="laptop: laptop:w-full object-cover large:hidden ipad:hidden iphone:hidden"
      src="https://storage.googleapis.com/public_website_asset/landing_1400px.jpg"
      alt="greenhouses"
    />
    <img
      class="hidden large:block large:w-full large:h-[95vh] object-cover"
      src="https://storage.googleapis.com/public_website_asset/landing_1600px.jpg"
      alt="greenhouses"
    />
    <img
      class="hidden ipad:block ipad:w-full ipad:h-full object-cover"
      src="https://storage.googleapis.com/public_website_asset/landing_820.jpg"
      alt="greenhouses"
    />
    <img
      class="hidden iphone:block iphone:w-full iphone:h-[50vh] object-cover "
      src="https://storage.googleapis.com/public_website_asset/landing_820.jpg"
      alt="greenhouses"
    />
  </picture>
</section>
