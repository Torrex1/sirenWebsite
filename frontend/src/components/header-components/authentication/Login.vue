<script setup>
  import axios from "axios";
</script>

<template>
  <div class="modal-wrapper">
    <form class="login-form">
      <h1>WELCOME BACK</h1>
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
</template>

<style scoped>
  .modal-wrapper {
    background-color: #f1f2f3;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    border-radius: 10px;
    gap: 30px;
    background-color: #ffffff;
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