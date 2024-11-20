<script setup>
defineProps(["userToken"]);
defineEmits(["logout"]);

</script>

<template>
<div :class="$attrs.class" class="h-[150px] flex flex-col justify-end">
  <div class="h-[108px] w-[145px] rounded-lg bg-c_dark-middle c_shadow">
    <div class="w-full h-full flex justify-center items-center relative">
      <a @click.prevent="$emit('logout')" href="#" class="text-small-bold text-c_green-light">Выйти</a>
      <div class="triangle absolute top-[-20px] right-[5px]"></div>
    </div>
  </div>
</div>
</template>

<style scoped>
 .c_shadow {
   box-shadow: 0 15px 46px -10px #00000099;
 }
 .triangle {
   width: 0;
   height: 0;
   border-left: 25px solid transparent;
   border-right: 25px solid transparent;
   border-bottom: 40px solid #1B2F46;
 }
</style>