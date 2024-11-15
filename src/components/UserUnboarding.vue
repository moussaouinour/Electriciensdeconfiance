<template>
 <div class="container-fluid unboarding-page">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-md-4 side-section pt-5">
                <div class="side-section-content mx-1">
                    <div class="mb-4">
                        <img src="../assets/img/electrician-logo.png" alt="logo-electrician" class="img-fluid" style="max-width: 10%;">
                        <a href="#" class="text-white text-decoration-none"><i class="fas fa-chevron-left"></i> Retour à la page d'accueil</a>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Votre plan actuel</h5>
                            <p class="p-essai">30 jours essai gratuit</p>
                            <ul class="list-unstyled">
                            <li><i class="fas fa-check me-2 mt-2"></i> Collecte des avis des différentes plateformes et réseaux sociaux</li>
                                <li ><i class="fas fa-check mt-2 me-2"></i> Rédaction d’articles de blog de qualité au nom de votre société</li>
                                <li><i class="fas fa-check mt-1 me-2"></i> Vérification des avis </li>
                                <li><i class="fas fa-check mt-1 me-2"></i> Elimination des avis mensengés</li>
                                <li><i class="fas fa-check mt-2 me-2"></i> Réponse aux questions de la communauté </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Main Content -->
            <div class="col-md-5  form-progress">
                <div class="steps d-flex justify-content-between my-4">
                    <span class="step active" id="step1-indicator">
                        <span class="step-number">1</span>
                        Personal Info
                    </span>
                    <span class="step" id="step2-indicator">
                        <span class="step-number">2</span>
                        Détails de l’entreprise
                    </span>
                    <span class="step" id="step3-indicator">
                        <span class="step-number">3</span>
                        Confirmation
                    </span>
                    
                </div>
                

                <!-- Unified Form -->
                <form id="onboardingForm" @submit.prevent="submitForm">
                    <!-- Step 1: Personal Info -->
                    <div id="step1" class="form-step">
                        <h2>Faisons connaissance !</h2>
                        <p>Quelle est la taille de votre entreprise ?</p>
                        <div class="options d-grid gap-2">
                            <button type="button" class="btn btn-outline-secondary option text-start" @click="selectOption($event.target)">
    <i class="fas fa-user me-2"></i> Indépendant <bold class="float-end bold"><i class="fas fa-arrow-right"></i></bold>
</button>

                            <button type="button" class="btn btn-outline-secondary option text-start" @click="selectOption($event.target)">
                                <i class="fas fa-users me-2"></i> Moins de 10 salariés <span class="float-end"><i class="fas fa-arrow-right"></i>
                                </span>
                            </button>
                            <button type="button" class="btn btn-outline-secondary option text-start" @click="selectOption($event.target)">
                                <i class="fas fa-building me-2"></i> Entre 10 et 20 salariés <span class="float-end"><i class="fas fa-arrow-right"></i>
                                </span>
                            </button>
                            <button type="button" class="btn btn-outline-secondary option text-start" @click="selectOption($event.target)">
                                <i class="fas fa-city me-2"></i> Plus de 20 salariés <span class="float-end"><i class="fas fa-arrow-right"></i>
                                </span>
                            </button>
                        </div>
                        <button type="button" class="btn btn-primary w-100 mt-3" @click="nextStep">Suivant → Détails sur l’entreprise</button>
                    </div>

                    <!-- Step 2: Détails de l'entreprise -->
                    <div id="step2" class="form-step" style="display: none;">
                        <h2 class="mb-4">Détail de l'entreprise</h2>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="company-name" class="form-label">Nom de l'entreprise</label>
                                <input type="text" id="company-name" class="form-control" v-model="company.name" required  placeholder="Ex : La Place">
                            </div>
                            <div class="col-md-6">
                                <label for="company-address" class="form-label">Adresse</label>
                                <input type="text" id="company-address" class="form-control" v-model="company.address" placeholder="12, rue flacon, paris">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="company-zone" class="form-label">Zone d'intervention</label>
                                <input type="text" id="company-zone" class="form-control"  v-model="company.zone" placeholder="Lyon">
                            </div>
                            <div class="col-md-6">
                                <label for="company-website" class="form-label">Site web</label>
                                <input type="text" id="company-website" class="form-control"  v-model="company.website"  placeholder="www.edc.com">
                            </div>
                        </div>          <!-- Hidden field for company size -->
                    <input type="hidden" v-model="company.size" />

                        <button type="button" class="btn btn-primary w-100 mt-4" @click="nextStep">Suivant → Confirmation</button>
                    </div>

                    <!-- Step 3: Confirmation -->
                    <div id="step3" class="form-step" style="display: none;">
                        <h2>Félicitations !</h2>
                        <p>Vous faites maintenant partie des électriciens les plus fiables et respectés. Grâce à votre inscription, vous avez franchi une étape importante pour renforcer votre réputation et attirer plus de clients.</p>
                        <i class="fa-solid fa-face-grin-stars icon-user-star"></i>
                        <h5>Vous avez obtenu votre premier badge de réputation : <span class="span-color">Étincelle de Confiance.</span></h5>
                        <p>Ce badge symbolise votre engagement à offrir un service de qualité et inspire confiance à vos futurs clients.</p>
                        <div class="alert alert-warning">
                            <span>Continuez à accumuler des avis positifs et à enrichir votre profil pour débloquer les prochains niveaux de réputation et asseoir votre notoriété dans la communauté.</span>
                        </div>
                        <button type="submit" class="btn btn-primary w-100" @click="redirectToDashboard">Voir mon profil</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/css/user.css';
import axios from 'axios';
import { showStep, nextStep, prevStep, selectOption } from '../assets/user.js'; // Mettez à jour le chemin d'importation si nécessaire

export default {
  name: "UserUnboarding",
  mounted() {
   
  },
  data() {
    return {
      company: {
        size: '',
        name: '',
        address: '',
        zone: '',
        website: '',
      },
    };
  },
  methods: {
    nextStep,
    prevStep,
    showStep ,
    selectOption ,

    async submitForm() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/companies', this.company);
        alert(response.data.message); // Handle the response accordingly
      } catch (error) {
        console.error('Error submitting form', error);
        alert('Une erreur s\'est produite lors de l\'envoi des données.');
      }
    } ,
    redirectToDashboard() {
      // Redirection to dashboard (you can adjust the path as per your routing)
      this.$router.push({ name: 'dashboard' }); // Ensure you have a route named 'dashboard'
    }
  }

};
</script>


<style scoped>
/* Ajoutez vos styles ici */
</style>
