import { createRouter, createWebHistory } from 'vue-router'
import Panel from '@/views/admin/layouts/Panel'
import Login from '@/views/admin/pages/Login'
import Dashboard from '@/views/admin/pages/Dashboard'
import Analysis from  '@/views/admin/pages/Analysis'
import Form from  '@/views/admin/pages/Form'
import Notfound from  '@/views/admin/pages/Notfound'
import Home from '@/views/front/Home'

const routes = [
  {
    path:'/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'Panel',
    component: Panel,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: 'analysis',
        name: 'Analysis',
        component: Analysis,
        meta: { requiresAuth: true }
   
      },
      {
        path: 'form',
        name: 'Form',
        component: Form,
        meta: { requiresAuth: true }
   
      },
      // Diğer alt sayfaları buraya ekleyin
    ]
  },
  {
    path: '/:catchAll(.*)', // catch all rotası için path
    name: 'Notfound',
    component: Notfound, // 404 sayfasının bileşeni
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((r) => r.meta.requiresAuth);// oturum açmıi kullanıcıların erişebileceği sayfalar için
  const requiresGuest = to.matched.some((x) => x.meta.requiresGuest); // oturum açmamaış kullanıcıların erişebileceği sayfalar için

  const isLoggedIn = true;

  // Eğer kullanıcı giriş yapmamışsa ve gidilecek sayfalar için oturum açması gerekiyorsa
  if (!isLoggedIn && requiresAuth) {
    next('/admin/login')
  } else {
    next()
  }
})

export default router
