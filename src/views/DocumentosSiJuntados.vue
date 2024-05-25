<template>
    <div class="fill-height pt-15 largura">
        <h1 class="mb-5">Confirme os documentos juntados</h1>

        <v-card width="600">
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
                        v-for="(doc, index) in documentosNob"
                        :key="doc.time"
                        dot-color="green"
                        size="x-small"
                    >
                        <div class="mb-1" v-if="documentoNo[index]">
                            <div class="font-weight-normal">
                                <v-btn>{{ doc }}<v-icon end icon="mdi-magnify-plus-outline"></v-icon></v-btn>
                            </div>
                        </div>
                        <div class="mb-1" v-else>
                            <div class="font-weight-normal">
                                <v-btn disabled="true">{{ doc }}<v-icon end icon="mdi-minus-circle-outline"></v-icon></v-btn>
                            </div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </v-card>
        
        <div>
        <v-row class="text-center"> 
         <v-col col="12" >
           <v-sheet class="d-flex mb-6">
             <v-sheet class="me-auto">
               <botao class="ma-4" nome="Voltar" voltar="0"/>
             </v-sheet>
             <v-sheet>
               <botao class="ma-4" to="/confirmacaocef" nome="Está tudo certo"/>
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
            documentos: this.$store.state.dados.documentosObrigatorios,
            documentoNo: this.$store.state.dados.documentosNaoObrigatorios,
            documentosOb: {
                "registro": "RG",
                "cpf": "CPF",
                "comprovante": "Comprovante de Domicílio"
            },
            documentosNob: {
                "extrato": "Extrato de conta corrente",
                "reclamacao": "Comprovante de reclamação na CEF",
                "outros": "Outros"
            }
        }
    },
    computed: {},
    methods: {}

}
</script>

<style>
    .largura {
        max-width: 800px;
    }
</style>