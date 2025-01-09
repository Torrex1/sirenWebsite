<script setup>
  import { ref } from "vue";
  import { useModalStore } from "../../../stores/modalStore.js";
  import axios from "axios";

  const modalStore = useModalStore();

  const emit = defineEmits(['fetchAddressBooks']);

  const first_name = ref('');
  const last_name = ref('');
  const country = ref('');
  const city = ref('');
  const address = ref('');
  const zipcode = ref();
  const phone = ref();

  const sendAddress = async () => {
// user_id не проставляет потому что мы не передаем пока что!
    try {
      await axios.post('http://localhost:3000/api/address', {
        first_name: first_name.value,
        last_name: last_name.value,
        country: country.value,
        city: city.value,
        address: address.value,
        zipcode: zipcode.value,
        phone: phone.value,
      })
      modalStore.closeModal()

      emit("fetchAddressBooks");
    }
    catch (error) {
      console.log('Ошибка при отправке формы', error);
    }
  }
</script>

<template>
  <form @submit.prevent="sendAddress()">

    <h3>ADD ADDRESS</h3>

    <label>
      Country <br>
      <input v-model="country" type="text" placeholder="Country" required>
    </label>

    <div class="full-name">
      <label>
        First Name: <br>
        <input v-model="first_name" type="text" placeholder="First Name" required>
      </label>

      <label>
        Last Name: <br>
        <input v-model="last_name" type="text" placeholder="Last Name" required>
      </label>
    </div>

    <label>
      Address <br>
      <input v-model="address" type="text" placeholder="Address" required>
    </label>

    <label>
      City <br>
      <input v-model="city" type="text" placeholder="City" required>
    </label>

    <label>
      ZIP Code <br>
      <input v-model="zipcode" type="text" placeholder="ZIP Code" >
    </label>

    <label>
      Phone
      <span style="color: gray">(OPTIONAL)</span><br>
      <input v-model="phone" type="text" placeholder="Phone">
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