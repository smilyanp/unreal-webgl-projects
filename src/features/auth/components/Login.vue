<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'Login',
  methods: {
    handleLogin () {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user', user);
          this.$router.push('/admin')
        })
        .catch(error => {
          console.log('error', error);
        });
    }
  }
};
</script>

<template>
    <form @submit.prevent="handleLogin">
        <p>
            <label>Email </label> 
            <input type="text" v-model="email" />
        </p>
        <p>
            <label>Password </label> 
            <input type="password" v-model="password" />
        </p>
        <button type="submit">Submit</button>
    </form>
</template>

<style>

</style>
