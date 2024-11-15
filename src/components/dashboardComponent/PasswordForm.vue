<template>
    <!-- Mot de passe Section -->
    <div class="col-md-12 my-1">
        <div class="card p-4">
          <h5>Mot de passe</h5>
          <form>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Mot de passe actuel</label>
                <input type="password" class="form-control" value="actualpw" placeholder="enter your current password">
              </div>
              <div class="col-md-6">
                <label class="form-label">Nouveau Mot de passe </label>
                <input type="password" class="form-control" value="newpw" placeholder="enter your new password">
              </div>
              <div class="col-md-6">
                <label class="form-label">Confirmez le nouveau mot de passe</label>
                <input type="password" class="form-control" value="confirmpw" placeholder="confirm your new password">
              </div>
              <div class="col-md-12">
                <h6 class="">Password requirements</h6>
                <p>Ensure that these requirements are met : </p>
                <ul class="list-unstyled">
                  <li>Au moins 10 caractéres </li>
                  <li>Au moins une lettre majuscule</li>
                  <li>Au moins un caractére special e.g . @ ?</li>
                </ul>
              </div>
             
            </div>
            <button type="submit" class="btn btn-primary btn-edit mt-3">Enregistrer les changements</button>
          </form>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: "PasswordForm",
   
  };
  </script>
    <style scoped>
    /* Ajoutez vos styles ici */
    </style>
  