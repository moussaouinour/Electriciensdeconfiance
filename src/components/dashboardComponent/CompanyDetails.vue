<template>
    
    <!-- Details de l'entreprise  Section -->
    <div class="col-md-12 my-4">
      <div class="card p-4">
        <h5>Détails de l'entreprise</h5>
        <form>
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Nom / Raison sociale *</label>
              <input type="text" class="form-control" value="nom">
            </div>
            <div class="col-md-6">
              <label class="form-label">Adresse *</label>
              <input type="text" class="form-control" value="adress">
            </div>
            <div class="col-md-6">
              <label class="form-label">Zone d'intervention *</label>
              <input type="text" class="form-control" placeholder="example@exmp.com">
            </div>
            <div class="col-md-6">
              <label class="form-label">Site web</label>
              <input type="text" class="form-control" placeholder="www.nomsite.com">
            </div>
            <div class="col-md-6">
              <label class="form-label">Taille de l'entreprise*</label>
              <input type="text" class="form-control" value="taille">
            </div>
            <div class="col-md-6">
              <label class="form-label">Email professionnel</label>
              <input type="email" class="form-control"  placeholder="example@exmp.com" >
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-edit mt-3">Enregistrer les changements</button>
        </form>
      </div>
    </div>
<!--end form 2 -->
  </template>
  
  <script>
  export default {
    name: "CompanyDetails",
   
  };
  </script>
    <style scoped>
    /* Ajoutez vos styles ici */
    </style>
  