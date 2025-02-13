<script setup>
  import { useAuthStore } from "../../stores/authStore.js";

  const authStore = useAuthStore();
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
        <RouterLink to="/">
          <img src="../../assets/icons/logo.svg" alt="logo">
        </RouterLink>
      </ul>

      <ul class="icon-list" v-show="authStore.isAuthenticated">
        <li class="favorite-icon">
          <img src="../../assets/icons/heart.svg" alt="search">
        </li>
        <li class="cart-icon">
          <img src="../../assets/icons/cart.svg" alt="cart">
        </li>
        <li class="user-icon" >
          <RouterLink to="/profile">
            <img src="../../assets/icons/user.svg" alt="user">
          </RouterLink>
        </li>
      </ul>

      <ul class="auth-actions" v-show="!authStore.isAuthenticated">
        <li>
          <RouterLink to="/login">
            <button>Log in</button>
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/register">
            <button>Sign up</button>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .auth-actions {
    display: flex;
    gap: 1rem;
  }
  .auth-actions button {
    border: 1px solid transparent;
    padding: 10px;
    cursor: pointer;
    overflow: hidden;
    transition: 0.3s ease;
  }
  .auth-actions button:hover {
    border-color: #61c61a;
    border-radius: 3px;
  }

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