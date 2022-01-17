<script>
import firebaseConfig from '../firebase.config'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import './tailwind.css'

export default {
  name: 'App',
  created() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
  },
};
</script>

<template>
  <div class="container bg-slate-500 mx-auto">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
