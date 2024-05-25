<template>
        <v-btn v-if="voltar"
            @click="btnVoltar"
            outlined
            color="white">
            <v-icon
                start
                icon="mdi-arrow-left"
            ></v-icon>
            {{ nome }}
        </v-btn>
        <v-btn v-else-if="icone"
            outlined
            color="blue">
            <v-icon
                start
                :icon="icone"
            ></v-icon>
            {{ nome }}
        </v-btn>
        <v-btn v-else-if="nome === 'Próximo' || nome === 'Prosseguir'"
            outlined
            color="blue">
            {{ nome }}
            <v-icon
                end
                icon="mdi-arrow-right"
            ></v-icon>
        </v-btn>
        <v-btn v-else
            outlined
            color="blue">
            {{ nome }}
            <v-icon
                end
                icon="mdi-checkbox-marked-circle"
            ></v-icon>
        </v-btn>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            required: true
        },
        voltar: {
            type: String,
        },
        icone: {
            type: String,
        }
    },
    methods: {
        btnVoltar() {
            this.$router.go(-1)
        }
    }
}
</script>