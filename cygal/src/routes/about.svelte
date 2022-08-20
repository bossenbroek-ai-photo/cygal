<script>
  import NavBar from '../lib/NavBar.svelte';
  import Card from '../lib/Card.svelte';

  export const src =
    'https://images.squarespace-cdn.com/content/v1/60c7a48c6d0b97331ff59d21/1630421946511-I1DGT92KY7GKV7PYWE7R/abossenbroek_profile_photo.jpg?format=1500w';
  export const alt = 'photo-about';
</script>

<NavBar />
<div class="container mx-auto py-16 px-4">
  <div class="grid gap-4 grid-cols-1 laptop:grid-cols-2 items-center ">
    <div class="w-full">
      <img class="object-cover object-bottom" {src} {alt} />
    </div>
    <div class="flex flex-col justify-between p-4 leading-normal">
      <Card />
      <a class="pl-4 hover:underline font-semibold" href="/contact">Get in touch</a>
    </div>
  </div>
</div>
