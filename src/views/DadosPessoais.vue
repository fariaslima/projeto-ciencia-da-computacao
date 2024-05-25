<template>
  <div class="text-center">
    <h1 class="mb-10">Preencha seus dados pessoais</h1>
     <div>   
     <form>
        <v-text-field
            label="Nome completo :"
            v-model="dadosPessoais.nome"
            placeholder="Ana Maria Da Silva"
        >
        </v-text-field>
        <v-text-field
           label="CPF:"
           placeholder="00000000000"
           v-model="dadosPessoais.cpf"
        ></v-text-field>
        <v-combobox
            label="Estado Civil:"
            :items="['Solteiro(a)', 'Casado(a)', 'Viúvo(a)', 'Divorciado(a)', 'União Estável']"
            v-model="dadosPessoais.estadocivil"
        ></v-combobox>
        <v-text-field
            label="Endereço:"
            placeholder="Rua do Acre"
            v-model="dadosPessoais.endereco"
        >
        </v-text-field>
            <v-text-field
            label="CEP:"
            placeholder="00000-000"
            v-model="dadosPessoais.cep"
        >
        </v-text-field>
     </form>
    </div>
    <div>
    <v-row class="text-center"> 
            <v-col col="12" >  
      <v-sheet class="d-flex mb-6" >
          <v-sheet  class="me-auto">
            <botao nome="Voltar" voltar="0"/>
          </v-sheet>
          <v-sheet>
              <botao @click="salvarInfo" nome="Prosseguir"/>
          </v-sheet>
      </v-sheet>
    </v-col>
</v-row>
</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            dadosPessoais: {
                nome: '',
                cpf: '',
                estadocivil:'',
                endereco:'',
                cep:''
            }
        }
    },
    methods: {
        salvarInfo() {
            this.$store.dispatch('inserirInfo',{"dadosPessoais": this.dadosPessoais})
            this.$router.push('/contatovalor')
        }
    }
}
</script>