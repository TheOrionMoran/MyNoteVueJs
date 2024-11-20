<script setup>
import BaseModal from "./BaseModal.vue";
import Input from "./inputs/Input.vue";
import TextArea from "./inputs/TextArea.vue";
import {reactive, ref} from "vue";
import {APIUrl} from "../js/apiInfo.js";
const props = defineProps(["userToken"]);
const emits = defineEmits(["closeModalClick", "newNote"]);
const errors = ref();

const sendData = reactive({
  title: "",
  content: ""
})

const addNote = async () => {
  let res = await fetch(APIUrl + "notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json" ,
      "Authorization": `Bearer ${props.userToken}`
    },
    body: JSON.stringify(sendData)
  })
  const data = await res.json()

  if (res.status === 201) {
    sendData.title = "";
    sendData.content = "";
    emits('newNote');
    emits('closeModalClick');
  } else {
    console.error(data);
    errors.value = data
  }
}
</script>

<template>
  <BaseModal @ButtonClick="addNote()" :errors="errors" @closeModalClick="$emit('closeModalClick')" title="Добавление заметки" buttonTitle="Добавить">
    <div class="gap-[24px] flex flex-col">
      <Input v-model="sendData.title" type="text" title="Название заметки" placeholder="Введите значение" :maxCharacters="28"/>
      <TextArea v-model="sendData.content" title="Текст заметки" placeholder="Введите текст" :maxCharacters="255"/>
    </div>
  </BaseModal>
</template>