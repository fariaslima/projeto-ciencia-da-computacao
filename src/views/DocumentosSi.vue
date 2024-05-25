<template>
    <div class="fill-height pt-15 largura">
        <h1 class="mb-5">Apresente os seguintes documentos para digitalização (são obrigatórios)</h1>
        <v-file-input
            @change="monitorarArquivo"
            v-model="registro"
            :rules="rules"
            label="RG"
            accept="image/*,.pdf"
            name="registro"
        ></v-file-input>
        <v-file-input
            @change="monitorarArquivo"
            v-model="cpf"
            :rules="rules"
            label="CPF"
            accept="image/*,.pdf"
            name="cpf"
        ></v-file-input>
        <v-file-input
            @change="monitorarArquivo"
            v-model="comprovante"
            :rules="rules"
            label="Comprovante de domicílio"
            accept="image/*,.pdf"
            name="comprovante"
        ></v-file-input>
        <v-alert v-if="this.quantidade !== 3"
            type="error"
            :text="verificarQuantidade"
        ></v-alert>
        <div>
        <v-row class="text-center"> 
         <v-col col="12" >
           <v-sheet class="d-flex mb-6">
             <v-sheet class="me-auto">
               <botao class="ma-4" nome="Voltar" voltar="0"/>
             </v-sheet>
             <v-sheet>
               <botao class="ma-4" @click="salvarInfo" nome="Prosseguir"
                      :disabled="!registro || !cpf || !comprovante"
               />
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
            documentos: {},
            registro: '',
            cpf: '',
            comprovante: '',
            quantidade: 0,
            rules: [
                value => !!value || 'Campo Obrigatório',
            ],
        }
    },
    computed: {
        verificarQuantidade() {
            const qtd = this.quantidade > 0 ? 3 - this.quantidade : 3
            return qtd > 1 ? `Faltam ${qtd} documentos para prosseguir` : `Falta ${qtd} documento para prosseguir`
        }
    },
    methods: {
        salvarInfo() {
            this.$store.dispatch('inserirInfo',{"documentosObrigatorios": this.documentos})
            this.$router.push('/documentossiopcionais')

        },
        monitorarArquivo(event) {
            const campo = event.target.name

            this.documentos[campo] = event.target.files[0].name
            this.quantidade = Object.keys(this.documentos).length
        }
    }

}
</script>

<style>
    .largura {
        max-width: 800px;
    }
</style>