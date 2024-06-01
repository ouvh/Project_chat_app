import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import Chat from '../views/Chat.vue';
import Invitations from '../views/Invitations.vue';
import AddnewCreateGroup from '../views/AddnewCreateGroup.vue';
import ResetPasswordPage from '../views/ResetPasswordPage.vue';
import Profile from '../views/Profile.vue';
import NotFoundPage from "../views/NotFoundPage.vue"
import { auth } from '../firebase/Config.js';



const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: RegisterPage },
  { path: '/chat/:chatid', component: Chat, props: true }, // Pass props to Chat component
  { path: '/invitations', component: Invitations },
  { path: '/add-user-group', component: AddnewCreateGroup },
  { path: '/reset-password', component: ResetPasswordPage },
  { path: '/profile', component: Profile },
  { path: '/:catchAll(.*)', component: NotFoundPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else {
    next();
  }


});

export default router;
