<script setup>
  import OrderHistory from "./OrderHistory.vue";
  import AddressBook from "./AddressBook.vue";
  import UserProfile from "./UserProfile.vue";
  import FAQ from "./FAQ.vue";
</script>

<template>

  <div class="profile-container">

    <div class="left-side">
      <div class="user-info">
        <span><b>WELCOME BACK</b></span> <br>
        <span>Torrex</span>
      </div>

      <div class="button-list">
        <button>Order History</button>
        <button>Address Book</button>
        <button>Profile</button>
        <button>FAQ</button>
        <button>Log out</button>
      </div>
    </div>

    <div class="right-side">
<!--      <OrderHistory/>-->
      <AddressBook/>
    </div>

  </div>


</template>

<style scoped>
.profile-container {
  display: flex;
  //border: 1px solid #00ff28;
  margin-top: 4rem;
  padding: 4rem;
  gap: 10px;
}

.left-side {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid blue;
  flex-shrink: 0;
  padding: 1rem;
}

.right-side {
  border: 1px solid red;
  flex-grow: 1;
  padding: 1rem;
}

.button-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
}

.button-list button {
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #c3b9c3;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
}
.button-list button:hover {
  border: 1px solid #b608b6;
}

.user-info {
  font-size: 18px;
}

</style>