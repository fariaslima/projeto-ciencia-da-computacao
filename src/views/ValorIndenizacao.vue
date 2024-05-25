<template>
    <div class="fill-height pt-8 largura">
        <h1>Qual o valor de indenização pretendido?</h1><br>
        <v-text-field
          label="Qual o valor de indenização pretendido?:"
          placeholder="R$ 00,00"
          v-model="valorIndenizacao"
          required
        ></v-text-field>
        <div>
            <v-textarea  
               placeholder="Descreva como esse valor for obtido..."
               v-model="descrevaValor" 
               >
            </v-textarea>
          </div>   
          <v-row class="text-center"> 
                <v-col col="12" > 
                     <v-sheet class="d-flex mb-6">
                        <v-sheet class="me-auto">
                            <botao nome="Voltar" voltar="0"/>
                        </v-sheet>
                       <v-sheet>
                         <botao @click="salvarInfo" nome="Prosseguir"/> 
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
                valorIndenizacao: '',
                descrevaValor: ''
            }
        },
        methods: {
            salvarInfo() {
                this.$store.dispatch('inserirInfo',{"valorIndenizacao": this.valorIndenizacao, "descrevaValor": this.descrevaValor})
                this.$router.push('/documentos')
            }
        }
    
    }
    </script>
    