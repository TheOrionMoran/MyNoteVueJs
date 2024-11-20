<script setup>
import BaseIcon from "../BaseIcon.vue";
import {ref} from "vue";

const props = defineProps(["type","title","placeholder","maxCharacters","modelValue", "name"]);
defineEmits(['update:modelValue']);

const input = ref(null);
const localType = ref(props.type);

const switchShowPassword = () => {
  localType.value = localType.value === 'password' ? 'text' : 'password';
}
</script>

<template>
  <div class="flex flex-col gap-[8px] w-full">
    <span class="text-small text-c_gray px-[24px]">{{title}}</span>
    <div class="relative w-full">
      <input
          :name="name"
          ref="input"
          class="focus:outline-0 active:ring-0 h-[72px] rounded-[36px] px-[28px] py-[22px] w-full text-small placeholder-c_gray text-c_dark"
          :type="localType"
          :placeholder="placeholder"
          :maxlength="maxCharacters"
          :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
      >
      <div v-if="type === 'password'" class="absolute right-[32px] top-[30px] ">
        <BaseIcon v-if="localType === 'password'" @click="switchShowPassword()" class="w-[20px] h-[16px] cursor-pointer" name="eye" />
        <BaseIcon v-else @click="switchShowPassword()" class="w-[20px] h-[16px] cursor-pointer" name="eyeCrossed" />
      </div>
    </div>
    <div class="w-full flex justify-between px-[24px]">
      <div v-if="true"></div>
      <span v-if="false" class="text-small text-c_red">Сообщение об ошибке</span>
      <span v-if="maxCharacters !== undefined" class="text-small text-c_gray">{{modelValue.length}}/{{maxCharacters}}</span>
    </div>
  </div>
</template>