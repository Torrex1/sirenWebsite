<script setup>

</script>

<template>
  <div class="wrapper">
    <h1>ORDER HISTORY</h1>
    <span>You haven't placed any orders yet.</span>
    <RouterLink to="/" style="width: 250px">
      <button>BACK TO SHOPPING</button>
    </RouterLink>
  </div>

</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  button {
    cursor: pointer;
    padding: 15px;
    width: 250px;
    border-radius: 10px;
    border: none;
    background-color: rgba(200, 60, 225, 0.89);
    color: white;

    font-family: 'Helvetica-Bold', sans-serif;
  }
  button:hover {
    background-color: rgba(171, 51, 193, 0.89);
  }

  span {
    font-size: 18px;
  }
</style>