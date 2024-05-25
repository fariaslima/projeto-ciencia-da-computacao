<template>
    <div class="fill-height largura" >
    <div v-if="proximo === 0">
            <h1 class="mb-10 pt-15">Você confirma o interesse:</h1>
            <div class="d-block">
                <div class="mb-5">
                    <v-switch
                        v-model="cienteAcoes"
                        color="blue"
                        label="Estou ciente de que ações ajuizadas nos Juizados Federais têm limite de 60 salários mínimos"
                        value="true"
                        true-value="sim"
                        hide-details
                    ></v-switch>
                </div>
                <div class="mb-5">
                    <v-switch
                        v-model="renuncioValor"
                        color="blue"
                        label="Renuncio a qualquer valor acima deste limite de 60 salários mínimos"
                        value=true
                        true-value="sim"
                        hide-details
                    ></v-switch>
                </div>
                <div class="mb-5">
                    <v-switch
                        v-model="receberEmail"
                        color="blue"
                        label="Aceito receber intimações relativas à presente ação por meio do aplicativo WhatsApp ou pelo endereço de e-mail, informados acima"
                        value=true
                        hide-details
                    ></v-switch>
                </div>
                <botao
                    class="mt-10"
                    nome="Salvar"
                    block
                    color="green"
                    @click="salvarInfo"
                    :disabled="!cienteAcoes || !renuncioValor"
                />
            </div>
    </div>
    <div v-else-if="proximo === 1" class="text-center">
      <div class="botoes">
            <v-row class="text-center">
              <v-col col="12" >
                <v-sheet class="d-flex mb-6">
                  <v-sheet class="me-auto align-content-start" >
                    <v-btn
                    color="blue"  
                    to="/">
                    <v-icon
                    icon="mdi-arrow-left-bold"
                    ></v-icon>
                    </v-btn>
                  </v-sheet>
                  <v-sheet class="align-content-end">
                    <v-btn
                    color="blue" 
                    @click="imprimir" 
                    to="#">
                    <v-icon
                    icon="mdi-printer"
                    ></v-icon>
                    </v-btn>
                  </v-sheet>
                </v-sheet >
              </v-col>
            </v-row>
          </div>
    <div class="folha a4_vertical  notranslate"   translate="no" >
      <article class="text-center">
          <v-img 
          :width="200"
          :height="100"
          class="mx-auto pb-5"
          aspect-ratio="5/3"
          cover
          src="/public/logo-jf.png"
        >
      </v-img>
          <h2 class="text-uppercase text-grey font-weight-regular" >{{ dados.orgao }}</h2>      
      </article><br>
        <h4 class="text-uppercase ">Esta é a sua petição inicial</h4>
        <p >Leia e verifique se ela contém as informações corretas</p>
        <div>
          <v-sheet class="pa-6 text-left" max-width="800" elevation="0">
            <p class="text-h6 pb-6">{{ dados.dadosEndereco.ufExt }}</p>
            <p class="pb-6">{{ dados.dadosPessoaisAt.nome }}, {{ dados.dadosPessoaisAt.pais }}, {{ dados.dadosPessoaisAt.estadocivil }}, {{ dados.dadosPessoaisAt.profissao }},
              inscrito no CPF sob o nº {{ dados.dadosPessoaisAt.cpf }} e no RG nº {{ dados.dadosPessoaisAt.rg }}, residente e domiciliado na
              {{ dados.dadosEndereco.logradouro }}, {{ dados.dadosEndereco.complemento }}, {{ dados.dadosEndereco.bairro }}, {{ dados.dadosEndereco.ufExt }} - {{ dados.dadosEndereco.uf }}
              vem, respeitosamente, à presença de Vossa Excelência, sem a assistência de advogado, com fundamento nos artigos XXX, requerer a concessão do</p>
              <p class="pb-5">{{ dados.tipoProcesso }}</p>
              <p class="pb-5">em face do INSTITUTO NACIONAL DO SEGURO SOCIAL (INSS), autarquia federal, pelos seguintes fatos e fundamentos:</p>
              <article>
                <ol type="I">
                  <li class="font-weight-bold pb-5">DOS FATOS</li>
                  <ol>
                    <li>O Autor é segurado da Previdência Social.</li>
                    <li>{{ dados.relatoPeticao  }}</li>
                  </ol>
                  <li class="font-weight-bold pb-5 pt-5">DO DIREITO</li>
                  <ol>
                    <li>O direito ao benefício de auxílio-doença encontra-se amparado pela legislação previdenciária, notadamente pela Lei nº 8.213/91, que estabelece em seu artigo 59 o seguinte:
