<template>
    <div class="fill-height pt-15 largura">
        <h1 class="mb-5"> que precisam ser juntados ao pedido</h1>
        <v-file-input
            @click:clear="removerCampo('registro')"
            @change="monitorarArquivo"
            v-model="registro"
            :rules="rules"
            label="Identidade (frente e verso)"
            accept="image/*,.pdf"
            name="registro"
            density="compact"
        ></v-file-input>
        <v-file-input
            @click:clear="removerCampo('cpf')"
            @change="monitorarArquivo"
            v-model="cpf"
            :rules="rules"
            label="CPF"
            accept="image/*,.pdf"
            name="cpf"
            density="compact"
        ></v-file-input>
        <v-file-input
            @click:clear="removerCampo('comprovante')"
            @change="monitorarArquivo"
            v-model="comprovante"
            :rules="rules"
            label="Comprovante de residência atual no nome do autor"
            accept="image/*,.pdf"
            name="comprovante"
            density="compact"
        ></v-file-input>
        <v-file-input
            @click:clear="removerCampo('decisaoNegada')"
            @change="monitorarArquivo"
            v-model="decisaoNegada"
            :rules="rules"
            label="Decisão do INSS que negou o benefício"
            accept="image/*,.pdf"
            name="decisaoNegada"
            density="compact"
        ></v-file-input>
        <v-file-input
            @click:clear="removerCampo('laudoMedico')"
            @change="monitorarArquivo"
            v-model="laudoMedico"
            :rules="rules"
            label="Laudo médico que conste a incapacidade para o trabalho"
            accept="image/*,.pdf"
            name="laudoMedico"
            density="compact"
        ></v-file-input>
        <v-alert v-if="this.quantidade !== 5"
            type="error"
            :text="verificarQuantidade"
                 density="compact"
        ></v-alert>
        <div class="mt-6">
            <v-row class="text-center"> 
                <v-col col="12" > 
                        <v-sheet class="d-flex mb-6">
                        <v-sheet class="me-auto">
                            <botao nome="Voltar" voltar="0"/>
                        </v-sheet>
                        <v-sheet>
                            <botao @click="salvarInfo" nome="Prosseguir"
                                :disabled="this.quantidade !== 5"
                            />
                        </v-sheet> 
                    </v-sheet > 
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import http from '../services/http'

export default {
    data() {
        return {
            documentos: {},
            arquivo: [],
            nomeArquivo: [],
            registro: '',
            cpf: '',
            comprovante: '',
            decisaoNegada: '',
            laudoMedico: '',
            quantidade: 0,
            rules: [
                value => !!value || !!value.length || 'Campo Obrigatório',
            ],
        }
    },
    computed: {
        verificarQuantidade() {
            const qtd = this.quantidade > 0 ? 5 - this.quantidade : 5
            return qtd > 1 ? `Faltam ${qtd} documentos para prosseguir` : `Falta ${qtd} documento para prosseguir`
        }
    },
    methods: {
      removerCampo(nomeCampo) {
        delete this.documentos[nomeCampo]
        this.quantidade = Object.keys(this.documentos).length
      },
      salvarInfo() {
        // let form = ''
        // form = new FormData()
        // form.append('imagem',this.arquivo)
        // form.append('nome',this.nomeArquivo)
        // console.log(form)

        // http.post('/upload', form, {headers:{
        //     'Content-Type': 'multipart/form-data'
        // }}).then((response )=> {
        //     console.log(response)
        // });

        this.$store.dispatch('inserirInfo',{"documentosObrigatorios": this.documentos})
        this.$router.push('/documentosopcionais')
      },
      monitorarArquivo(event) {
        const campo = event.target.name

        this.arquivo.push(event.target.files);
        this.nomeArquivo.push(campo);
        console.log(this.arquivo)

        if(!event.target.files.length) {
          delete this.documentos[campo]
        }else{
          this.documentos[campo] = event.target.files[0].name
        }

        this.quantidade = Object.keys(this.documentos).length
      }
    }

}
</script>

<style>
    .largura {
        max-width: 800px;
    }
</style>