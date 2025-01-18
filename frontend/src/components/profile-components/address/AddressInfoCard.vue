<script setup>
  import { ref } from "vue";

  import { useAddressStore } from "../../../stores/addressStore.js";
  const addressStore = useAddressStore();

  import UpdateAddress from "./UpdateAddress.vue";

  const props = defineProps({
    id: Number,
    first_name: String,
    last_name: String,
    city: String,
    address: String,
    zipcode: Number,
    country: String,
  });

  const isFormOpen = ref(false);
  const closeEditForm = () => {
      isFormOpen.value = !isFormOpen.value;
  }

</script>

<template>
  <div class="address-info" v-if="!isFormOpen">
    <span class="full-name">{{ first_name }} {{ last_name }},</span> <br>
    <span class="city">{{ city }}</span> <br>
    <span class="address">{{ address }}, </span>
    <span class="zipcode">{{ zipcode }}</span> <br>
    <span class="country">{{ country }}</span>

    <div class="button-list">
      <button @click="closeEditForm()">EDIT</button>
      <button @click="addressStore.deleteAddressBook(id)">DELETE</button>
    </div>
  </div>

  <UpdateAddress v-else class="edit-address-form"
   :id="id"
   :first_name="first_name"
   :last_name="last_name"
   :city="city"
   :address="address"
   :zipcode="zipcode"
   :country="country"
   @closeEditForm="closeEditForm"
  />

</template>

<style scoped>
.address-info {
  border: 1px solid #cac7c7;
  padding: 30px;
}

.edit-address-form {
  max-width: 100%;
  width: 100%;
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