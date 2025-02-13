<script setup>
  const props = defineProps({
    id: Number,
    title: String,
    price: String,
  })
</script>

<template>

  <div class="card-wrapper">
    <div class="card-img">
      <img src="../../assets/test-img/image.jpg" alt="">
    </div>

    <div class="card-body">
      <div class="card-text">
        <span class="product-title">{{ props?.title }}</span>
        <span class="price"><b>₽{{ props?.price }}</b></span>
      </div>

      <div class="add-cart-icon" style="align-self: flex-end">
        <img src="../../assets/icons/add-to-cart.svg" alt="icon">
      </div>

    </div>


    <div class="feedback">

    </div>
  </div>


</template>

<style scoped>
  .card-wrapper{
    border: 1px solid var(--card-border-color);
    width: 210px;
    height: 260px;
    border-radius: 20px;
  }

  .card-img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    padding: 15px;
  }

  .card-body{
    display: flex;
    justify-content: space-between;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    margin-left: 15px
  }

  .add-cart-icon img{
    margin-right: 20px;
    cursor: pointer;
  }

  .product-title {
    font-size: 22px;
  }

  .price {
    font-size: 18px;
  }
</style>