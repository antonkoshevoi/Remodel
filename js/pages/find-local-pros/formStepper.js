
let currentStep = 0; 
showTab(currentStep); 

function showTab(step) {
  let currentForm = document.getElementsByClassName("form__step");
  currentForm[step].classList.add('form__active');
}

function nextPrev(step) {
  let currentForm = document.getElementsByClassName("form__step");
  currentForm[currentStep].classList.remove('form__active');
  currentStep = currentStep + step;
  showTab(currentStep);
}

