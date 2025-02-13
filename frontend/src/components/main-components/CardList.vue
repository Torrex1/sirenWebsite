<script setup>
  import Card from "./Card.vue";
  import axios from 'axios';
  import { onMounted, ref } from "vue";

  const products = ref([]);
  const getProducts = async () => {
    const resp = await axios.get('http://localhost:3000/api/products');
    products.value = resp.data;
    console.log(products.value);
  }
  onMounted(getProducts);
</script>

<template>
  <div class="cards-container">
    <Card v-for="product in products"
          :key="product.id"
          :title="product.name"
          :price="product.price"
    />

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