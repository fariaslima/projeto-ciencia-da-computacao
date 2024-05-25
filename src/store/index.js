import { createStore } from 'vuex'

export default createStore({
    state: {
        info: [],
        dados: {},
    },
    mutations: {
        inserirInfo(state, info) {
            //console.log(Object.keys(info).length)
            for(let i in info) {
                state.dados[i] = info[i];
            }
            console.log(state.dados)
        },
    },
    actions: {
        inserirInfo({ commit }, order) {
            commit('inserirInfo', order)
        }
    },
    getters: {
        valorIndenizacao(state) {
            return state.dados.valorIndenizacao.valorIndenizacao
        },
        dadosGerais(state) {
            return state.dados
        }
    },
    modules: {}
})