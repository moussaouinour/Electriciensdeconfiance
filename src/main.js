import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assure-toi que le fichier router est bien importé



const app = createApp(App);
app.use(router); // Utilisation du router avec l'app Vue
app.mount('#app'); // Monté l'app sur l'élément #app
