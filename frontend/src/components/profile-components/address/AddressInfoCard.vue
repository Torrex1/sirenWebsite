<script setup>
  const props = defineProps({
    id: Number,
    firstName: String,
    lastName: String,
    city: String,
    address: String,
    zipcode: Number,
    country: String,
  })
</script>

<template>
  <div class="address-info">
    <span class="full-name">{{ firstName }} {{ lastName }},</span> <br>
    <span class="city">{{ city }}</span> <br>
    <span class="address">{{ address }}, </span>
    <span class="zipcode">{{ zipcode }}</span> <br>
    <span class="country">{{ country }}</span>
  </div>
</template>

<style scoped>
.address-info {
  border: 1px solid #cac7c7;
  padding: 30px;
}
.address-info span {
  font-size: 16px;
}
</style>