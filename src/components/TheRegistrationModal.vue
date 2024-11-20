<script setup>
import Input from "./inputs/Input.vue";
import BaseModal from "./BaseModal.vue";
import {APIUrl} from "../js/apiInfo";
import {reactive, ref} from "vue";

const emits = defineEmits(["closeModalClick", "switchModal"]);
let errors = ref();
let sendData = reactive({
  email: "",
  password: "",
  confirm_password: ""
});
const register = async () => {
  let res = await fetch(APIUrl + "reg", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sendData)
  })
  const data = await res.json();
  if (res.status === 200) {
    errors.value = undefined;
    sendData.email = "";
    sendData.password = "";
    sendData.confirm_password = "";
    emits("switchModal");
  } else {
    errors.value = data
    console.error(data);
  }
}

</script>

<template>
  <BaseModal :errors="errors" @ButtonClick="register()" @closeModalClick="$emit('closeModalClick')" title="Регистрация"
             buttonTitle="Войти">
    <div class="gap-[24px] flex flex-col">
      <Input v-model="sendData.email" type="text" title="Email" placeholder="Введите значение"/>
      <Input v-model="sendData.password" type="password" title="Пароль" placeholder="Введите пароль"/>
      <Input v-model="sendData.confirm_password" type="password" title="Пароль еще раз" placeholder="Введите пароль"/>
    </div>
    <template #links>
       <span class="text-small text-gray">
         У вас есть аккаунт?
         <a @click.prevent="$emit('switchModal')" class="text-small-bold" href="#">Войдите</a>
       </span>
    </template>
  </BaseModal>
</template>