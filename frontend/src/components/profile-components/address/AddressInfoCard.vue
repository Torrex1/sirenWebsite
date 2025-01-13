<script setup>
  import axios from "axios";
  import { useAddressStore } from "../../../stores/addressStore.js";

  const addressStore = useAddressStore();

  const props = defineProps({
    id: Number,
    first_name: String,
    last_name: String,
    city: String,
    address: String,
    zipcode: Number,
    country: String,
  });

  const deleteAddress = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/address/${props.id}`).then((response) => {
        console.log(response, "Все удалил!");
        addressStore.getAddressBook();
      })
    }
    catch (error) {
      console.log(error)
    }
  }
</script>

<template>
  <div class="address-info">
    <span class="full-name">{{ first_name }} {{ last_name }},</span> <br>
    <span class="city">{{ city }}</span> <br>
    <span class="address">{{ address }}, </span>
    <span class="zipcode">{{ zipcode }}</span> <br>
    <span class="country">{{ country }}</span>

    <div class="button-list">
      <button>EDIT</button>
      <button @click="deleteAddress()">DELETE</button>
    </div>

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
</style>