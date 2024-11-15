<template>
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
          <a :class="['nav-link', { active: item.active }]" :href="item.link">
            <i :class="item.icon"></i>
            <span>{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: "SideBar",
    data() {
      return {
        menuItems: [
          { text: "Résultats", link: "resultats.html", icon: "fas fa-home", active: false },
          { text: "Compte", link: "index.html", icon: "bi bi-gear-fill", active: true },
          { text: "Avis", link: "avis.html", icon: "fas fa-star", active: false },
          { text: "Contribitions", link: "contribitions.html", icon: "fas fa-question-circle", active: false },
          { text: "Abonnement", link: "abonnement.html", icon: "fas fa-hand-holding-usd", active: false },
        ],
      };
    },
  };
  </script>
    <style scoped>
    /* Ajoutez vos styles ici */
    </style>
  