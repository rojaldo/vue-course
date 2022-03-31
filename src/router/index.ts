import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import BeersComponent from '../components/beers/BeersComponent.vue'
import BeersContainer from '../components/beers/BeersContainer.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    { path: '/', redirect: '/beers' },
    {
        path: '/beers',
        name: 'beers',
        component: BeersContainer
    },
    {
        path: '/calculator',
        name: 'calculator',
        component: () => import(/* webpackChunkName: "about" */ '../components/calculator/CalculatorContainer.vue'),

    },
    {
        path: '/heroes',
        name: 'heroes',
        component: () => import(/* webpackChunkName: "about" */ '../components/heroes/HeroesComponent.vue')
    },
    {
        path: '/apod',
        name: 'apod',
        component: () => import(/* webpackChunkName: "about" */ '../components/apod/ApodContainer.vue')
    },
    {
        path: "/error",
        name: "error",
        component: () => import(/* webpackChunkName: "about" */ '../components/error/ErrorComponent.vue')
    },
    {
        path: "/:pathMatch(.*)*", 
        name: "not-found",
        component: () => import(/* webpackChunkName: "NotPageFound" */ "../components/error/ErrorComponent.vue")
    }
]

const router = new VueRouter({
    routes
})

export default router
