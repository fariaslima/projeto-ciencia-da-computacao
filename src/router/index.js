import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ajuda from '../views/Ajuda.vue'
import DadosPessoaisAt from '../views/DadosPessoaisAt.vue'
import Documentos from '../views/Documentos.vue'
import DocumentosOpcionais from '../views/DocumentosOpcionais.vue'
import DocumentosJuntados from '../views/DocumentosJuntados.vue'
import DadosEndereco from '../views/DadosEndereco.vue'
import AtividadeExercida from '../views/AtividadeExercida.vue'
import SintomasIncapacitam from '../views/SintomasIncapacitam.vue'
import MedicamentoTratamento from '../views/MedicamentoTratamento.vue'
import EspecialidadeMedica from '../views/EspecialidadeMedica.vue'
import RelatoPeticao from '../views/RelatoPeticao.vue'
import MinhasDemandas from '../views/MinhasDemandas.vue'
import Confirmacao from '../views/Confirmacao.vue'
import ValorIndenizacao from '../views/ValorIndenizacao.vue'

const routes = [
    { path: '/', name: 'Home', component: Home, },
    { path: '/ajuda', name: 'Ajuda', component: Ajuda, },
    { path: '/dadospessoaisat', name: 'DadosPessoaisAt', component: DadosPessoaisAt, },
    { path: '/documentos', name: 'Documentos', component: Documentos, },
    { path: '/documentosopcionais', name: 'DocumentosOpcionais', component: DocumentosOpcionais, },
    { path: '/documentosjuntados', name: 'DocumentosJuntados', component: DocumentosJuntados, },
    { path: '/atividadeexercida', name: 'AtividadeExercida', component: AtividadeExercida, },
    { path: '/sintomas', name: 'SintomasIncapacitam', component: SintomasIncapacitam, },
    { path: '/medicamento', name: 'MedicamentoTratamento', component: MedicamentoTratamento, },
    { path: '/especialidademedica', name: 'EspecialidadeMedica', component: EspecialidadeMedica, },
    { path: '/relatopeticao', name: 'RelatoPeticao', component: RelatoPeticao, },
    { path: '/dadosendereco', name: 'DadosEndereco', component: DadosEndereco, },
    { path: '/minhasdemandas', name: 'MinhasDemandas', component: MinhasDemandas, },
    { path: '/confirmacao', name: 'Confirmacao', component: Confirmacao, },
    { path: '/valorindenizacao', name: 'ValorIndenizacao', component: ValorIndenizacao, },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router