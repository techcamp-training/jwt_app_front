import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'
import Top from '../components/Top.vue'
import SignUp from '../components/Signup.vue'
import SignIn from '../components/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/top',
    name: 'Top',
    component: Top,
    meta: { requiresAuth: true }, // このルートは認証が必要であるという明記。
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


// ナビゲーションガードを設定
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next('/'); // signinページにリダイレクト
  } else {
    next(); // 認証が不要な場合、または既に認証されている場合は指定されたパスに進む
  }
});


export default router
