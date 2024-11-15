<template>
    <footer class="footer">
      <div class="container text-center text-md-start">
        <div class="row">
          <!-- Footer top -->
          <div class="col-12 text-center mb-5 top-footer">
            <h3>Commencez Maintenant</h3>
            <a href="#" class="btn btn-acces">DEMANDER L'ACCÈS AU RÉSEAU ÉLECTRICIENS DE CONFIANCE</a>
          </div>
  
          <!-- Section Contact -->
          <div class="col-md-5 mb-3">
            <h5>CONTACT</h5>
            <p v-for="(info, index) in contactInfo" :key="index">{{ info }}</p>
          </div>
  
          <!-- Section Légale -->
          <div class="col-md-4 mb-3 footer-links">
            <h5>LÉGALE</h5>
            <p v-for="(link, index) in legalLinks" :key="index">
              <a :href="link.url">{{ link.text }}</a>
            </p>
          </div>
  
          <!-- Section Navigation -->
          <div class="col-md-3 mb-3 footer-links">
            <h5>NAVIGATION</h5>
            <p v-for="(link, index) in navLinks" :key="index">
              <a :href="link.url">{{ link.text }}</a>
            </p>
          </div>
        </div>
  
        <!-- Section Bas de Footer -->
        <div class="footer-bottom d-flex justify-content-between align-items-center mt-5">
          <!-- Logo et texte -->
          <div class="logo d-flex align-items-center">
            <img src="../assets/img/electrician-logo.png" alt="Logo" class="me-2" />
            <span class="sitename">Electriciensdeconfiance</span>
          </div>
  
          <!-- Texte des droits d'auteur -->
          <p class="mb-0">© 2022 INOVENCIA, Inc. Tous les droits sont réservés.</p>
  
          <!-- Drapeau de la France -->
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
            alt="Drapeau France"
            style="width: 20px; height: 14px;"
          />
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
    data() {
      return {
        contactInfo: [
          "Contact@electriciensdeconfiance.com",
          "+1-2345-6789",
          "123 Ave, New York, USA"
        ],
        legalLinks: [
          { text: "Mention légale", url: "#" },
          { text: "CGU", url: "#" },
          { text: "Politique de confidentialité", url: "#" }
        ],
        navLinks: [
          { text: "Annuaire EDC", url: "#" },
          { text: "Blog", url: "#" },
          { text: "FAQ", url: "#" },
          { text: "Tarif", url: "#" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f9fa;
    padding: 40px 0;
    color: #6c757d;
  }
  .footer h5 {
    color: #343a40;
  }
  .top-footer h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
 
  .footer-links p {
    margin: 0;
    line-height: 1.6;
  }
  .footer-bottom {
    border-top: 1px solid #dee2e6;
    padding-top: 20px;
    font-size: 0.875rem;
  }
  .sitename {
    font-weight: bold;
    color: #343a40;
  }
  </style>
  