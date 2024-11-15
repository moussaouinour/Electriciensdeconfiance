<template>
    <section class="hero-section py-5">
      <div class="container-fluid">
        <div class="row align-items-center">
          <!-- Contenu principal du Hero -->
          <div class="col-lg-6 text-center text-lg-start">
            <h1>{{ mainTitle }}</h1>
            <p>{{ mainDescription }}</p>
            <a :href="ctaLink" class="btn btn-custom">
              <i class="bi bi-shield-fill-check"></i>
              <span class="sr-only">Icone de protection</span> <!-- Texte masqué pour l’accessibilité -->
              {{ ctaText }}
            </a>
          </div>
  
          <!-- Image du Hero -->
          <div class="col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
            <img src="../assets/img/Right Content.png" alt="Electrician at work" class="img-fluid" />
          </div>
        </div>
  
        <!-- Section des fonctionnalités -->
        <div class="row feature-section mt-5">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="col-md-4 text-center text-md-start"
          >
            <h5>{{ feature.title }}</h5>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
    data() {
      return {
        mainTitle: "Mettez en lumière votre savoir-faire",
        mainDescription:
          "Nous donnons aux électriciens la reconnaissance qu'ils méritent et offrons aux clients la tranquillité d'esprit qu'ils recherchent.",
        ctaText: "Accédez à la communauté Electriciens de confiance",
        ctaLink: "#", 
        features: [
          {
            title: "Protégez votre e-reputation",
            description:
              "Assurez-vous de préserver une image positive en ligne grâce à des avis certifiés et une gestion simplifiée de votre réputation numérique.",
          },
          {
            title: "Boostez votre rentabilité",
            description:
              "Augmentez votre chiffre d'affaires en attirant plus de clients grâce à une meilleure visibilité et des recommandations basées sur la confiance.",
          },
          {
            title: "Améliorez votre présence en ligne",
            description:
              "Référencez-vous sur Google grâce aux efforts marketing de nos équipes, et attirez une clientèle plus large et qualifiée.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  