<template>
    <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="d-flex align-items-center justify-content-between">
        <router-link to="/" class="logo d-flex align-items-center">
          <img src="../../assets/img/electrician-logo.png" alt="Logo">
        </router-link>

        <router-link to="/" class="text-black text-decoration-none">
  <i class="fas fa-chevron-left"></i> Retour à la page d'accueil
</router-link>
      </div>
      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">
          <li class="nav-item dropdown">
            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-bell"></i>
              <span class="badge badge-number">0</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
          <li class="dropdown-header">
            You have 4 new notifications
            <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
          </li>
        </ul>
          </li>

         

          <li class="nav-item dropdown pe-3">
            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <img src="../../assets/img/profil.png" alt="Profile" class="rounded-circle">
            </a>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li class="dropdown-header">
            <h6>Utilisateur</h6>
          </li>
          <li>
            <router-link class="dropdown-item d-flex align-items-center">
  

      <i class="bi bi-box-arrow-right"></i>
      <span>Sign Out</span>
    </router-link>
          </li>
        </ul><!-- End Profile Dropdown Items -->
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>

  
  export default {
    name: 'HeaderDashboard',
    
    methods: {
   
    },
    
    mounted() {
     
    },
  };
  </script>
   
 
  