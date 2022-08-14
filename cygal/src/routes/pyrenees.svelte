<script lang="ts">
  import PhotoPyrenees from '../lib/PhotoPyrenees.svelte';
  import NavBar from '../lib/NavBar.svelte';

  import data from '../../src/pyrenees.json';

  enum PhotoPosition {
    Left,
    Right
  }
</script>

<NavBar />
<div class="h-screen w-full bg-cover bg-pyrenees">
  <p
    class="text-4xl font-macho laptop:text-6xl text-center font-bold text-gray-800 px-24 large:px-22 pt-36 "
  >
    Pyrénées
  </p>
  <p class="laptop:text-2xl text-gray-900 px-24 pt-8 laptop:px-60 laptop:pt-16">
    Hidden in plain sight throughout the mountain peaks are the deities that our forefathers and
    mothers once worshipped. Inspired by shinrin-yoku (Japanese Forest Bathing), my wife and I hike
    multiple days to capture the spirits and serendipity that our nature harbors.
  </p>
</div>
<div class="container mx-auto py-16 px-4">
  {#each data as photo}
    <PhotoPyrenees
      position={photo.position}
      title={photo.title}
      date={photo.date}
      body={photo.body}
      src={photo.src}
      alt={photo.alt}
    />
  {/each}
</div>
