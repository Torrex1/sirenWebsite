<script setup>

</script>

<template>
  <h1>PROFILE</h1>
  <div class="wrapper">
    <span class="email">flendik666@gmail.com</span>

    <span>EDIT PROFILE</span>
    <div class="full-name">
      <label>
        First Name: <br>
        <input type="text" placeholder="First Name">
      </label>

      <label>
        Last Name: <br>
        <input type="text" placeholder="Last Name">
      </label>
    </div>


    <label>
      Birthday: <br>
      <input class="birthday" type="text" placeholder="MM/DD/YYYY" />
    </label>


    <button class="apply-changes">
      APPLY CHANGES
    </button>
  </div>

</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .full-name {
    display: flex;
    gap: 20px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    outline: none;
    border: 1px solid #bdbdbd;
    margin-top: 5px;
  }
  input:focus {
    outline: none;
    border: 1px solid #9f15ae;
  }

  .apply-changes {
    width: 20%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid gray;
    cursor: pointer;
    font-family: 'Helvetica-Bold', sans-serif;
  }

  .apply-changes:hover {
    border: 1px solid #b8b8b8;
  }

  .apply-changes:focus-visible {
    border: unset;
    outline: rgba(144, 41, 207, 0.89) solid 1px;
  }
</style>