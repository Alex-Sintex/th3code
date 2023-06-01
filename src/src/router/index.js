import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UserRegisterView from '../views/UserRegisterView.vue'
import CreateVacanciesView3 from '../views/CreateVacanciesView3.vue'
import CreateVacanciesView1 from '../views/CreateVacanciesView1.vue'
import CreateVacanciesView2 from '../views/CreateVacanciesView2.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/user-register',
    name: 'UserRegisterView',
    component: UserRegisterView
  },
  {
    path: '/create-vacancies3',
    name: 'CreateVacancies3',
    component: CreateVacanciesView3
  },
  {
    path: '/create-vacancies1',
    name: 'CreateVacancies1',
    component: CreateVacanciesView1
  },
  {
    path: '/create-vacancies2',
    name: 'CreateVacancies2',
    component: CreateVacanciesView2
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
