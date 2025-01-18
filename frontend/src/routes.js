const routes = [
    {
        path: '/', component: () => import('./components/HomePage.vue'),
    },
    {
        path: '/profile', component: () => import('../src/components/profile-components/MainProfilePage.vue'),
    }
]

export default routes;