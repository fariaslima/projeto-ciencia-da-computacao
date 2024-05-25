<template>
    <div class="fill-height pt-15 largura">
        <div>
            <h1>Atermação de Petição Inicial</h1>
            <p class="pt-6 pb-6">Você precisa juntar os documentos que serão solicitados, pois sem eles não temos como dar prosseguimento a sua demanda.
O primeiro passo é clicar no tipo de processo para o qual você necessita de atendimento.
Depois é só seguir as orientações.</p><p>É simples e muito fácil.</p><br>
                <div>
                <v-combobox
                    label="Escolhe um Orgãos"
                    :items="['Seção Judiciária do Rio de Janeiro','Seção Judiciária do Espírito Santo','Tribunal Federal da 2ª Região']"
                    v-model="orgao"
                    type="text"
                    :rules="items"
                    name="orgao"
                    density="compact"
                ></v-combobox>

                    <h1>Qual tipo de processo deseja iniciar?</h1>
                    <div class="d-block pa-2">
                        <botao
                            nome="Auxílio Emergencial Covid-19"
                            block
                            color="green"
                            @click="salvarInfo"
                            :disabled="orgao === ''"
                        />
                    </div>
                    <div class="d-block pa-2">
                        <botao
                            nome="INSS- Loas Deficiente"
                            block
                            color="green"
                            @click="salvarInfo"
                            :disabled="orgao === ''"
                        />
                    </div>
                    <div class="d-block pa-2">
                        <botao
                            nome="INSS- Loas Idoso"
                            block
                            color="green"
                            @click="salvarInfo"
                            :disabled="orgao === ''"
                        />
                    </div>
                    <div class="d-block pa-2">
                        <botao
                            nome="INSS - Auxílio Doença"
                            block
                            color="green"
                            @click="salvarInfo"
                            :disabled="orgao === ''"
                        />
                    </div>
                    <div class="d-block pa-2">
                        <botao
                            nome="Outro tipo"
                            block
                            color="green"
                            @click="salvarInfo"
                            :disabled="orgao === ''"
                        />
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tipoProcesso: '',
            orgao:'',
            items: [
              v => !!v || 'Campo com preenchimento obrigatório',
            ],
        }
    },
    methods: {
        salvarInfo(e) {
            this.$store.dispatch('inserirInfo',
            {"tipoProcesso": e.target.innerText,
            "orgao": this.orgao,
            })
            this.$router.push('/dadospessoaisat')

        }
    }
}
</script>