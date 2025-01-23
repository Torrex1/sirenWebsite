<script setup>
  import axios from "axios";
</script>

<template>
  <div class="modal-shadow" style="border: 1px solid red;">
    <div class="modal-wrapper">
      <form class="login-form">
        <label>
          <span>Email</span> <br>
          <input type="email" PLACEHOLDER="Email" />
        </label>

        <label>
          <span>Password</span> <br>
          <input type="password" PLACEHOLDER="Пароль" />
        </label>

        <span>Еще нет аккаунта?
          <a>
            <RouterLink style="color: rgba(97,198,26,0.7); font-weight: normal" to="/register">Зарегестрируйся</RouterLink>
          </a>
        </span>

        <button>Войти</button>

      </form>
    </div>
  </div>
</template>

<style scoped>

  .modal-shadow {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-wrapper {
    position: fixed;
    border: 2px solid rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    width: 30%;
    height: 70%;
    z-index: 20;

    border-radius: 10px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 30px;
  }


  .login-form input {
    padding: 14px;
    width: 310px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
  }

  button {
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    background-color: unset;
  }

  button:hover {
    opacity: 0.6;
  }

  button:focus-visible {
    outline: none;
    border-color: #61c61a;
  }

</style>