<script lang="ts">
  import Header from '../stories/Header.svelte';
</script>

<Header title="Welcome to Anton Bossenbroek Photography" bgIsDark />

<div class="bg-gray">
  <div class="flex items-center justify-center">
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
        class="laptop:h-[80vh] object-cover large:hidden ipad:hidden iphone:hidden"
        src="https://storage.googleapis.com/public_website_asset/landing_1400px.jpg"
        alt="greenhouses"
      />
      <img
        class="hidden large:block large:h-[80vh] object-cover"
        src="https://storage.googleapis.com/public_website_asset/landing_1600px.jpg"
        alt="greenhouses"
      />
      <img
        class="hidden ipad:block ipad:w-[95vw] object-cover"
        src="https://storage.googleapis.com/public_website_asset/landing_820.jpg"
        alt="greenhouses"
      />
      <img
        class="hidden iphone:block iphone:w-[98vw] object-cover "
        src="https://storage.googleapis.com/public_website_asset/landing_820.jpg"
        alt="greenhouses"
      />
    </picture>
    <div class="absolute"><h1 class="text-orange text-4xl text-light">Anton Bossenbroek</h1></div>
  </div>
</div>
