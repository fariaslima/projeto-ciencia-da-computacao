<template>
    <div class="fill-height pt-15">
        <h1 class="mb-6">O valor da causa é</h1>
        <p class="display-1 mb-10 text-blue"><strong>{{ $filters.filtroMoeda(valorCausa) }}</strong></p>
        <h1 class="mb-6">Você confirma esse valor?</h1>
        <v-sheet class="d-flex mb-6">
            <v-sheet class="me-auto">
                <botao to="/balcaoatendimento" nome="Não" />
            </v-sheet>
            <v-sheet>
                <botao nome="Sim" to="/testemunha"/>
            </v-sheet>
        </v-sheet>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valorCausa: this.$store.getters.dadosGerais.valorIndenizacao
        }
    },
    methods: {
        salvarInfo() {
            //this.$store.dispatch('inserirInfo',this.choice)
            this.$router.push('/assunto')

        }
    }

}
</script>

<style scoped>
    p {
        font-size: 3em;
    }
</style>