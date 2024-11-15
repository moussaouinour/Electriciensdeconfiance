<template>
       <!-- Personal Information Section -->
       <div class="col-md-12">
              <div class="card p-4">
                <h5>Informations Personnelles</h5>
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">Nom *</label>
                      <input type="text" class="form-control" value="name">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Prénom *</label>
                      <input type="text" class="form-control" value="lastname">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">E-mail *</label>
                      <input type="email" class="form-control" placeholder="example@exmp.com">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Numéro de téléphone *</label>
                      <input type="tel" class="form-control" placeholder="e.g. San Francisco">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Adresse</label>
                      <input type="text" class="form-control" value="adress">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Anniversaire</label>
                      <input type="date" class="form-control">
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-edit mt-3">Enregistrer les changements</button>
                </form>
              </div>
            </div>
 <!--end form 1-->
  </template>
  
  <script>
  export default {
    name: "PersonalInfo",
   
  };
  </script>
    <style scoped>
    /* Ajoutez vos styles ici */
    </style>
  