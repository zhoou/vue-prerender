import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const vHome = r => require.ensure([], () => r(require('@/components/Home')), 'vHome')
const vHello = r => require.ensure([], () => r(require('@/components/Hello')), 'vHello')
const vMe = r => require.ensure([], () => r(require('@/components/MyPlatform')), 'vMe')

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    name: 'Home',
    component: vHome
}, {
    path: '/hello',
    name: 'Hello',
    component: vHello
}, {
    path: '/me',
    name: 'me',
    component: vMe
}, ]

export default new Router({
    history: true,
    routes
})