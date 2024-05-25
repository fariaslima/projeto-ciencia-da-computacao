<template>
    <div class="fill-height pt-15 largura">
        <h1 class="mb-5">Outros documentos que julgar necessários</h1>
        <v-file-input
            v-model="files"
            placeholder="Outros documentos"
            label="Outros documentos"
            multiple
            density="compact"
        >
            <template v-slot:selection="{ fileNames }">
                <template v-for="fileName in fileNames" :key="fileName">
                    <v-chip
                    color="blue"
                    class="me-2"
                    >
                    {{ fileName }}
                    </v-chip>
                </template>
            </template>
        </v-file-input>
        <div class="mt-6">
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
</template>

<script>
export default {
    data() {
        return {
            files: [],
            documentos: []
        }
    },
    computed: {},
    methods: {
        salvarInfo() {
            this.files.forEach(element => {
                this.documentos.push(element.name)
            });

            console.log(this.documentos)

            this.$store.dispatch('inserirInfo',{"documentosNaoObrigatorios": this.documentos})
            this.$router.push('/documentosjuntados')
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
        max-width: 600px;
    }
</style>