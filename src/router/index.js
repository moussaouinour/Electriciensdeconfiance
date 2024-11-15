import { createRouter, createWebHistory } from 'vue-router';

// Import des composants
import HomePage from '../components/HomePage.vue';
import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue';
import DashboardPage from '@/components/dashboardComponent/DashboardPage.vue';
import UserUnboarding  from '@/components/UserUnboarding.vue';


const routes = [
  {
    path: '/', // Route racine
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/login', // Page de connexion
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/signup', // Page d'inscription
    name: 'SignUp',
    component: SignUp,
    //beforeEnter: (to, from, next) => {
     // const token = localStorage.getItem('token');
     // if (token) {
        // Si l'utilisateur est connecté, redirigez-le vers le tableau de bord
      //  next({ name: 'Dashboard' });
     // } else {
        // Si l'utilisateur n'est pas connecté, permettez l'accès à la page d'inscription
     //   next();
   //   }
   // }
  },
  {
    path: '/dashboard', // Page d'inscription
    name: 'DashboardPage',
    component: DashboardPage,
  },
  {
    path: '/userunboarding', // Page d'inscription
    name: 'UserUnboarding',
    component: UserUnboarding,
  },
  
];

// Création de l'instance VueRouter
const router = createRouter({
  history: createWebHistory(), // Utilisation du mode 'history' pour des URLs propres
  routes, // Les routes définies
});

export default router;
