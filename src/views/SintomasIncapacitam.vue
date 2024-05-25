<template>
    <div class="fill-height pt-15 largura">
        <div>
            <h2>Quais os sintomas ou o que sente que o incapacitam para o trabalho?</h2>
            <v-textarea 
                placeholder="Descreva o que aconteceu"
                v-model="sintomas"
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
            sintomas: '',
        }
    },
    methods: {
        salvarInfo() {
            this.$store.dispatch('inserirInfo',{"sintomas": this.sintomas})
            this.$router.push('/medicamento')
        }
    }
}
</script>

<style scoped>
    .largura {
        max-width: 600px !important;
    }
</style>