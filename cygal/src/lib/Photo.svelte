<script lang="ts">
  enum PhotoPosition {
    Left,
    Right
  }

  interface JsonInput {
    pos: string;
    title: string;
    body: string;
    src: string;
  }

  const mockJson: JsonInput[] = [
    {
      pos: 'left',
      title: 'pic1',
      body: 'lorem ipsum pic1',
      src: 'https://media.giphy.com/media/12vJgj7zMN3jPy/giphy.gif'
    }
  ];

  const renderPhotoLeft = (title, body, src) => `
    <div class="grid gap-4 grid-cols-10 max-w-1xl items-end">
    <div class="col-span-8">
        <img src=${src} alt="photo-1"/>
    </div>
    <div class="col-span-2">
        <p>${title}</p>
        <p>${body}</p>
    </div>
</div>
    `;

  const renderPhotoRight = (
    title,
    body,
    src
  ) => `<div class="grid gap-4 grid-cols-10 max-w-1xl items-end ">
    <div class="col-span-2">
        <p>${title}</p>
        <p>${body}</p>
    </div>
    <div class="col-span-8">
        <img src=${src} alt="photo-2"/>
    </div>
</div> `;

  const createPhotoDiv = (
    position: PhotoPosition,
    title: string,
    body: string,
    src: string
  ): string => {
    if (position === PhotoPosition.Right) {
      return renderPhotoRight(title, body, src);
    }
    return renderPhotoLeft(title, body, src);
  };

  const toShow = mockJson.map((photoToShow) => {
    const pos = photoToShow.pos === 'left' ? PhotoPosition.Left : PhotoPosition.Right;
    return createPhotoDiv(pos, photoToShow.title, photoToShow.body, photoToShow.src);
  });
</script>

{@html toShow}
