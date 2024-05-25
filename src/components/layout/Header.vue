<template>
    <v-toolbar app :elevation="3" color="blue">
        <v-toolbar-title class="headline text-uppercase mr-4 me-auto ">
            <router-link to="/" class="pa-2"><img class="icone" src="/src/assets/trf2-38px-2.png" alt="TRF2" /></router-link>
            <span>Justiça</span><span class="font-weight-light"> Federal</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <Navbar />
      </v-toolbar>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
    components: { Navbar }
}
</script>

<style>
  .titlo {
    margin-left: 0px;
    margin-right: 80px;
  }

</style>