<template>
  <div id="app">
    <Header />
    <router-view></router-view>
<Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import axios from 'axios'


export default {
  name: 'App',  
  components: {
    Header,
    Footer,
    
  },
  data(){
    return {
      user:null
    }
  },
  async created() {
    const response = await axios.get('user');
      this.$store.dispatch('user',response.data)

  }
}
</script>

<style>
@import "css/tailwind.css";


</style>
