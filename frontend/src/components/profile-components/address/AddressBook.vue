<script setup>
  import { onMounted } from "vue";

  import { useModalStore } from "../../../stores/modalStore.js";
  import { useAddressStore } from "../../../stores/addressStore.js";

  import NewAddressForm from "./NewAddressForm.vue";
  import AddressInfoCard from "./AddressInfoCard.vue";

  const modalStore = useModalStore();
  const addressStore = useAddressStore();

  onMounted(async () => {
    await addressStore.getAddressBook();
  })
</script>

<template>
  <h1>ADDRESS BOOK</h1>
  <div class="wrapper">
    <span v-if="!addressStore.items.length" class="emptyAddressBook">Здесь будут отображаться добавленные вами адреса</span>
    <AddressInfoCard v-else
      v-for="item in addressStore.items"
      :key="item.id"
      :id="item.id"
      :first_name="item.first_name"
      :last_name="item.last_name"
      :city="item.city"
      :address="item.address"
      :zipcode="item.zipcode"
      :country="item.country"
    />
  </div>

  <button v-if="!modalStore.isAddModalOpened" @click="modalStore.toggleAddModal()" class="add-address">
    ADD ADDRESS
  </button>

  <NewAddressForm v-else />
</template>

<style scoped>
.emptyAddressBook {
  font-family: 'Helvetica-Bold', sans-serif;
  opacity: 0.7;
  font-size: 18px;
}
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .add-address {
    padding: 15px;
    width: 20%;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    font-family: 'Helvetica-Bold', sans-serif;
    position: relative;
    background: transparent;
    transition: color 0.3s ease;
    border: 1px solid #ffffff;
  }

  .add-address::before {
    content: '';
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transition: width 0.3s ease;
    background-color: #61c61a;
    z-index: -1;
  }

  .add-address:hover {
    color: #ffffff;
  }

  .add-address:hover::before {
    width: 100%;
  }


</style>