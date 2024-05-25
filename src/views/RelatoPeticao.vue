<template>
    <div class="fill-height pt-15 largura">
        <div>
            <h2>Relate de forma simples outros fatos que ocorreram ou outras informações que sejam pertinentes a petição inicial</h2>
            <v-textarea 
                placeholder="Descreva de forma simples"
                v-model="relato"
            ></v-textarea>
        </div>   
        <v-row class="text-center"> 
            <v-col col="12" > 
                    <v-sheet class="d-flex mb-6">
                    <v-sheet class="me-auto">
                        <botao nome="Voltar" voltar="0"/>
                    </v-sheet>
                    <v-sheet>
                        <botao @click="salvarInfo" nome="Prosseguir" /> 
                    </v-sheet> 
                </v-sheet > 
            </v-col>
        </v-row>   
    </div>
</template>

<script>

export default {
    data() {
        return {
            relato: '',
        }
    },
    methods: {
        salvarInfo() {
            this.$store.dispatch('inserirInfo',{"relatoPeticao": this.relato})
            this.$router.push('/valorindenizacao')
        }
    }
}
</script>

<style scoped>
    .largura {
        max-width: 600px !important;
    }
</style>