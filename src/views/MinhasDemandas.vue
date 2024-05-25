<template>
    <div class="fill-height pt-15 largura">
        <h1>Minhas Demandas</h1>
        <v-expansion-panels class="tamanhoPainel">
          <v-expansion-panel>
            <v-expansion-panel-title disable-icon-rotate  class="tamanhoPainel">
              Auxílio Emergencial Covid-19
            <template v-slot:actions>
                <v-icon color="success" icon="mdi-check">
                </v-icon>
            </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>

              <v-expansion-panels>
                <v-expansion-panel-title>
                  Dados Pessoais
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-text>
              </v-expansion-panels>

            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title disable-icon-rotate  class="tamanhoPainel">
              INSS - Auxílio Doença
              <template v-slot:actions>
                <v-icon color="error" icon="mdi-alert-circle">
                </v-icon>
              </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      info: ''
    }
  },
  mounted () {
    axios
        .get('https://stock-trader-352af-default-rtdb.firebaseio.com/data.json')
        .then(response => (this.info = response))
  }
}
</script>

<style>
    .largura {
        max-width: 600px;
    }

    .tamanhoPainel {
        width: 600px;
    }
</style>