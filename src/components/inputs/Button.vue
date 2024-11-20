<template>
  <button
      :class="$attrs.class"
      class="transition-all bg-c_green-light flex gap-[12px] items-center justify-center text-white text-normal rounded-full
              hover:bg-c_green-middle active:bg-c_green-dark disabled:bg-c_gray"
  >
    <slot></slot>
  </button>
</template>