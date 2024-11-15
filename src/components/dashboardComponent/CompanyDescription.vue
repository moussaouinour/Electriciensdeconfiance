<template>
<!-- entreprise description Section -->
<div class="col-md-12 my-1">
              <div class="card p-4">
                <h5>Description de l'entreprise</h5>
                <form>
                  <div style="position: relative; display: inline-block; width: 100%;">
                    <textarea id="description" name="description" rows="5" class="mr-5 form-control border-0" 
                              style="resize: none; overflow: hidden; width: 100%; font-size: 15px; color: #6c757d; line-height: 1.6; padding-right: 30px;">Comptoir des Pros est un site spécialisé dans la vente de matériel Pro pour tous : électroportatif, outillage à main, nettoyage, équipement de la maison (électricité, plomberie, chauffage,...) et jardinage. Nous vous proposons les marques reconnues par les Professionnels comme Festool, Bosch, Karcher, Thermor, Atlantic, Loctite, Facom, Virax...
                    </textarea>
                    <i class="bi bi-pencil" style="position: absolute; right: 10px; top: 10px; color: #6c757d; font-size: 1.2em;"></i>
                  </div>
                  <button type="submit" class="btn btn-primary btn-edit mt-3">Enregistrer les changements</button>
                </form>
                
              </div>
            </div>

  </template>
  
  <script>
  export default {
    name: "CompanyDescription",
   
  };
  </script>
    <style scoped>
    /* Ajoutez vos styles ici */
    </style>
  