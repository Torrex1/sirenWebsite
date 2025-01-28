const routes = [
    {
        path: '/', component: () => import('./components/HomePage.vue'),
    },
    {
        path: '/profile', component: () => import('../src/components/profile-components/MainProfilePage.vue'),
    },
    {
        path: '/register', component: () => import('../src/components/header-components/authentication/Register.vue'),
    },
    {
        path: '/login', component: () => import('../src/components/header-components/authentication/Login.vue'),
    }
]
export default routes;