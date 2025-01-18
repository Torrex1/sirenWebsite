<script setup>
  import { ref } from "vue";

  import { useAddressStore} from "../../../stores/addressStore.js";
  const addressStore = useAddressStore();

  const props = defineProps({
    id: Number,
    first_name: String,
    last_name: String,
    city: String,
    address: String,
    zipcode: Number,
    country: String,
    phone: String,
  })
  const emit = defineEmits(["closeEditForm"]);

  const updatedAddress = ref({
    first_name: props.first_name,
    last_name: props.last_name,
    city: props.city,
    address: props.address,
    zipcode: props.zipcode,
    country: props.country,
    phone: props.phone,
  })
  const updatedForm = async () => {
    try {
      await addressStore.updateAddressBook(props.id, updatedAddress.value);
      emit("closeEditForm");
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
    }
  }
</script>

<template>
  <form @submit.prevent="updatedForm()">
    <h3>ADD ADDRESS</h3>

    <label>
      Country <br>
      <input v-model="updatedAddress.country" type="text" placeholder="Country" required>
    </label>

    <div class="full-name">
      <label>
        First Name: <br>
        <input v-model="updatedAddress.first_name" type="text" placeholder="First Name" required>
      </label>

      <label>
        Last Name: <br>
        <input v-model="updatedAddress.last_name" type="text" placeholder="Last Name" required>
      </label>
    </div>

    <label>
      Address <br>
      <input v-model="updatedAddress.address" type="text" placeholder="Address" required>
    </label>

    <label>
      City <br>
      <input v-model="updatedAddress.city" type="text" placeholder="City" required>
    </label>

    <label>
      ZIP Code <br>
      <input v-model="updatedAddress.zipcode" type="text" placeholder="ZIP Code" >
    </label>

    <label>
      Phone
      <span style="color: gray">(OPTIONAL)</span><br>
      <input v-model="updatedAddress.phone" type="text" placeholder="Phone">
    </label>

    <div class="button-list">
      <button @click.prevent="emit('closeEditForm')">CANCEL</button>
      <button >UPDATE ADDRESS</button>
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