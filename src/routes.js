import { authGuard } from './features/auth/utils/isAuthenticated';

import Login from './features/auth/components/Login.vue'
import ProjectsList from './features/projects/components/ProjectsList.vue'
import AdminDashboard from './features/admin/components/AdminDashboard.vue'

const routes = [
    { path: '/', component: ProjectsList, name: 'ProjectsList' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/admin', component: AdminDashboard, name: 'AdminDashboard', beforeEnter: authGuard },
]

export default routes;