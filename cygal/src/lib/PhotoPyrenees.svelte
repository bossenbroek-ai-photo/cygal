<script lang="ts">
  const { title, body, src, ...restProps } = $$props;

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
</script>
