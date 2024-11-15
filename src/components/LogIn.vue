<template>
       <AppHeader />
    <div class="container login-container">
    <div class="login-content">
        <!-- Formulaire de connexion -->
        <div class="login-form">
            <img src="../assets/img/electrician-logo.png" alt="Logo" class="mb-2 logo-img"> 
            <span class="sitename">Electriciensdeconfiance</span>
            <h2>Bienvenue !</h2>
            <p>Vous n'avez pas de compte?<router-link to="/signup" class="text-decoration-none">Inscrivez-vous</router-link></p>
            
            <form @submit.prevent="login">
                <div class="row">
                    <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" v-model="email" class="form-control" placeholder="exemple@gmail.com" required>
                    </div>
                    <div class="col-md-6">
                        <label for="password" class="form-label">Mot de passe</label>
                        <input type="password" v-model="password" class="form-control" placeholder="••••••••" required>
                    </div>
                    <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
                </div>

                <div class="separator">
                    <hr class="line">
                    <p class="text-center my-3">ou</p>
                    <hr class="line">
                </div>

                <a href="#" class="google-login">
                    <img src="../assets/img/google.png" alt="google icon">
                    Se connecter avec Google
                </a>

                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="remember-me">
                    <label class="form-check-label" for="remember-me">Se souvenir de moi</label>
                    <a href="#" class="forgot-password float-end">Mot de passe oublié ?</a>
                </div>

                <button type="submit" class="btn btn-primary btn-auth w-100">Connexion</button>
            </form>
        </div>

        <!-- Image d'illustration -->
        <div class="d-none d-md-block">
            <img src="../assets/img/OFFICE.psd.png" alt="Illustration" class="illustration">
        </div>
    </div>
</div>

    </template>
   <script>
   import axios from "axios";
   import AppHeader from "../components/AppHeader.vue";
   
   export default {
     components: {
       AppHeader,
     },
     data() {
       return {
         email: "",
         password: "",
         errorMessage: "",
       };
     },
     methods: {
       async login() {
         try {
           // Envoyer les données de connexion à l'API Laravel
           const response = await axios.post("http://localhost:8000/api/login", {
             email: this.email,
             password: this.password,
           }
           , {
              withCredentials: true // Ensure cookies and credentials are sent
                   });
   
           // Traitement de la réponse si la connexion est réussie
           if (response.data.token) {
             // Stockage du token et configuration de l’en-tête Authorization
             localStorage.setItem("token", response.data.token);
             axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
             
             // Rediriger vers le tableau de bord
             this.$router.push("/dashboard");
           }
         } catch (error) {
           // Gérer les erreurs de connexion
           if (error.response && error.response.status === 401) {
             this.errorMessage = "Identifiants incorrects. Veuillez réessayer.";
           } else {
             this.errorMessage = "Erreur de connexion. Veuillez vérifier votre connexion réseau.";
           }
         }
       },
     },
    
     name: "LogIn",
   };
   </script>
   
    
    <style scoped>
 
 .login-container {
    font-family: 'Inter', sans-serif;
    margin: 0 auto;
    padding: 3rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

 .login-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    gap: 2rem;
}

 .login-form {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 100%;
    max-width: 600px;
    border-top: 1px solid #e9e9e9;
}

 .login-form .logo-img {
    width: 28px;
    height: auto;
}

 .login-form .sitename {
    font-size: 18px;
    font-weight: 600;
    color: #111928;
}

 .login-form h2 {
    color: #111928;
    margin: 16px 0;
    font-size: 24px;
    font-weight: 700;
}

.login-form p {
    margin-bottom: 1rem;
    color: #6B7280;
    font-size: 14px;
    font-weight: 500;
}

.form-control {
    margin-bottom: 1rem;
    background-color: #F9FAFB;
}

.form-control::placeholder {
    color: #6B7280;
    font-size: 14px;
    font-weight: 400;
}

.form-label {
    font-size: 14px;
    font-weight: 500;
    color: #111928;
}

.google-login {
    font-size: 14px;
    font-weight: 500;
    color: #111928;
    border: 1px solid #ddd;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-bottom: 1rem;
    text-decoration: none;
}

 .google-login img {
    width: 20px;
    margin-right: 8px;
}

.illustration {
            width: 100%;
            max-width: 500px;
            height: auto;
            border-radius: 8px;
        }

 .btn-auth {
    background-color: #233876;
    font-size: 14px;
    font-weight: 500;
    border: none;
    padding: 9px;
}

.separator {
    display: flex;
    align-items: center;
    text-align: center;
}

.separator .line {
    flex: 1;
    height: 1px;
    background-color: #ccc;
    border: none;
    margin: 0 10px;
}

.separator p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
}

.terms {
    font-size: 12px;
    color: #6B7280;
}

.terms a {
    color: #233876;
    text-decoration: none;
}


.login-form a {
    text-decoration: none;
}

.form-check-label, .forgot-password {
    font-size: 14px;
    font-weight: 500;
    color: #6c757d;
}
    </style>
    