<script setup>
import {ref} from "vue";
import icons from "../js/icons.js";

const props = defineProps(['name'])
const svgData = ref(icons[props.name])
</script>

<template>
  <div v-html="svgData"></div>
</template>