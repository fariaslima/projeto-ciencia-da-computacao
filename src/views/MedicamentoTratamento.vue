<template>
    <div class="fill-height pt-15 largura">
        <div>
            <div v-if="!usoMedicamento">
                <h2>Faz uso de medicamentos e/ou submete-se a algum tipo de tratamento?</h2>
                <v-row class="text-center"> 
                    <v-col col="12" > 
                            <v-sheet class="d-flex mb-6">
                            <v-sheet class="me-auto">
                                <botao nome="Sim" @click="usoMedicamento = !usoMedicamento"/>
                            </v-sheet>
                            <v-sheet>
                                <botao to="/especialidademedica" nome="Não" />
                            </v-sheet> 
                        </v-sheet > 
                    </v-col>
                </v-row>       
            </div>

            <div v-else>
                <h2>Descreva quais medicamentos e/ou tratamento:</h2>
                <v-textarea 
                        placeholder="Descreva quais medicamentos e/ou tratamento"
                        v-model="usoMedicamentoDesc"
                    ></v-textarea>
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

        </div> 
    </div>
</template>

<script>

export default {
    data() {
        return {
            usoMedicamento: false,
            usoMedicamentoDesc: ''
        }
    },
    methods: {
        salvarInfo() {
            this.$store.dispatch('inserirInfo',{
                "medicamento": this.usoMedicamento,
                "medicamentoDesc": this.usoMedicamentoDesc,
            })
            this.$router.push('/especialidademedica')
        }
    }
}
</script>

<style scoped>
    .largura {
        max-width: 600px !important;
    }
</style>