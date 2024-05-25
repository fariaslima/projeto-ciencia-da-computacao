<template>
    <div class="fill-height pt-15 largura">
        <h1 class="mb-5">Apresente os seguintes documentos para digitalização (não são obrigatórios)</h1>
        <v-file-input
            @change="monitorarArquivo"
            v-model="extrato"
            label="Extrato"
            accept="image/*,.pdf"
            name="extrato"
        ></v-file-input>
        <v-file-input
            @change="monitorarArquivo"
            v-model="reclamacao"
            label="Reclamação"
            accept="image/*,.pdf"
            name="reclamacao"
        ></v-file-input>
        <v-file-input
            @change="monitorarArquivo"
            v-model="outros"
            label="Outros"
            accept="image/*,.pdf"
            name="outros"
        ></v-file-input>
        <div>
        <v-row class="text-center"> 
         <v-col col="12" >
           <v-sheet class="d-flex mb-6">
             <v-sheet class="me-auto">
               <botao class="ma-4" nome="Voltar" voltar="0"/>
             </v-sheet>
             <v-sheet>
               <botao class="ma-4" @click="salvarInfo" nome="Prosseguir"/>
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
            extrato: '',
            reclamacao: '',
            outros: '',
        }
    },
    computed: {},
    methods: {
        salvarInfo() {
            this.$store.dispatch('inserirInfo',{"documentosNaoObrigatorios": this.documentos})
            this.$router.push('/documentossijuntados')

        },
        monitorarArquivo(event) {
            const campo = event.target.name

            this.documentos[campo] = event.target.files[0].name
        }
    }

}
</script>

<style>
    .largura {
        max-width: 800px;
    }
</style>