<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <h1>Dashboard</h1>
    <div class="card">
      <div class="card-body" v-if="user">
        <h3>Hello, {{ user.name }}</h3>
        <span>{{ user.email }}</span> 
    </div> 
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name : "dashboard",
computed :{
  ...mapGetters(['user'])
}
}
</script>

<style>

</style>