"Art. 59. O auxílio-doença será devido ao segurado que, havendo cumprido, quando for o caso, o período de carência exigido nesta Lei, ficar incapacitado para o seu trabalho ou para a sua atividade habitual por mais de 15 (quinze) dias consecutivos."</li>
                  </ol>
                  <li>
                    <p class="font-weight-bold pb-5 pt-5">DOS PEDIDOS</p>
                    <p class="pb-5">Diante do exposto, requer-se a Vossa Excelência:</p>
                  </li>
                  <ol>
                    <li>A concessão do benefício de auxílio-doença em favor do Autor, a partir da data de início da incapacidade, nos termos da legislação previdenciária.</li>
                    <li>A citação do INSTITUTO NACIONAL DO SEGURO SOCIAL (INSS), na pessoa de seu representante legal, para que, querendo, conteste a presente ação.</li>
                    <li>A produção de todas as provas em direito admitidas, em especial a realização de perícia médica para comprovação da incapacidade do Autor.
                </li>
                  </ol>
                </ol>
                <p class="pt-5">Dá-se à causa o valor de R$ {{ $filters.filtroMoeda(dados.valorIndenizacao) }}.</p>
                <p class="pb-5 pt-3">Nestes termos, pede deferimento.</p>
                <p class="font-weight-bolda pt-3">{{ dados.dadosEndereco.ufExt }}, {{ $filters.dataExt(hoje) }} </p>
              </article>
          </v-sheet> 
          <!---Botões-->
          <div class="botoes">
            <v-row class="text-center">
              <v-col col="12" >
                <v-sheet class="d-flex mb-6">
                  <v-sheet class="me-auto align-content-start" >
                    <v-btn
                    color="blue"  
                    to="/">
                    <v-icon
                    icon="mdi-arrow-left-bold"
                    ></v-icon>
                    </v-btn>
                  </v-sheet>
                  <v-sheet class="align-content-end">
                    <v-btn
                    color="blue" 
                    @click="imprimir" 
                    to="#">
                    <v-icon
                    icon="mdi-printer"
                    ></v-icon>
                    </v-btn>
                  </v-sheet>
                </v-sheet >
              </v-col>
            </v-row>
          </div>      
        </div>
    </div>
  </div>
  <div v-else class="text-center">
    <h1 class="mb-10">Atendimento finalizado</h1>
    <div>
      <v-row class="text-center"> 
        <v-col col="12"> 
            <v-sheet>
                <botao @click="proximo = 0" nome="Voltar" color="white" />
                <botao  nome="Retornar ao inicio" to="/"/>
            </v-sheet>
        </v-col> 
      </v-row>       
    </div>
  </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
import http from '../services/http'

export default {

    data() {
        return {
            cienteAcoes: false,
            renuncioValor: false,
            proximo: 0,
            receberEmail: false,
            cpf: '',

            hoje: new Date(),
        }
    },
    computed: {
        ...mapGetters({
            dados: 'dadosGerais'
        })
    },
       methods: {
          imprimir: function(){
          window.print()
        }
      ,
      mounted: function(){
        window.scrollTo(5, 5)
      },
      async salvarInfo() {
        //{`${this.$store.getters.dadosGerais.cpf}`:this.$store.getters.dadosGerais}
        //this.cpf = {'teste':this.$store.getters.dadosGerais}
        this.$store.dispatch('inserirInfo',{
          "cienteAcoes": this.cienteAcoes,
          "renuncioValor": this.renuncioValor,
          "receberEmail": this.receberEmail
        })
        this.proximo = 1

        const data = await http.post('/usuarios', this.$store.getters.dadosGerais);
        console.log(data.data.res)
        //axios.put(`https://stock-trader-352af-default-rtdb.firebaseio.com/data.json`, {cpf: this.$store.getters.dadosGerais} )

      }
    }
}
</script>

<style>
  
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.folha {
  background-color: #ffff; 
  font-size: 11pt; 
  padding: 0.5em; 
  text-align: center;
}
.a4_vertical { 
  width: 793px; 
  height: 1140px; 
}
.a4_horizontal {
   width: 1122px; 
   height: 793px; 
}

@media print{
  .botoes, .v-toolbar, .v-footer{
    visibility: hidden;
    height: 0px;
  }
}
</style>
