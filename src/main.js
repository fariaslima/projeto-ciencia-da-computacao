import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import 'vuetify/styles'
import { createVuetify  } from 'vuetify/lib/framework.mjs'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Componentes globais
import Botao from '@/components/layout/Botao.vue'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})

const app = createApp(App)

app.config.globalProperties.$filters = {
    filtroMoeda(valor) {
        let formatar = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return formatar.format(valor);
    },
    dataExt(data){
        let dia = data.getDate()
        let mes = [
          'janeiro', 'fevereiro', 'março', 'abril',
          'maio', 'junho', 'julho', 'agosto', 'setembro', 
          'outubro', 'novembro', 'dezembro'
        ][data.getMonth()]
        let ano = data.getFullYear()
        
        return `${dia} de ${mes} de ${ano}`
    }
}

app.component('Botao', Botao)
app.use(vuetify)
app.use(router)
app.use(store)

//createApp(App).use(vuetify).mount('#app')
app.mount('#app')