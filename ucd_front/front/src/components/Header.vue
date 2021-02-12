<template>
    <nav  class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">

  <div class="mb-2 sm:mb-0 flex flex-row">
    <div class=" self-center mr-2">
      <img class=" self-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Logo-UCD.jpg/180px-Logo-UCD.jpg" />
    </div>
  </div>
 <div v-if!="user"> 
  <div class="sm:mb-0 self-center">
    <!-- <div class="h-10" style="display: table-cell, vertical-align: middle;"> -->
          <router-link to="/">
    <a href="#" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Page principale</a>
          </router-link>
          <router-link to="/Register">

    <a href="#" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Inscription</a>
              </router-link>

    <!-- <a href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About Us</a> -->
              <router-link to="/Login">

    <a href="#" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Connection</a>
                  </router-link>
<router-link to="/contact">
    <a href="#" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Contact</a>
</router-link>
  </div>
    </div>
    
  <div v-if="user">
     <router-link to="/Login">

    <a  @oclick="click" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">logout</a>
                  </router-link>
    </div> 

</nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Header',
    props:['user'],
    methods:{
      click(){
        localStorage.removeItem('token');
        this.$store.dispatch('user',null);
        this.$router.push('/');
      }
    },
    computed :{
      ...mapGetters(['user'])
    }
}
</script>

<style>

</style>
