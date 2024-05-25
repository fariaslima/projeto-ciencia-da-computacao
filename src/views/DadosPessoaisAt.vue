<template>
  <div class="fill-height pt-8 largura">
    <h3 class="text-green-darken-3">1° Atendimento online</h3>
    <h2 class="mb-6">{{`${this.tipoProcesso}`}}</h2>
    <v-form @submit.prevent>
      <v-container>
        <v-text-field
            label="Para quem deseja atendimento? (nome completo) "
            v-model="nome"
            type="text"
            placeholder="Ana Maria Da Silva"
            :rules="nameRules"
            :counter="50"
            name="nome"
            density="compact"
        >
        </v-text-field>

        <v-text-field
           label="CPF "
           v-model="cpf"
           type="number"
           placeholder="000.000.000-00"
           :rules="cpfRules"
           :counter="11"
           name="cpf"
           required
           density="compact"
        ></v-text-field>
        <v-text-field
           label="RG"
           v-model="rg"
           type="number"
           placeholder="99.999.999-0"
           :rules="rgRules"
           :counter="9"
           name="rg"
           required
           density="compact"
        ></v-text-field>
        <v-text-field
            label="Nacionalidade"
            v-model="pais"
            type="text"
            placeholder="brasileiro(a)"
            :rules="paisRules"
            :counter="20"
            name="pais"
            density="compact"
        >
        </v-text-field>
        <v-combobox
            label="Estado Civil"
            :items="['Solteiro(a)', 'Casado(a)', 'Viúvo(a)', 'Divorciado(a)', 'União Estável']"
            v-model="estadocivil"
            type="text"
            :rules="items"
            name="estadocivil"
            density="compact"
        ></v-combobox>
        <v-text-field
            label="Profissão"
            v-model="profissao"
            type="text"
            placeholder="Professora"
            :rules="profRules"
            :counter="10"
            name="profissao"
            required
            density="compact"
          >
        </v-text-field>

        <v-text-field
            label="Email"
            v-model="email"
            type="email"
            placeholder="anamariadasilva@gmail.com"
            :rules="emailRules"
            :counter="10"
            name="email"
            required
            density="compact"
          >
        </v-text-field>
        <div v-for="(contato, index) in formContatos" :key="index">
        <v-row>
            <v-col
            cols="6"
            sm="9">
            <v-text-field
                    v-if="contato.type === 'number'"
                    type="number"
                    label="Telefones de contato "
                    v-model="formContatos[index].telefone"
                    placeholder="(DD) 0000000"
                    :rules="telRules"
                    :counter="9"
                    name="telefone"
                    required
                    density="compact"
                >
                </v-text-field>
            </v-col>
            <v-col v-if="index === 0">
              <botao nome="Adicionar"
                 size="small"
                 @click="addContato"
                 class="mt-4"
                 icone="mdi-plus"
                 color="green"
                     :disabled="formContatos[formContatos.length - 1].telefone == null || formContatos[formContatos.length - 1].telefone.length <= 8"
              /></v-col>
            <v-col v-else
            cols="6"
            sm="3">
            <v-sheet >
              <v-icon
                  @click="removeContato(index)"
                  icon="mdi-minus-circle"
                  color="error"
                  class="mt-4"
              ></v-icon>
            </v-sheet>
          </v-col>
       </v-row>
    </div>
   </v-container>
  
    <div>
      <v-row class="text-center">
          <v-col col="12" >
              <v-sheet class="d-flex mb-6" >
                <v-sheet  class="me-auto">
                    <botao nome="Voltar" voltar="0"/>
                </v-sheet>
                  <botao @click="salvarInfo" nome="Prosseguir"
                    :disabled="(nome.length && profissao.length) <=5 ||
                      cpf.length <= 10 || rg.length <= 8 || estadocivil === null || !email.includes('@' && '.') ||
                      (formContatos[formContatos.length - 1].telefone == null || formContatos[formContatos.length - 1].telefone.length <= 8)
                "/>
              </v-sheet>
          </v-col>
      </v-row>
    </div>
  </v-form>
</div>
</template>

<script>
export default {
    data() {
        return {
          tipoProcesso:'INSS - Auxílio Doença',
            nome: 'Paulo Lima',
            nameRules: [
              v => !!v || 'Campo com preenchimento obrigatório',
              v => (v && v?.length <= 50) || 'O nome deve ter menos de 50 caracteres',
            ],
            cpf: '08846181700',
           cpfRules: [
             v => !!v || 'Campo com preenchimento obrigatório',
             v => (v && v?.length >= 11 && /[0-1-]+/.test(v)) || 'O cpf precisa ter pelo menos 11 dígitos.',
           ],
           rg: '290834394',
           rgRules: [
             v => !!v || 'Campo com preenchimento obrigatório',
             v => (v && v?.length >= 9 && /[0-1-]+/.test(v)) || 'O RG precisa ter pelo menos 9 dígitos.',
           ],
           pais: 'brasileiro',
            paisRules: [
              v => !!v || 'Campo com preenchimento obrigatório',
              v => (v && v?.length <= 20) || 'O Nacionalidade deve ter menos de 20 caracteres',
            ],
            estadocivil:'',
            items: [
              v => !!v || 'Selecione um estado civil',
            ],
            profissao:'professor',
            profRules: [
              v => !!v || 'Campo com preenchimento obrigatório',
              v => (v && v?.length <= 50) || 'O Profissão deve ter menos de 10 caracteres',
            ],
            email:'fariaslima@gmail.com',
            emailRules: [
              v => !!v || 'Campo com preenchimento obrigatório',
              v => (v && /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(v)) || 'Deve ser um e-mail válido',
            ],
            telefone:[],
            telRules:[
              v => !!v || 'Campo com preenchimento obrigatório',
              v => (v && v?.length >= 9 && /[0-9-]+/.test(v)) || 'O número de telefone precisa ter pelo menos 9 dígitos',
            ],
            formContatos: [
              { type: 'number',
                  label: 'Telefone'

              }
            ]
        }
    },
    methods: {
        addContato() {
            this.formContatos.push({ type: 'number', label: 'Telefone'});
       },
        removeContato(index) {
            this.formContatos.splice(index, 1);
        },
       async  salvarInfo() {
          const dadosPessoaisAt = {
            "nome": this.nome,
            "cpf": this.cpf,
            "rg": this.rg,
            "pais":this.pais,
            "estadocivil": this.estadocivil,
            "profissao": this.profissao,
            "email": this.email,
            "telefone": this.formContatos,
          }
          
          //const data = await http.post('/usuarios',dadosPessoaisAt);
          //console.log(data.data.res)
          //this.$store.dispatch('inserirInfo',{'idAplicacao':data.data.res,dadosPessoaisAt})
          this.$store.dispatch('inserirInfo',{dadosPessoaisAt})
          this.$router.push('/dadosendereco')
        },
    },
}

</script>

<style>
  .largura {
    min-width: 600px;
  }
</style>
