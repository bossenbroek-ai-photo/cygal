<script lang="ts">
  const { position, title, date, body, src, alt, ...restProps } = $$props;
</script>

<div class="flex gap-4s max-w-1xl pb-16">
  <div
    class={position === 'right'
      ? 'flex flex-col large:flex-row-reverse large:items-end'
      : 'flex flex-col large:flex-row large:items-end'}
  >
    <div class="large:flex-1">
      <img {src} {alt} />
    </div>
    <div class="large:flex-shrink mt-2 large:mx-6">
      <p class="text-lg font-macho font-bold">{title}</p>
      <p class="font-macho font-light">{date}</p>
      <p class="font-macho font-light">{body}</p>
    </div>
  </div>
</div>
