<script setup>
  import {ref} from "vue";

  // let isIconPressed = ref(false);

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
    }
  }
</script>

<template>
  <h1>FAQ</h1>
  <ul>
    <li v-for="(item, index) in faqObj">
      <div @click="toggleText(index)" style="display: flex; gap: 5px; cursor: pointer;">
        <h4>{{ item.title }}</h4>
        <img src="../../assets/icons/down-arrow.svg" alt="down-arrow">
      </div>
      <span v-show="openItems[index]">{{ item.description }}</span>
    </li>

<!--    <li>-->
<!--      <div @click="showText()" style="cursor: pointer;">-->
<!--        <span style="font-size: 18px;">Куда доставляется доставка?</span>-->
<!--      </div>-->

<!--      <span v-show="isIconPressed" style="font-size: 16px;">На данный момент доставка осуществляется только на территории РФ через СДЭК</span>-->
<!--    </li>-->

<!--    <li>-->
<!--      <div @click="showText()" style="cursor: pointer;">-->
<!--        <span style="font-size: 18px;">Сколько осуществляется доставка?</span>-->
<!--        <img src="../../assets/icons/down-arrow.svg" alt="down-arrow">-->
<!--      </div>-->
<!--      <span v-show="isIconPressed" style="font-size: 16px;">Сроки доставки зависят от удаленности Вашего города. Как правильно доставка занимает около 4-5 дней.</span>-->
<!--    </li>-->

<!--    <li>-->
<!--      <div @click="showText()" style="cursor: pointer;">-->
<!--        <span style="font-size: 18px;">Почему не доставляете в другие страны?</span>-->
<!--        <img src="../../assets/icons/down-arrow.svg" alt="down-arrow">-->
<!--      </div>-->
<!--      <span v-show="isIconPressed" style="font-size: 16px; opacity: 0.8">На данный момент у нас нет возможности реализовать пободное. В будущем мы планируем расширять зону доставки наших товаров. Следите за обновлениями, подписавшись на рассылку.</span>-->
<!--    </li>-->

<!--    <li>-->
<!--      <div @click="showText()" style="cursor: pointer;">-->
<!--        <span style="font-size: 18px;">Сколько осуществляется доставка?</span>-->
<!--        <img src="../../assets/icons/down-arrow.svg" alt="down-arrow">-->
<!--      </div>-->
<!--      <span v-show="isIconPressed" style="font-size: 16px;">Сроки доставки зависят от удаленности Вашего города. Как правильно доставка занимает около 4-5 дней.</span>-->
<!--    </li>-->

<!--    <li>-->
<!--      <div @click="showText()" style="cursor: pointer;">-->
<!--        <span style="font-size: 18px;">Сколько стоит доставка?</span>-->
<!--        <img src="../../assets/icons/down-arrow.svg" alt="down-arrow">-->
<!--      </div>-->
<!--      <span v-show="isIconPressed" style="font-size: 16px;">Доставку уже входит в стоимость товаров, так что Вам не о чем переживать!</span>-->
<!--    </li>-->
  </ul>
</template>

<style scoped>

</style>