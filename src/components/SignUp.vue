<template>
     <AppHeader />
     <div class="container signup-container">
    <div class="signup-content">
        <!-- Signup Form -->
        <div class="signup-form">
            <img src="../assets/img/electrician-logo.png" alt="Logo" class="mb-2 logo-img">
            <span class="sitename">Electriciensdeconfiance</span>
            <h2>Créez votre compte gratuitement.</h2>
            <p>Créez votre compte en quelques secondes. Already have an account? <router-link to="/login" class="text-decoration-none">Login here</router-link></p>

            <form  @submit.prevent="submitSignup">
                <div class="row">
                    <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" v-model="email" class="form-control" placeholder="exemple@gmail.com" required>
                    </div>
                    <div class="col-md-6">
                        <label for="name" class="form-label">Nom & Prénom</label>
                        <input type="text" v-model="name" class="form-control" placeholder="e.g. Bonnie guedioura" required>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label for="phone" class="form-label">Numéro téléphone</label>
                        <input type="text" v-model="phone" class="form-control" placeholder="+0655888999" required >
                    </div>
                    <div class="col-md-6">
                        <label for="password" class="form-label">Mot de passe</label>
                        <input type="password" v-model="password" class="form-control" placeholder="••••••••" required aria-required="true" aria-describedby="passwordHelp">
                    </div>
                </div>

                <div class="separator">
                    <hr class="line">
                    <p class="text-center my-3">or</p>
                    <hr class="line">
                </div>

                <a href="#" class="google-signup">
                    <img src="../assets/img/google.png" alt="Google icon">
                    S’inscrire avec Google
                </a>

                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="terms" required aria-required="true">
                    <label class="form-check-label terms" for="terms">
                     <p>   En créant un compte, vous acceptez nos <a href="#">Conditions Générales d'Utilisation</a> ainsi que notre <a href="#">Politique de Confidentialité</a>.</p>
                    </label>
                

                </div>


                <button type="submit" class="btn btn-primary btn-signup w-100">Inscription</button>
            </form>
            <p v-if="successMessage" class="alert alert-success mt-3">{{ successMessage }}</p>
        </div>

        <!-- Illustration Image (will appear to the right on larger screens and below on mobile) -->
        <div class="d-none d-md-block">
            <img src="../assets/img/Illustration1.png" alt="Illustration" class="illustration">
        </div>
    </div>
</div>
    </template>
    
    <script>
    import axios from 'axios';
    import AppHeader from "../components/AppHeader.vue";
    
    export default {
        components: {
            AppHeader
        },
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                password: '',
                successMessage: '',
                errors: []  // Stocke les erreurs de validation
            };
        },
        methods: {
            async submitSignup() {
                try {
                     await axios.post('http://localhost:8000/api/register', {
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        password: this.password,
                        
                    });
    
                    // Inscription réussie
                    this.successMessage = "Inscription réussie ! Redirection vers la page de connexion...";
                    this.errors = [];  // Efface les erreurs affichées précédemment
    
                    // Redirection vers la page de connexion
                    setTimeout(() => {
                        this.$router.push('/userunboarding');
                    }, 2000);
    
                } catch (error) {
                    if (error.response && error.response.data.errors) {
                        // Capture des erreurs de validation
                        this.errors = Object.values(error.response.data.errors).flat();
                    } else {
                        this.errors = ["Une erreur s'est produite. Veuillez réessayer."];
                    }
                }
            }
        }
    };
    </script>




    <style scoped>
    
    .signup-container {
            margin: 0 auto;
            padding: 3rem 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .signup-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 1200px;
            gap: 2rem;
        }

        .signup-form {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            width: 100%;
            max-width: 600px;
            border-top: 1px solid #e9e9e9;
        }

        .signup-form .logo-img {
            width: 28px;
            height: auto;
        }

        .signup-form .sitename {
            font-size: 18px;
            font-weight: 600;
            color: #111928;
        }

        .signup-form h2 {
            color: #111928;
            margin: 16px 0;
            font-size: 24px;
            font-weight: 700;
        }

        .signup-form p {
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

        .google-signup {
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

        .google-signup img {
            width: 20px;
            margin-right: 8px;
        }

        .illustration {
            width: 100%;
            max-width: 500px;
            height: auto;
            border-radius: 8px;
        }

        .btn-signup {
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

        .terms .form-check-label {
            font-size: 12px;
            font-weight: 400;
        }
    </style>
    