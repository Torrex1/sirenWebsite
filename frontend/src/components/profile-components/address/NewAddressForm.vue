<script setup>
  import { reactive } from "vue";
  import { useModalStore } from "../../../stores/modalStore.js";
  import { useAddressStore} from "../../../stores/addressStore.js";

  const modalStore = useModalStore();
  const addressStore = useAddressStore();

  const addressInfo = reactive({
    first_name: "",
    last_name: "",
    phone: "",
    country: "",
    zipcode: "",
    city: "",
    address: "",
  });

// user_id не проставляет потому что мы не передаем пока что!

</script>

<template>
  <form @submit.prevent="addressStore.sendAddressBook(addressInfo)">

    <h3>ADD ADDRESS</h3>

    <label>
      Country <br>
      <input v-model="addressInfo.country" type="text" placeholder="Country" required>
    </label>

    <div class="full-name">
      <label>
        First Name: <br>
        <input v-model="addressInfo.first_name" type="text" placeholder="First Name" required>
      </label>

      <label>
        Last Name: <br>
        <input v-model="addressInfo.last_name" type="text" placeholder="Last Name" required>
      </label>
    </div>

    <label>
      Address <br>
      <input v-model="addressInfo.address" type="text" placeholder="Address" required>
    </label>

    <label>
      City <br>
      <input v-model="addressInfo.city" type="text" placeholder="City" required>
    </label>

    <label>
      ZIP Code <br>
      <input v-model="addressInfo.zipcode" type="text" placeholder="ZIP Code" >
    </label>

    <label>
      Phone
      <span style="color: gray">(OPTIONAL)</span><br>
      <input v-model="addressInfo.phone" type="text" placeholder="Phone">
    </label>

    <div class="button-list">
      <button @click.prevent="modalStore.closeModal()">CANCEL</button>
      <button>ADD ADDRESS</button>
    </div>
  </form>
</template>

<style scoped>
  form {
    border: 1px solid #cac7c7;
    width: 70%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    outline: none;
    border: 1px solid #bdbdbd;
    margin-top: 5px;
    width: 70%;
  }

  .full-name {
    display: flex;
    gap: 10px;
    width: 70%;
  }

  .full-name label {
    flex: 1;
  }

  .full-name input {
    width: 100%;
  }

  .button-list {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  .button-list button {
    width: 20%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid gray;
    cursor: pointer;
    font-family: 'Helvetica-Bold', sans-serif;
  }
</style>