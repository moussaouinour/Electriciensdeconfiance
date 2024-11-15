<template>
    <header id="header-site" class="header-site"> 
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <router-link class="navbar-brand d-flex align-items-center" to="/">
            <img src="../assets/img/electrician-logo.png" alt="Logo" />
            <span class="sitename">Electriciensdeconfiance</span>
          </router-link>
          
          <button
            class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li v-for="(item, index) in navItems" :key="index" class="nav-item">
                <router-link :to="item.route" class="nav-link">{{ item.name }}</router-link>
              </li>
            </ul>
            <router-link to="/signup" class="nav-link mx-2">Inscription</router-link>
            <router-link to="/login" class="btn btn-connexion ms-2">Connexion</router-link>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
    data() {
      return {
        navItems: [
          { name: "Accueil", route: "/" },
          { name: "Annuaire", route: "/annuaire" },
          { name: "Tarif", route: "/tarif" },
          { name: "Blog", route: "/blog" },
          { name: "Forum", route: "/forum" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>

  </style>
  