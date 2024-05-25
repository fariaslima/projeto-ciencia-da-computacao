<template>
    <div class="fill-height pt-15 largura">
        <div>
            <h2>Indique em qual especialidade médica gostaria de fazer perícia médica:</h2>
            <v-text-field class="mb-8"
                v-model="especialidadeMedica"
                label="Especialidade Médica"
                :rules="especialidadeRules"
            ></v-text-field>
        </div>   
        <v-row class="text-center"> 
            <v-col col="12" > 
                    <v-sheet class="d-flex mb-6">
                    <v-sheet class="me-auto">
                        <botao nome="Voltar" voltar="0"/>
                    </v-sheet>
                    <v-sheet>
                        <botao
                            nome="Prosseguir"
                            @click="salvarInfo"
                            :disabled="!especialidadeMedica || especialidadeMedica.length < 3"
                        /> 
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
            especialidadeMedica: '',
            especialidadeRules: [
                v => !!v || 'Campo com preenchimento obrigatório',
                v => (v && v.length > 3) || 'Especialidade tem que ser maior que 3',
            ],
        }
    },
    methods: {
        salvarInfo() {
            this.$store.dispatch('inserirInfo',{"especialidadeMedica": this.especialidadeMedica})
            this.$router.push('/relatopeticao')
        }
    }
}
</script>

<style scoped>
    .largura {
        max-width: 600px !important;
    }
</style>