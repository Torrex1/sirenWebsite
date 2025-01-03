<script setup>

</script>

<template>
  <h1>ADDRESS BOOK</h1>
  <div class="wrapper">

    <div class="address-info">
      <span class="full-name">Rustam Tarikuliev,</span> <br>
      <span class="city">Moscow</span> <br>
    </div>

    <div class="button-list">
      <button>EDIT</button>
      <button>DELETE</button>
    </div>

  </div>

  <button class="add-address">
    ДОБАВИТЬ АДРЕС
  </button>
</template>

<style scoped>
  .wrapper {
    border: 1px solid #cac7c7;
    width: 40%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }

  .address-info span {
    font-size: 18px;
  }

  .button-list {
    display: flex;
    gap: 1rem;
  }

  .button-list button {
    border: none;
    cursor: pointer;
    text-decoration: underline;
    opacity: 0.8;
  }

  .button-list button:hover {
    opacity: 1;
  }

  .add-address {
    padding: 15px;
    width: 20%;
    border-radius: 10px;
    border: 1px solid #cac7c7;
    margin-top: 20px;
    cursor: pointer;
    font-family: 'Helvetica-Bold', sans-serif;
  }

  .add-address:hover {
    color: rgba(200, 60, 225, 0.89);
  }
</style>