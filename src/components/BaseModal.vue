<script setup>
import DarkBackGround from "./DarkBackGround.vue";
import Button from "./inputs/Button.vue";
import BaseIcon from "./BaseIcon.vue";

defineProps(['title','buttonTitle','errors'])
defineEmits(['closeModalClick','switchModal','ButtonClick'])
</script>

<template>
  <DarkBackGround @bgClick="$emit('closeModalClick')" />
  <teleport to="body">
    <div class="inset-0 flex justify-center items-center fixed pointer-events-none">
      <div class="pointer-events-auto flex-col max-h-screen flex bg-c_dark-middle rounded-xl p-[80px] z-20 relative overflow-y-auto max-w-[780px] w-full gap-[40px] lg:max-w-[594px] lg:p-[56px] md:max-w-[688px] sm:max-w-full sm:p-[16px] sm:h-screen sm:max-h-[750px] sm:justify-center">
        <Button @click="$emit('closeModalClick')" class="w-[56px] h-[56px] p-[20px] absolute right-[20px] top-[20px]">
          <BaseIcon class="w-[16px] h-[16px]" name="cross"/>
        </Button>
        <h2>{{title}}</h2>

        <slot></slot>

        <div class="flex flex-col gap-[20px]">
          <div class="flex justify-between items-center sm:flex-col-reverse gap-[12px] ">
            <div v-if="!$slots.links"></div>
            <slot name="links"></slot>
            <Button @click="$emit('ButtonClick')" class="sm:w-full px-[24px] py-[12px]">
              <span>{{buttonTitle}}</span>
            </Button>
          </div>
          <div v-if="errors !== undefined" class="bg-c_red rounded-[30px] bg-opacity-10 px-[20px] py-[8px] flex flex-col gap-[7px]">
            <span v-for="error in errors.message" class="text-small text-c_red">{{error}}</span>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>