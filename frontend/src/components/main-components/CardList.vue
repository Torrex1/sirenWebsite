<script setup>
  import Card from "./Card.vue";
</script>

<template>
  <div class="cards-container">
    <Card/>
  </div>
</template>

<style scoped>
  .cards-container {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    justify-content: center;
    gap: 50px;
  }
</style>