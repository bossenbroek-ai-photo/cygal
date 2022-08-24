<script>
  let showMobileMenu = false;

  const { bgIsDark, ...restProps } = $$props;

  function handleClickMobileMenu() {
    showMobileMenu = !showMobileMenu;
  }
</script>

<div class={`px-8 py-6 ${bgIsDark ? 'bg-gray' : 'bg-white'}`}>
  <nav class="flex w-full justify-between">
    <div>
      <a
        href="/"
        class={`iphone:text-base font-medium ${bgIsDark ? 'text-orange' : 'text-blue-500'}`}
        >Anton Bossenbroek</a
      >
    </div>
    <div
      class={`hidden space-x-8 laptop:flex large:flex ${
        bgIsDark ? 'text-orange' : 'text-blue-500'
      }`}
    >
      <a href="/about">About</a>
      <a href="/pyrenees">Pyrenees</a>
      <a href="/7rad">7Rad</a>
      <a href="/contact">Contact</a>
    </div>

    {#if showMobileMenu}
      <div class="laptop:hidden large:hidden header-mobile-menu">
        <nav class="header-menu-nav-list laptop:hidden large:hidden">
          <div class="laptop:hidden large:hidden flex pl-20 ipad:pl-80">
            <div class="laptop:hidden large:hidden header-menu-nav-item">
              <a class="text-4xl ipad:text-5xl" href="/about" on:click={handleClickMobileMenu}
                >About</a
              >
              <a class="text-4xl ipad:text-5xl" href="/pyrenees" on:click={handleClickMobileMenu}
                >Pyrenees</a
              >
              <a class="text-4xl ipad:text-5xl" href="/" on:click={handleClickMobileMenu}>7Rad</a>
              <a class="text-4xl ipad:text-5xl" href="/" on:click={handleClickMobileMenu}>Contact</a
              >
            </div>

            <div
              class="flex laptop:hidden large:hidden hover:cursor-pointer "
              on:click={handleClickMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 50 50"
                fill="#000000"
              >
                <path
                  d="M 11.5 11 C 11.372 11 11.243984 11.048984 11.146484 11.146484 C 11.049484 11.244484 11 11.372 11 11.5 C 11 11.628 11.048484 11.755516 11.146484 11.853516 L 24.292969 25 L 11.146484 38.146484 C 10.951484 38.341484 10.951484 38.658516 11.146484 38.853516 C 11.244484 38.950516 11.372 39 11.5 39 C 11.628 39 11.755516 38.951516 11.853516 38.853516 L 25 25.707031 L 38.146484 38.853516 C 38.341484 39.048516 38.658516 39.048516 38.853516 38.853516 C 39.048516 38.657516 39.049516 38.342484 38.853516 38.146484 L 25.707031 25 L 38.853516 11.853516 C 39.048516 11.658516 39.048516 11.341484 38.853516 11.146484 C 38.657516 10.951484 38.342484 10.950484 38.146484 11.146484 L 25 24.292969 L 11.853516 11.146484 C 11.756016 11.048984 11.628 11 11.5 11 z"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    {:else}
      <div
        class="flex laptop:hidden large:hidden hover:cursor-pointer "
        on:click={handleClickMobileMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill={`${bgIsDark ? '#FF892A' : '#000000'}`}
          viewBox="0 0 24 24"
          stroke={`${bgIsDark ? '#FF892A' : '#000000'}`}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    {/if}
  </nav>
</div>

<style>
  .header-mobile-menu {
    opacity: 2;
    visibility: visible;
    position: fixed;
    z-index: 2;
    display: flex;
    flex-direction: column;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    will-change: opacity, visibility;
    user-select: none;
    pointer-events: auto;
  }

  .header-menu-nav-list {
    transform: translatey(0);
    flex-grow: 1;
    padding-top: 8vw;
  }

  .header-menu-nav-item > a {
    position: relative;
    width: 100%;
    padding-left: 8vw;
    padding-right: 8vw;
    display: block;
    margin: 2vw 4vw;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
