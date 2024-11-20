<script setup>
import {onMounted, ref} from "vue";
import Button from "./inputs/Button.vue";
import BaseIcon from "./BaseIcon.vue";
import Note from "./Note.vue";
import TheAddNoteModal from "./TheAddNoteModal.vue";
import {APIUrl} from "../js/apiInfo.js";

const props = defineProps(["userToken"]);

const isAddNoteModalOpen = ref(false);
const notes = ref();

const getNotes = async () => {
  let res = await fetch(APIUrl + "notes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${props.userToken}`
    },
  })
  const data = await res.json();

  if (res.status === 200) {
    notes.value = data;
  }
}
onMounted(() => {
  getNotes();
})
</script>

<template>
  <TheAddNoteModal @newNote="getNotes()" :userToken="userToken" @closeModalClick="isAddNoteModalOpen = false" v-if="isAddNoteModalOpen" />
  <div class="container inset-0 grid grid-cols-3 md:grid-cols-1 gap-[40px] lg:gap-[20px] pb-[40px]">
    <Button @click="isAddNoteModalOpen = true" class="p-[20px] fixed z-30 bottom-[40px] right-[40px] lg:right-[20px] md:right-[8px] c_shadow">
      <BaseIcon name="plus"/>
    </Button>
    <Note @deleteNote="getNotes" :id="note.id" :userToken="userToken" :title="note.title" :content="note.content" v-for="note in notes" :key="note.id" />
  </div>
</template>

<style scoped>
  .c_shadow {
    box-shadow: 0 15px 46px -10px #00000099;
  }
</style>