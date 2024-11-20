<script setup>
import {onMounted, ref} from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheMainPlug from "./components/TheMainPlug.vue";
import TheRegistrationModal from "./components/TheRegistrationModal.vue";
import TheLoginModal from "./components/TheLoginModal.vue";
import TheBoard from "./components/TheBoard.vue";
import {APIUrl} from "./js/apiInfo.js";

const isRegistrationModalOpen = ref(false);
const isLoginModalOpen = ref(false);
const isUserAuthorized = ref(false);

const userEmail = ref("");
const userToken = ref("");

const authCheck = async () => {
  let UserToken = localStorage.getItem('UserToken');
  if (UserToken === undefined || UserToken === null)
    return null;
  let res = await fetch(APIUrl + "auth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${UserToken}`
    },
  })
  const data = await res.json();
  if(res.status === 200){
    userToken.value = UserToken;
    isUserAuthorized.value = true
    userEmail.value = data.email
  }
}

const logout = async () => {
  let res = await fetch(APIUrl + "auth", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${userToken}`
    },
  })
  isUserAuthorized.value = false;

  localStorage.removeItem("UserToken");

  userToken.value = null;
}

onMounted(() => {
  authCheck();
})

const switchModals = () => {
  if(isRegistrationModalOpen.value === true){
    isRegistrationModalOpen.value = false;
    isLoginModalOpen.value = true;
  } else {
    isRegistrationModalOpen.value = true;
    isLoginModalOpen.value = false;
  }
}
</script>

<template>
  <TheHeader @logout="logout()" :userToken="userToken" :userEmail="userEmail" :isUserAuthorized="isUserAuthorized" @loginClick="isRegistrationModalOpen = true" />
  <TheMainPlug v-if="!isUserAuthorized" />
  <TheBoard :userToken="userToken" v-if="isUserAuthorized" />
  <TheRegistrationModal @switchModal="switchModals()" @closeModalClick="isRegistrationModalOpen = false" v-if="isRegistrationModalOpen" />
  <TheLoginModal @userAuthorized="authCheck()" @switchModal="switchModals()" @closeModalClick="isLoginModalOpen = false" v-if="isLoginModalOpen"/>
</template>
