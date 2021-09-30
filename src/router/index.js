import Vue from 'vue'
import VueRouter from 'vue-router'

const isAuthenticated = true

Vue.use(VueRouter)

function load(component) {
    // '@' is aliased to src/components
    return () => import(`@/views/${component}.vue`)
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: load('Home')
    },
    {
        path: '/about',
        name: 'About',
        component: load('About')
    },
    {
        path: '/login',
        name: 'Login',
        component: load('Login')
    },
    {
        path: '/customer',
        name: 'Customer',
        component: load('customers/Customer')
    },
    {
        path: '/customer/type',
        name: 'Customer Type',
        component: load('customers/Type')
    },
    {
        path: '/branches',
        name: 'Branches',
        component: load('branch/Branches')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


/* Navigation Guards */
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next()
})

export default router
