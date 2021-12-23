
import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import Login from './features/auth/components/Login.vue'
import ProjectsList from './features/projects/components/ProjectsList.vue'
import AdminDashboard from './features/admin/components/AdminDashboard.vue'

const routes = [
  { path: '/', component: ProjectsList },
  { path: '/login', component: Login },
  { path: '/admin', component: AdminDashboard },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
