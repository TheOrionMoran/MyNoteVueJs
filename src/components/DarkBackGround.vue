<script setup>
defineEmits(['bgClick'])
</script>

<template>
  <teleport to="body">
    <div @click.self="$emit('bgClick')" class="inset-0 bg-c_dark fixed opacity-75"></div>
  </teleport>
</template>