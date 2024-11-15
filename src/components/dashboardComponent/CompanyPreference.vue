<template>

            <!-- Preferences Section -->
            <div class="col-md-12 my-4">
              <div class="card p-4">
                <h5>Préférences</h5>
                <div class="d-flex align-items-center">
                  <div class="toggle-switch">
                    <input type="checkbox" id="notifications" checked>
                    <label for="notifications"></label>
                  </div>
                  <span class="ms-3">Recevoir des notifications</span>
                </div>
                
                <div class="d-flex align-items-center mt-2"> 
                  <div class="toggle-switch">
                    <input type="checkbox" id="auto-reply">
                    <label for="auto-reply"></label>
                  </div>
                  <span class="ms-3">Réponses automatiques aux questions de la communaité</span>
                </div>
                <div class="d-flex align-items-center mt-2">
                  <div class="toggle-switch">
                    <input type="checkbox" id="auto-blog" checked>
                    <label for="auto-blog"></label>
                  </div>
                  <span class="ms-3">Publication d’articles de blog</span>
                </div>
              </div>
            </div>
    
      </template>
      
      <script>
      export default {
        name: "CompanyPreference",
       
      };
      </script>
        <style scoped>
        /* Ajoutez vos styles ici */
        </style>
      