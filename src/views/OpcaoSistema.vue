<template>
  <div class="fill-height pt-15">
    <div v-if="!proximo">
      <h1>Bem-vindo!</h1>
      <p class="pt-6 pb-6">Aqui você conseguirá ajuizar ações nos Juizados Especiais Federais</p>
      <v-sheet class="d-flex mb-6">
        <v-sheet class="me-auto"></v-sheet>
        <v-sheet>
          <botao @click="proximo = !proximo" color="blue" nome="Próximo" />
        </v-sheet>
      </v-sheet>
    </div>
    <div v-else>
      <div class="rotulo">
        <h1>Informe os canais que aceita intimação</h1>
        <div class="elemento">
          <v-switch
              v-model="escolha"
              color="blue"
              label="SMS"
              value="sms"
              hide-details
          ></v-switch>
          <v-switch
              v-model="escolha"
              color="blue"
              label="E-mail"
              value="email"
              hide-details
          ></v-switch>
          <v-switch
              v-model="escolha"
              color="blue"
              label="WhatsApp"
              value="whatsapp"
              hide-details
          ></v-switch>
        </div>
      </div>
      <v-sheet class="d-flex mb-6">
        <v-sheet class="me-auto">
          <botao @click="proximo = !proximo" nome="Voltar" color="white" icone="mdi-arrow-left" />
        </v-sheet>
        <v-sheet>
          <botao nome="Próximo"
                 @click="salvarInfo"
                 :disabled="escolha.length <= 0"
          />
        </v-sheet>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      escolha: [],
      proximo: false
    }
  },
  methods: {
    salvarInfo() {
      this.$store.dispatch('inserirInfo',{"canais": this.escolha})
      this.$router.push('/assunto')

    }
  }
}
</script>

<style scoped>
.rotulo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 0px;
}

.elemento {
  display: flex;
  align-self: stretch;
  margin: 10px 0px;
}
</style>