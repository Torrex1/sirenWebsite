<script setup>
  import { markRaw, ref } from "vue";
  import OrderHistory from "./OrderHistory.vue";
  import AddressBook from "./address/AddressBook.vue";
  import UserProfile from "./UserProfile.vue";
  import FAQ from "./FAQ.vue";

  import { useAuthStore } from "../../stores/authStore.js";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const components = {
    OrderHistory: markRaw(OrderHistory),
    AddressBook: markRaw(AddressBook),
    UserProfile: markRaw(UserProfile),
    FAQ: markRaw(FAQ),
  }
  const currentComponent = ref(OrderHistory);
  const getButtonName = (event) => {
    currentComponent.value = components[event.target.name] || null;
  }

</script>

<template>
  <div class="profile-container">
    <div class="left-side">
      <div class="user-info">
        <span><b>WELCOME BACK</b></span> <br>
        <span>Torrex</span>
      </div>

      <div class="button-list">
        <button @click="getButtonName" name="OrderHistory">
          <img src="../../assets/icons/cart.svg" alt="">
          Order History
        </button>

        <button @click="getButtonName" name="AddressBook">
          <img src="../../assets/icons/address_book.svg" alt="">
          Address Book
        </button>

<!--        <button @click="getButtonName" name="UserProfile">-->
<!--          <img src="../../assets/icons/user.svg" alt="">-->
<!--          Profile-->
<!--        </button>-->
        <button @click="getButtonName" name="FAQ">
          <img src="../../assets/icons/faq.svg" alt="">
          FAQ
        </button>

        <button @click="useAuthStore().logout(); router.push('/')">
          <img src="../../assets/icons/logout.svg" alt="">
          Log out
        </button>

      </div>
    </div>

    <div class="right-side">
      <component :is="currentComponent"/>
    </div>

  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  margin-top: 4rem;
  padding: 4rem;
  gap: 10px;
}

.left-side {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 1rem;

  border: 1px solid #b8a9b8;
  border-radius: 5px;
  padding: 1rem;
}

.right-side {
  border: 1px solid #b8a9b8;
  border-radius: 5px;
  flex-grow: 1;
  padding: 1rem;
}

.button-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 600px;
}

.button-list button {
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #c3b9c3;
  cursor: pointer;
  font-size: 18px;

  display: flex;
  justify-content: center;
  gap: 5px;
}

.button-list button img {
  width: 21px;
  height: 21px;
}
.button-list button img {
  opacity: 0.8;
}

.button-list button:hover {
  border: 1px solid #17872c;
}

.user-info {
  font-size: 18px;
}

</style>