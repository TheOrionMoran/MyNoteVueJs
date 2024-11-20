<script setup>
import Button from "./inputs/Button.vue";
import TheLogoType from "./TheLogoType.vue";
import BaseIcon from "./BaseIcon.vue";
import TheHeaderLogout from "./TheHeaderLogout.vue";

defineProps(["isUserAuthorized", "userEmail", "userToken"])
defineEmits(["loginClick", "logout"])
</script>

<template>
  <header class="h-[136px] lg:h-[96px]">
    <div class="container py-[43px] flex justify-between lg:py-[23px] sm:py-[20px]">
      <TheLogoType />
      <div v-if="isUserAuthorized" class="flex group gap-[12px] items-center justify-end relative">
        <span class="text-small truncate md:w-[30vw] sm:w-[60wv]">{{userEmail}}</span>
        <div class="w-[56px] h-[56px] rounded-full bg-c_dark-middle flex justify-center items-center">
          <BaseIcon class="w-[24px] h-[24px] px-[1px] pb-[30px]" name="person"/>
        </div>
        <TheHeaderLogout @logout="$emit('logout')" :userToken="userToken" class="hidden group-hover:flex absolute right-0 bottom-[-135px] z-[5]" />
      </div>
      <Button v-if="!isUserAuthorized" @click="$emit('loginClick')" class="w-[144px] h-[56px]">
        <BaseIcon class="w-[32px] h-[32px]" name="login"/>
        <span>Вход</span>
      </Button>
    </div>
  </header>
</template>