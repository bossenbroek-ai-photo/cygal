<script lang="ts">
  import Header from '../stories/Header.svelte';
  import PhotoPyreneesLeft from '../lib/PhotoPyreneesLeft.svelte';
  import PhotoPyreneesRight from '../lib/PhotoPyreneesRight.svelte';

  import data from '../../src/pyrenees.json';

  enum PhotoPosition {
    Left,
    Right
  }
</script>

<Header />
<div class="h-screen w-full bg-cover bg-pyrenees">
  <p class="mb-2 text-6xl text-center font-bold text-gray-800 p-16 ">Pyrénées</p>
  <p class="mb-2 text-2xl text-gray-900 py-16 px-80">
    Hidden in plain sight throughout the mountain peaks are the deities that our forefathers and
    mothers once worshipped. Inspired by shinrin-yoku (Japanese Forest Bathing), my wife and I hike
    multiple days to capture the spirits and serendipity that our nature harbors.
  </p>
</div>
<div class="container mx-auto py-16 px-4">
  {#each data as photo}
    {#if photo.position === 'right'}
      <PhotoPyreneesRight title={photo.title} body={photo.body} src={photo.src} alt={photo.alt} />
    {:else if photo.position === 'left'}
      <PhotoPyreneesLeft title={photo.title} body={photo.body} src={photo.src} alt={photo.alt} />
    {:else}
      <p class="text-red">Currently not implemented ${photo.position}</p>
    {/if}
  {/each}
</div>
