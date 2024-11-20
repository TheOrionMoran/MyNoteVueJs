<script setup>
import BaseModal from "./BaseModal.vue";
import Input from "./inputs/Input.vue";
import {APIUrl} from "../js/apiInfo.js";
import {reactive, ref} from "vue";
const emits = defineEmits(["closeModalClick","switchModal","userAuthorized"]);

const errors = ref();
const sendData = reactive({
  email: "",
  password: ""
})
const login = async () => {
  let res = await fetch(APIUrl + "auth", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(sendData)
  })
  const data = await res.json();
  if(res.status === 200) {
    localStorage.setItem("UserToken", data.accessToken);
    errors.value = undefined;
    sendData.email = "";
    sendData.password = "";
    emits("userAuthorized");
    emits("closeModalClick");
  }else{
    errors.value = data;
    console.error(data);
  }
}

</script>

<template>
  <BaseModal :errors="errors" @ButtonClick="login()" @closeModalClick="$emit('closeModalClick')" title="Вход в ваш аккаунт" buttonTitle="Войти">
    <div class="gap-[24px] flex flex-col">
      <Input name="email" v-model="sendData.email" type="text" title="Email" placeholder="Введите значение"/>
      <Input name="password" v-model="sendData.password" type="password" title="Пароль" placeholder="Введите пароль"/>
    </div>
    <template #links>
       <span class="text-small text-gray">
         У вас нет аккаунта?
         <a @click.prevent="$emit('switchModal')" class="text-small-bold" href="#">Зарегистрируйтесь</a>
       </span>
    </template>
  </BaseModal>
</template>