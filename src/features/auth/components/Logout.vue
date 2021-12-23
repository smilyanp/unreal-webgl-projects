<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: 'Logout',
  methods: {
    handleLogout () {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.push('/')
        })
        .catch(error => {
          console.log('error', error);
        });
    }
  }
};
</script>

<template>
    <form @submit.prevent="handleLogout">
        <button type="submit">Logout</button>
    </form>
</template>

<style>

</style>
