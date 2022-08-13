<script>
  const themeColors = ['blue', 'fuschsia', 'gray', 'yellow', 'orange'];
</script>

<h1>Welcome to SvelteKit</h1>
<h2>With tailwind</h2>

<p>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum."
</p>

<!--<div>-->
<!--  <div class="bg-blue"><p class="text-white">blue</p></div>-->
<!--  <div class="bg-fuschsia"><p class="text-white">fuschsia</p></div>-->
<!--  <div class="bg-gray"><p class="text-white">gray</p></div>-->
<!--  <div class="bg-yellow"><p class="text-white">yellow</p></div>-->
<!--  <div class="bg-orange"><p class="text-white">orange</p></div>-->
<!--</div>-->

<div>
  {#each themeColors as color}
    <div class="bg-{color}"><p class="text-white">{color}</p></div>
  {/each}
</div>
