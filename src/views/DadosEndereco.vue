<template>
  <div class="fill-height pt-8 largura">
    <h3 class="text-green-darken-3">1° Atendimento online</h3>
    <h2 class="mb-6">Endereço Residencial</h2>
     <div>
    <v-form @submit.prevent="buscarEndereco">
    <v-container>
      <v-row >
          <v-col 
          cols="6" 
          sm="9">
            <v-text-field
                @blur="buscarEndereco"
              label="CEP"
              v-model="cep"
              placeholder="20550-013"
              tipe="number"
              :rules="opRules"
              :counter="10"
              required
              density="compact"
                >
            </v-text-field>
            <v-overlay
                v-model="overlay"
                contained
                class="align-center justify-center"
            >
              <v-alert
                  max-width="400px"
                  class="ma-10"
                  type="error"
              >
                Cep não foi encontrado, digite novamente um cep correto
              </v-alert>
            </v-overlay>
            </v-col>
            <v-col 
              cols="6" 
              sm="3">
            <v-sheet >
              <botao
                @click="buscarEndereco"
                nome="Buscar"
                size="small"
                class="mt-4"
                icone="mdi-magnify"
                color="green"

              :disabled="cep.length <= 5"
              />
            </v-sheet>
          </v-col>
       </v-row>
       <div>
            <v-text-field
            label="Endereço Principal"
            placeholder="Rua São Francisco Xavier"
            type="text"
            v-model="endereco.logradouro"
            :rules="endRules"
            :counter="10"
            required
            density="compact"
            ></v-text-field>
            <v-text-field
           label="Complemento "
           placeholder="524"
           v-model="endereco.complemento"
           type="text"
           density="compact"
        ></v-text-field>
        <v-text-field
           label="Bairro"
           placeholder="Bairro"
           v-model="endereco.bairro"
           type="text"
           :rules="opRules"
           density="compact"
        ></v-text-field>
         <v-combobox
             @update:search="buscarMunicipio(endereco.uf)"
             label="Estado"
             :items="ufGeral"
             v-model="endereco.uf"
             :rules="items"
             type="text"
             density="compact"
         ></v-combobox>
        <v-combobox
            label="Município "
            :items="ufMunicipio"
            v-model="endereco.localidade"
            :rules="items"
            type="text"
            density="compact"
              :disabled="!endereco.uf"
        ></v-combobox>
        <v-text-field
            label="Ponto de Referência"
            v-model="endereco.referencia"
            placeholder="Universidade do Estado do Rio de Janeiro"
            type="text"
            density="compact"
          >
        </v-text-field>
    </div>
    </v-container>
    </v-form>
  </div>
<div>
  <v-row class="text-center"> 
    <v-col col="12" >  
      <v-sheet class="d-flex mb-6" >
          <v-sheet  class="me-auto">
            <botao nome="Voltar" voltar="0"/>
          </v-sheet>
          <v-sheet>
            <botao @click="salvarInfo" nome="Prosseguir"
              :disabled=" cep.length <= 7 || (endereco.logradouro.length && endereco.bairro.length) <= 4 || (endereco.localidade && endereco.uf) === null"
            />
          </v-sheet>
      </v-sheet>
    </v-col>
  </v-row>
</div>
</div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      data: '',
      ufGeral: [],
      ufMunicipio: [],
      cep: '',
      endereco:{
        logradouro:'',
        bairro:'',
        localidade:'',
        uf:'',
        ufExt:'',
        complemento:'',
        referencia:'',
      },
      overlay: false,
      flag: false,
      opRules: [
        v => !!v || 'Campo com preenchimento obrigatório',
      ],
      endRules: [
        v => !!v || 'Campo com preenchimento obrigatório',
        v => (v && v?.length >= 10) || 'O Endereço deve ter menos de 10 caracteres',
      ],
      items: [
          v => !!v || 'Campo com preenchimento obrigatório',
        ],
    };
  },
  mounted() {
    this.buscarEstado()
    // axios
    //     .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    //     //.then(response => (this.ufGeral = response))
    //     .then(response => {
    //       //console.log(response.data)
    //       this.data = response.data
    //       this.data.forEach(item => {
    //           this.ufGeral.push(item.nome)
    //         })
    //       }
    //     )
  },
  methods: {
    buscarMunicipio(uf){
      axios
          .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
          .then(response => {
              this.ufMunicipio = []
              this.data = response.data
              this.data.forEach(item => {
                this.ufMunicipio.push(item.nome)
              })
            }
          )
    },
    buscarEstado(uf = false){
      axios
        .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => {
            this.data = response.data
            if(!uf){
              this.data.forEach(item => {
                this.ufGeral.push(item.sigla)
              })
            }else{
              this.endereco.ufExt = this.data.find(element=> element.sigla == uf).nome
            }
          }
        )
    },
    buscarEndereco() {
    if (this.cep.length === 8 && /^\d+$/.test(this.cep)) {
      fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.error) {
            this.endereco = data;
            this.endereco.ufExt = this.buscarEstado(data.uf)
          } else {
            this.endereco = {
              logradouro:'',
              bairro:'',
              localidade:'',
              uf:'',
              complemento:'',
              referencia:'',
            }
          }
        })
        .catch(error => {
          console.error('Erro ao buscar endereço:', error);
          console.log('Erro ao buscar endereço:');
          this.endereco = {
            logradouro:'',
            bairro:'',
            localidade:'',
            uf:'',
            complemento:'',
            referencia:'',
          }
        });
      } else {
        console.log('else')
        this.flag = true
        this.overlay = true
        this.endereco = {
          logradouro:'',
          bairro:'',
          localidade:'',
          uf:'',
          complemento:'',
          referencia:'',
        }
      }
    },
    async salvarInfo() {
        this.$store.dispatch('inserirInfo',{ "dadosEndereco": this.endereco})
        //await http.post('/usuarios',this.$store.getters.dadosGerais);
        this.$router.push('/atividadeexercida')

    }
  },
  computed: {
        ...mapGetters({
            dados: 'dadosGerais'
        })
    },
}

</script>
