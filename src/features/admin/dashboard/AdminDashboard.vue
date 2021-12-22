<script>
import Logout from '../../auth/logout/Logout.vue'
export default {
  name: 'AdminDashboard',
  components: {
      Logout
  }
};
</script>

<template>
    <h1>Admin dashboard</h1>
    <p>Edit list of projects and add new ones</p>
    <Logout />
</template>

<style>

</style>
