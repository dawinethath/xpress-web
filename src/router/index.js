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
