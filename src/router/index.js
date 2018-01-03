import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Main = () => import('@/components/main')
const FormDesign = () => import('@/components/formDesign')
const TableDesign = () => import('@/components/tableDesign')
const Index = () => import('@/components/index')
const Test = () => import('@/components/test')

export default new Router({
    routes: [{
        path: '/',
        name: 'dashboard',
        component: Index
    }, {
        path: '/form-design',
        name: 'formDesign',
        component: FormDesign
    }, {
        path: '/table-design',
        name: 'tableDesign',
        component: TableDesign
    }, {
        path: '/main',
        name: 'main',
        component: Main
    }, {
        path: '/test',
        name: 'test',
        component: Test
    }]
})
