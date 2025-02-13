<script setup>
  import {ref} from "vue";

  const openItems = ref({});

  const toggleText = (key) => {
    openItems.value[key] = !openItems.value[key];
  }

  const faqObj = {
    first: {
      title: "Куда доставляются товары?",
      description: "На данный момент доставка осуществляется только на территории РФ через СДЭК"
    },
    second: {
      title: "Сколько осуществляется доставка?",
      description: "Сроки доставки зависят от удаленности Вашего города. Как правильно доставка занимает около 4-5 дней.",
    },
    third: {
      title: "Почему не доставляете в другие страны?",
      description: "На данный момент у нас нет возможности реализовать пободное. В будущем мы планируем расширять зону доставки наших товаров. Следите за обновлениями, подписавшись на рассылку.",
    },
    fourth: {
      title: "Сколько стоит доставка?",
      description: "Доставку уже входит в стоимость товаров, так что Вам не о чем переживать!",
    },
  }
</script>

<template>
  <h1>FAQ</h1>

  <ul class="faq-wrapper">
    <li v-for="(item, index) in faqObj">
      <div @click="toggleText(index)" style="display: flex; gap: 5px; cursor: pointer;">
        <h3>{{ item.title }}</h3>
        <img src="../../assets/icons/down-arrow.svg" alt="down-arrow">
      </div>
      <span style="color: rgba(76,76,76,0.84)" v-show="openItems[index]">{{ item.description }}</span>
    </li>
  </ul>
</template>

<style scoped>
  .faq-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 10px;
  }

  h3 {
    font-weight: normal;
  }
</style>