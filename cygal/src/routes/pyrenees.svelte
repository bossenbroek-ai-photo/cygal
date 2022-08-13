<script lang="ts">
  import Header from '../stories/Header.svelte';
  import PhotoPyreneesLeft from '../lib/PhotoPyreneesLeft.svelte';
  import PhotoPyreneesRight from '../lib/PhotoPyreneesRight.svelte';

  enum PhotoPosition {
    Left,
    Right
  }

  interface JsonInput {
    position: string;
    title: string;
    body: string;
    src: string;
    alt: string;
  }

  const mockJson: JsonInput[] = [
    {
      position: 'left',
      title: 'pic1',
      body: 'lorem ipsum pic1',
      src: 'https://images.squarespace-cdn.com/content/v1/60c7a48c6d0b97331ff59d21/1630402639081-W5WYT4NNV8IZ0DAI8I6A/pyrenees-lac_de_barroude.jpg?format=2500w',
      alt: 'bla'
    },
    {
      position: 'right',
      title: 'pic2',
      body: 'lorem ipsum pic2',
      src: 'https://images.squarespace-cdn.com/content/v1/60c7a48c6d0b97331ff59d21/1630403499954-88CW9DR6JP4BRSGAZSQO/pyrenees-vallee_de_Remun%CC%83e.jpg?format=2500w',
      alt: 'bla'
    }
  ];
</script>

<Header />
<div class="container mx-auto py-16 px-4">
  <p class="mb-2 text-3xl text-center font-bold text-gray-800 pb-8">Pyrénées</p>
  {#each mockJson as photo}
    {#if photo.position == 'right'}
      <PhotoPyreneesRight title={photo.title} body={photo.body} src={photo.src} alt={photo.alt} />
    {:else if photo.position == 'left'}
      <PhotoPyreneesLeft title={photo.title} body={photo.body} src={photo.src} alt={photo.alt} />
    {:else}
      <p class="text-red">Currently not implemented ${photo.position}</p>
    {/if}
  {/each}
</div>
