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

<section class="bg-white grid grid-cols-1 laptop:grid-cols-2">
  <div class="m-8 max-w-2xl px-6 py-16 text-center rounded border-1 border-yellow">
    <div class="flex flex-col items-center justify-center">
      <a href="/pyrenees" class="text-3xl text-gray-500 ">Pyrenées</a>
    </div>
    <p class="mt-4 text-gray-600">
      Hidden in plain sight throughout the mountain peaks are the deities that our forefathers and
      mothers once worshipped. Inspired by shinrin-yoku (Japanese Forest Bathing), my wife and I
      hike multiple days to capture the spirits and serendipity that our nature harbors.
    </p>
    <br />
    <a class="mt-8 hover:underline hover:text-orange text-sm" href="/pyrenees">See project</a>
    <img
      class="mt-8 h-80 w-full rounded-md object-cover object-center shadow"
      alt="pyrenees-photo"
      src="https://images.squarespace-cdn.com/content/v1/60c7a48c6d0b97331ff59d21/1630403499954-88CW9DR6JP4BRSGAZSQO/pyrenees-vallee_de_Remun%CC%83e.jpg?format=2500w"
    />
  </div>
  <div class="m-8 max-w-2xl px-6 py-16 text-center">
    <div class="flex flex-col items-center justify-center">
      <a href="/7rad" class="text-3xl text-gray-500 ">Current project(s)</a>
    </div>
    <!--    <p class="mt-4 text-gray-600">7Rad - artificial light at night</p>-->
    <br />
    <a class="mt-8 hover:underline hover:text-orange text-sm" href="/7rad"
      >7Rad - artificial light at night</a
    >
    <img
      class="mt-8 h-80 w-full rounded-md object-cover object-center shadow"
      alt="7-rad-project"
      src="https://storage.googleapis.com/public_website_asset/landing_1400px.jpg"
    />
  </div>
</section>

<!--<section class="bg-white grid grid-cols-1 laptop:grid-cols-2">-->
<!--  <div class="m-8 max-w-2xl px-6 py-16 text-center rounded border-1 border-yellow">-->
<!--    <div class="flex flex-col items-center justify-center">-->
<!--      <a href="/pyrenees" class="text-3xl text-gray-500 ">Pyrenées</a>-->
<!--    </div>-->
<!--    <p class="mt-4 text-gray-600">-->
<!--      Hidden in plain sight throughout the mountain peaks are the deities that our forefathers and-->
<!--      mothers once worshipped. Inspired by shinrin-yoku (Japanese Forest Bathing), my wife and I-->
<!--      hike multiple days to capture the spirits and serendipity that our nature harbors.-->
<!--    </p>-->
<!--    <br />-->
<!--    <a class="mt-8 hover:underline hover:text-orange text-sm" href="/pyrenees">See project</a>-->
<!--    <img-->
<!--      class="mt-8 h-80 w-full rounded-md object-cover object-center shadow"-->
<!--      alt="pyrenees-photo"-->
<!--      src="https://images.squarespace-cdn.com/content/v1/60c7a48c6d0b97331ff59d21/1630403499954-88CW9DR6JP4BRSGAZSQO/pyrenees-vallee_de_Remun%CC%83e.jpg?format=2500w"-->
<!--    />-->
<!--  </div>-->
<!--  <div class="m-8 max-w-2xl px-6 py-16 text-center">-->
<!--    <div class="flex flex-col items-center justify-center">-->
<!--      <a href="/7rad" class="text-3xl text-gray-500 ">Current project(s)</a>-->
<!--    </div>-->
<!--    &lt;!&ndash;    <p class="mt-4 text-gray-600">7Rad - artificial light at night</p>&ndash;&gt;-->
<!--    <br />-->
<!--    <a class="mt-8 hover:underline hover:text-orange text-sm" href="/7rad"-->
<!--      >7Rad - artificial light at night</a-->
<!--    >-->
<!--    <img-->
<!--      class="mt-8 h-80 w-full rounded-md object-cover object-center shadow"-->
<!--      alt="7-rad-project"-->
<!--      src="https://storage.googleapis.com/public_website_asset/landing_1400px.jpg"-->
<!--    />-->
<!--  </div>-->
<!--</section>-->

<!--<section class="bg-white">-->
<!--  <div class="mx-auto max-w-3xl px-6 py-16 text-center">-->
<!--    <div class="flex flex-col items-center justify-center">-->
<!--      <a href="/about" class="text-3xl text-gray-500 ">About</a>-->
<!--    </div>-->
<!--    <p class="mt-4 text-gray-600">-->
<!--      Anton Bossenbroek is a Dutch / French photographer and entrepreneur based in Torino, Italy. He-->
<!--      started his photo career after spending years in corporate life working in artificial-->
<!--      intelligence and data science.-->
<!--    </p>-->
<!--    <br />-->
<!--    <a class="mt-8 hover:underline hover:text-orange text-sm" href="/about">Read more</a>-->
<!--    <img-->
<!--      class="mt-8 h-80 w-full rounded-md object-cover object-center shadow"-->
<!--      alt="photographer"-->
<!--      src="https://images.squarespace-cdn.com/content/v1/60c7a48c6d0b97331ff59d21/1630421946511-I1DGT92KY7GKV7PYWE7R/abossenbroek_profile_photo.jpg?format=1500w"-->
<!--    />-->
<!--  </div>-->
<!--</section>-->
