<script setup>
import { auth, signInWithEmailAndPassword } from '../firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const currentUser = ref(null);
const router = useRouter();

const handleSignIn = async() => {
  try {
    const credentialUser = await signInWithEmailAndPassword(auth, email.value, password.value)
    currentUser.value = credentialUser.user;
    router.push("/top");
  }catch(error) {
    console.log('ログインできませんでした',error)
  }
}

</script>

<template>
  <h1>ログイン</h1>
  <input type="text" id="email" v-model="email" placeholder="email">
  <input type="password" id="password" v-model="password" placeholder="password">
  <button value="新規登録" @click="handleSignIn">ログイン</button>
  <p>アカウント作成がお済みでない場合は、<router-link to="/signup">こちら</router-link></p>
</template>

<style scoped>

</style>