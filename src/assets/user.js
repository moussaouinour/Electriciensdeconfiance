// user.js

let currentStep = 1;

export function showStep(step) {
    // Affiche uniquement l'étape actuelle et masque les autres
    document.querySelectorAll('.form-step').forEach((formStep, index) => {
        formStep.style.display = (index === step - 1) ? 'block' : 'none';
    });

    // Met à jour l'indicateur d'étape
    document.querySelectorAll('.step').forEach((stepIndicator, index) => {
        stepIndicator.classList.toggle('active', index === step - 1);
    });
}

export function nextStep() {
    if (currentStep < 3) {
        // Marque l'étape actuelle comme terminée
        completeStep(currentStep);
        currentStep++;
        showStep(currentStep); // Affiche l'étape suivante
    }
}

export function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep); // Affiche l'étape précédente
    }
}

function completeStep(stepNumber) {
    const stepIndicator = document.getElementById(`step${stepNumber}-indicator`);
    stepIndicator.classList.add("completed");
}

export function selectOption(button) {
    // Réinitialiser la bordure de tous les boutons
    var buttons = document.querySelectorAll('.option');
    buttons.forEach(function(btn) {
        btn.classList.remove('border-black');
    }
);

    // Ajouter la bordure noire au bouton sélectionné
    button.classList.add('border-black');
}
