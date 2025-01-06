<script setup>
  import {onMounted, ref, watch} from "vue";
  import axios from "axios";
  import { useModalStore } from "../../../stores/modalStore.js";

  import NewAddressForm from "./NewAddressForm.vue";
  import AddressInfoCard from "./AddressInfoCard.vue";

  const modalStore = useModalStore();

  const items = ref([]);
  onMounted(async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/address');

      items.value = Array.isArray(data) ? data : [data];
      console.log(items.value);
    }
    catch (error) {
      console.log(error);
    }
  })

</script>

<template>
  <h1>ADDRESS BOOK</h1>
  <div class="wrapper">
    <AddressInfoCard
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :firstName="item.name"
      :lastName="item.address"
      :city="item.city"
      :address="item.address"
      :zipcode="item.zipcode"
      :country="item.country"
    />


  </div>

  <div class="button-list">
    <button>EDIT</button>
    <button>DELETE</button>
  </div>

  <button v-if="!modalStore.isModalOpen" @click="modalStore.openModal()" class="add-address">
    ADD ADDRESS
  </button>
  <NewAddressForm v-else />
</template>

<style scoped>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .button-list {
    display: flex;
    gap: 1rem;
    margin-top: 20px;
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