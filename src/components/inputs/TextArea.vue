<script setup>
defineProps(["title","placeholder","maxCharacters","modelValue"])
defineEmits(['update:modelValue']);
</script>

<template>
  <div class="flex flex-col gap-[8px] w-full">
    <span class="text-small text-c_gray px-[24px]">{{title}}</span>
    <div class="relative w-full">
      <textarea
          class="focus:outline-0 active:ring-0 min-h-[244px] rounded-[36px] px-[28px] py-[22px] w-full text-small placeholder-c_gray text-c_dark"
          :placeholder="placeholder"
          :maxlength="maxCharacters"
          :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
      ></textarea>
    </div>
    <div class="w-full flex justify-between px-[24px]">
      <div v-if="true"></div>
      <span v-if="false" class="text-small text-c_red">Сообщение об ошибке</span>
      <span v-if="maxCharacters !== undefined" class="text-small text-c_gray">{{modelValue.length}}/{{maxCharacters}}</span>
    </div>
  </div>
</template>