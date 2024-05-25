<template>
    <div class="fill-height pt-15 largura">
        <h1 class="mb-5">Confirme os documentos juntados</h1>

        <v-card width="500">
            <v-card-text>
                <div class="font-weight-bold ms-1 mb-2">
                    Enviados
                </div>

                <v-timeline density="compact" align="start">
                    <v-timeline-item
                        v-for="doc in documentosOb"
                        :key="doc.time"
                        dot-color="green"
                        size="x-small"
                    >
                        <div class="mb-1">
                            <div class="font-weight-normal">
                                <v-btn>{{ doc }}<v-icon end icon="mdi-magnify-plus-outline"></v-icon></v-btn>
                            </div>
                            <div></div>
                        </div>
                    </v-timeline-item>
                    <v-timeline-item
                        v-for="(doc, index) in documentoNo"
                        :key="doc.time"
                        dot-color="green"
                        size="x-small"
                    >
                        <div class="mb-1">
                            <div class="font-weight-normal">
                                <v-btn>Documento {{ index + 1 }}<v-icon end icon="mdi-magnify-plus-outline"></v-icon></v-btn>
                            </div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </v-card>

        <div class="mt-6">
            <v-row class="text-center"> 
                <v-col col="12" > 
                        <v-sheet class="d-flex mb-6">
                        <v-sheet class="me-auto">
                            <botao nome="Voltar" voltar="0"/>
                        </v-sheet>
                        <v-sheet>
                            <botao to="/confirmacao" nome="Está tudo certo"/>
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
            documentos: this.$store.state.dados.documentosObrigatorios,
            documentoNo: this.$store.state.dados.documentosNaoObrigatorios,
            documentosOb: {
                "registro": "Identidade (frente e verso)",
                "cpf": "CPF",
                "comprovante": "Comprovante de residência",
                "decisaoNegada": "Decisão do INSS que negou o benefício",
                "laudoMedico": "Laudo médico que conste a incapacidade",
            }
        }
    }
}
</script>

<style>
    .largura {
        max-width: 800px;
    }
</style>