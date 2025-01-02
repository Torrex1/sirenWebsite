<script setup>
  import CardList from "./CardList.vue";
</script>

<template>
  <div class="wrapper">
    <div class="main-container">
      <h1>New Drops</h1>

      <CardList/>
    </div>
  </div>

</template>

<style scoped>

.wrapper {
    display: flex;
    justify-content: center;
    width: 1280px;
    height: 100vh;
    margin: auto;
    background-color: #ffffff;
    border-radius: 10px;
  }

  h1 {
    color: var(--main-title-color);
    font-size: 3.5rem;
    margin-bottom: 1rem;
    padding-top: 20px;
  }
</style>