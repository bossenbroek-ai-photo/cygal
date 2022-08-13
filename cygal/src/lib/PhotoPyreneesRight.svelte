<script lang="ts">
  const { title, body, src, alt, ...restProps } = $$props;
</script>

<div class="grid gap-4 grid-cols-10 max-w-1xl items-end">
  <div class="col-span-2">
    <p>{title}</p>
    <p>{body}</p>
  </div>
  <div class="col-span-8">
    <img {src} {alt} />
  </div>
</div>
