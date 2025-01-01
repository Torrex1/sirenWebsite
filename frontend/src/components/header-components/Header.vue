<script setup>

</script>

<template>
  <header>
    <nav>
      <ul class="menu">
        <li>
          <span>Catalog</span>
          <img src="../../assets/icons/down-arrow.svg" alt="down-arrow">
        </li>
        <li>
          <span>More</span>
          <img src="../../assets/icons/down-arrow.svg" alt="down-arrow">
        </li>
      </ul>

      <ul class="logo">
        <img src="../../assets/icons/logo.svg" alt="logo">
      </ul>

      <ul class="icon-list">
        <li class="search-icon">
          <img src="../../assets/icons/search.svg" alt="search">
        </li>
        <li class="cart-icon">
          <img src="../../assets/icons/cart.svg" alt="cart">
        </li>
        <li class="user-icon">
          <img src="../../assets/icons/user.svg" alt="user">
        </li>
      </ul>

    </nav>
  </header>
</template>

<style scoped>

  .menu li, .icon-list img, .logo img {
    cursor: pointer;
  }

  .menu {
    display: flex;
    gap: 1rem;
  }

  nav {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--header-border);
    align-items: center;
    height: 7vh;
    padding: 0 1rem;
  }

  .menu span {
    color: var(--header-title-color);
    font-size: 18px;
    opacity: 0.8;
  }

  .menu span:hover {
    opacity: 1;
  }

  .icon-list {
    display: flex;
    gap: 1rem;
  }

  .icon-list img {
    width: 20px;
    height: 20px;
  }

  .logo img {
    width: 150px;
  }

</style>