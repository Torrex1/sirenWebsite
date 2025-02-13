<template>
  <Header/>
  <RouterView />
  <Footer/>
</template>

<script setup>
  import Header from './components/header-components/Header.vue'
  import Footer from './components/footer-components/Footer.vue'

  import { useAuthStore } from "./stores/authStore.js";

  const authStore = useAuthStore();
  authStore.checkAuth();
</script>
