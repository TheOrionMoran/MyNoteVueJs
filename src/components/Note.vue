<script setup>
import BaseIcon from "./BaseIcon.vue";
import {APIUrl} from "../js/apiInfo.js";

const props = defineProps(["id","title", "content","userToken"])
const emits = defineEmits(["deleteNote"]);

const deleteNote = async () => {
  let res = await fetch(APIUrl + "notes/" + props.id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${props.userToken}`
    }
  })
  if(res.status === 200) {
    emits("deleteNote");
  }
}
</script>

<template>
  <div class="w-full flex flex-col max-w-[506px] rounded-tl-lg overflow-clip c_shadow lg:max-w-[338px] md:max-w-full self-start">
    <div class="relative flex">
      <div class="py-[20px] pl-[28px] bg-c_green-light flex-1">
        <h4>{{ title }}</h4>
      </div>
      <div class="max-w-[41px] w-full flex-1"></div>
      <img class="absolute right-[1px]" src="../assets/images/noteHeaderPaper.svg" alt="">
    </div>
    <div class="bg-c_green-light flex flex-col flex-1 rounded-b-lg" style="width: calc(100% - 1.5px)">
      <div class="bg-c_green-light flex-1 border-t-[1px] border-c_green p-[28px] pt-[20px]">
        <span class="text-normal">{{content}}</span>
      </div>
      <div class="flex justify-end h-[72px]" >
        <button @click="deleteNote()" class="flex gap-[12px] text-white items-center px-[24px] py-[12px]" href="">
          <BaseIcon class="w-[16px] h-[16px]" name="cross"/>
          <span>Удалить</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .c_shadow{
    box-shadow: 0 15px 15px -10px #00000066;
  }
</style>