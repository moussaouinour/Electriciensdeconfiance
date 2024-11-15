import axios from 'axios';
axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: 'http://localhost:8000', // URL de votre backend Laravel
    withCredentials: true,
});

axios.get('/api/user') // Exemple de requête authentifiée
  .then(response => {
    console.log(response.data);
  });

// Ajoutez un token dans les headers si l’utilisateur est connecté
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
