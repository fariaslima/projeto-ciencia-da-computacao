<template>
    <v-toolbar-items>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn to="/" flat v-bind="props">Início</v-btn>
        </template>
      </v-menu>
      <v-btn flat to="/minhasdemandas">Minhas demandas</v-btn>

      <v-btn flat to="/ajuda">Ajuda</v-btn>
    </v-toolbar-items>
</template>

<script>
export default {

}
</script>