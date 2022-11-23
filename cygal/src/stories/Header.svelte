<script script="ts">
  import './header.css';

  const { title, bgIsDark, showName, showMenu, ...restProps } = $$props;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="robots" content="noindex nofollow" />
  <html lang="en" />
</svelte:head>

<header>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {#if showMenu}
    {#if bgIsDark}
      <div class="wrapper bg-gray content-start">
        <div class="h-5 justify-between">
          {#if showName}
            <h1 class="text-white m-0">Anton Bossenbroek</h1>
          {/if}
        </div>
      </div>
    {:else}
      <div class="wrapper content-start">
        <div class="h-5 justify-between">
          {#if showName}
            <h1 class="m-0">Anton Bossenbroek</h1>
          {/if}
        </div>
      </div>
    {/if}
  {/if}
</header>
