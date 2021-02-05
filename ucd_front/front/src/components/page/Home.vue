<template>
  <div class="text-center text-2xl">
    Bienvenue aux Platforme de gestion des etudiants
  
  <div class="text-center">
    <router-link to=/Login>
  <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  >
  Connection
</button>
    </router-link>
<router-link to="/Register">
<button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Inscription
</button>
</router-link> 
  </div>
    </div>

</template>
<script>
export default {
  name: "Home"
};
</script>

<style>
</style>