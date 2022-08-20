<script>
  let mobileMenuOpen = true;
  let showMobileMenu = true;

  function handleClickMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    showMobileMenu = !showMobileMenu;
  }
</script>

<div class="header-menu">
  <nav class="header-menu-nav-list">
    <div class="header-menu-nav-item">
      <a class="text-4xl" href="/about">About</a>
      <a class="text-4xl" href="/pyrenees">Pyrenees</a>
      <a class="text-4xl" href="/">7Rad</a>
      <a class="text-4xl" href="/">Contact</a>
    </div>

    <div class="flex large:hidden hover:cursor-pointer " on:click={handleClickMobileMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 50 50"
        fill="#000000"
      >
        <path
          d="M 11.5 11 C 11.372 11 11.243984 11.048984 11.146484 11.146484 C 11.049484 11.244484 11 11.372 11 11.5 C 11 11.628 11.048484 11.755516 11.146484 11.853516 L 24.292969 25 L 11.146484 38.146484 C 10.951484 38.341484 10.951484 38.658516 11.146484 38.853516 C 11.244484 38.950516 11.372 39 11.5 39 C 11.628 39 11.755516 38.951516 11.853516 38.853516 L 25 25.707031 L 38.146484 38.853516 C 38.341484 39.048516 38.658516 39.048516 38.853516 38.853516 C 39.048516 38.657516 39.049516 38.342484 38.853516 38.146484 L 25.707031 25 L 38.853516 11.853516 C 39.048516 11.658516 39.048516 11.341484 38.853516 11.146484 C 38.657516 10.951484 38.342484 10.950484 38.146484 11.146484 L 25 24.292969 L 11.853516 11.146484 C 11.756016 11.048984 11.628 11 11.5 11 z"
        />
      </svg>
    </div>
  </nav>
</div>

<style>
  .header-menu {
    opacity: 2;
    visibility: visible;
    position: fixed;
    z-index: 2;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    will-change: opacity, visibility;
    user-select: none;
    pointer-events: auto;
  }

  .header-menu-nav-list {
    transform: translatey(0);
    flex-grow: 1;
    padding-top: 2vw;
  }

  .header-menu-nav-item > a {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding-left: 8vw;
    padding-right: 8vw;
    display: block;
    margin: 2vw 4vw;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
