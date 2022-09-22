
let currentStep = 0;
showTab(currentStep); 

function showTab(step) {
  let currentForm = document.getElementsByClassName("form__step");

  if(currentStep === 2){
    let bath = document.getElementById('bathroom');
    let window = document.getElementById('window');
    let both = document.getElementById('both');
  
    if(bath.checked){
      if(document.getElementById('form-step-window')){
        document.getElementById('form-step-window').remove();
      }
      let bathForm = document.getElementById('form-step-options');
      bathForm.innerHTML = `
        <div class="step__title">
          <h2 class="">What type of bath issues do you have</h2>
        </div>
        <div class="step__body">
          <div class="step__item">
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="option" id="option1">
                <label class="form-check-label" for="Option1">
                  Option1
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="option" id="option2">
                <label class="form-check-label" for="Option2">
                  Option2
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="option" id="option3">
                <label class="form-check-label" for="Option3">
                  Option3
                </label>
              </div>
            </div>
          </div>
          <div class="step__item mt-5 btn__both d-flex justify-content-between">
            <div class="btn__prev">
              <button class="btn__step btn__outline" onclick="nextPrev(-1)" id="btnPrev"> </button>
            </div>

            <div class="btn__next">
              <button class="btn__step btn__primary btn__image__primary" onclick="nextPrev(1)" id="btnNext">Next</button>
            </div>
            
          </div>
        </div>
      `;
    }
    if(window.checked){
      if(document.getElementById('form-step-window')){
        document.getElementById('form-step-window').remove();
      }
      let windowForm = document.getElementById('form-step-options');
      windowForm.innerHTML = `
        <div class="step__title">
          <h2 class="">Choose an amount below</h2>
        </div>
        <div class="step__body">
          <div class="step__item">
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="wind" id="firstSelect">
                <label class="form-check-label" for="firstSelect">
                  1-3
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="wind" id="secondSelect">
                <label class="form-check-label" for="secondSelect">
                  3-10
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="wind" id="thirdSelect">
                <label class="form-check-label" for="thirdSelect">
                  10+
                </label>
              </div>
            </div>
          </div>
          
          <div class="step__item mt-5 btn__both d-flex justify-content-between">
            <div class="btn__prev">
              <button class="btn__step btn__outline" onclick="nextPrev(-1)" id="btnPrev"> </button>
            </div>
        
            <div class="btn__next">
              <button class="btn__step btn__primary btn__image__primary" onclick="nextPrev(1)" id="btnNext">Next</button>
            </div>
            
          </div>
        </div>
      `;
    }
    if(both.checked && !document.getElementById('form-step-window')){
      let bothForm = document.createElement('div');
      bothForm.className = 'd-flex flex-column justify-content-center align-items-center form__step';
      bothForm.id = 'form-step-window';
      bothForm.innerHTML = `
        <div class="step__title">
          <h2 class="">Choose an amount below</h2>
        </div>
        <div class="step__body">
          <div class="step__item">
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="wind" id="firstSelect">
                <label class="form-check-label" for="firstSelect">
                  1-3
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="wind" id="secondSelect">
                <label class="form-check-label" for="secondSelect">
                  3-10
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="wind" id="thirdSelect">
                <label class="form-check-label" for="thirdSelect">
                  10+
                </label>
              </div>
            </div>
          </div>
          
          <div class="step__item mt-5 btn__both d-flex justify-content-between">
            <div class="btn__prev">
              <button class="btn__step btn__outline" onclick="nextPrev(-1)" id="btnPrev"> </button>
            </div>
        
            <div class="btn__next">
              <button class="btn__step btn__primary btn__image__primary" onclick="nextPrev(1)" id="btnNext">Next</button>
            </div>
            
          </div>
        </div>
      `;
      let optionsForm = document.getElementById('form-step-options');
      optionsForm.innerHTML =`
        <div class="step__title">
          <h2 class="">What type of bath issues do you have</h2>
        </div>
        <div class="step__body">
          <div class="step__item">
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="option" id="option1">
                <label class="form-check-label" for="Option1">
                  Option1
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="option" id="option2">
                <label class="form-check-label" for="Option2">
                  Option2
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="option" id="option3">
                <label class="form-check-label" for="Option3">
                  Option3
                </label>
              </div>
            </div>
          </div>
          <div class="step__item mt-5 btn__both d-flex justify-content-between">
            <div class="btn__prev">
              <button class="btn__step btn__outline" onclick="nextPrev(-1)" id="btnPrev"> </button>
            </div>

            <div class="btn__next">
              <button class="btn__step btn__primary btn__image__primary" onclick="nextPrev(1)" id="btnNext">Next</button>
            </div>
            
          </div>
        </div>
      `;
      optionsForm.after(bothForm);
    }
  }
  currentForm[step].classList.add('form__active');
}

function nextPrev(step) {
  let currentForm = document.getElementsByClassName("form__step");
  //if (step == 1 && !validateForm()) return false;
  currentForm[currentStep].classList.remove('form__active');
  currentStep = currentStep + step;
  showTab(currentStep);
}

function validateForm() {
  let valid = true;
  let inputReg = /^[0-9]{5}(?:-[0-9]{4})?$/;
  let currentForm = document.querySelectorAll(".form__step")[currentStep];
  let inputLength = currentForm.querySelectorAll("input").length;
  for (i = 0; i < inputLength; ++i) {
    let inputs = currentForm.querySelectorAll('input')[i];
    if(inputs.getAttribute("type") === 'text'){
      if(inputs.value === '' || !inputReg.test(inputs.value)){
        currentForm.querySelector('.step__error').classList.add('active__error');
        valid = false;
      }else{
        currentForm.querySelector('.step__error').classList.remove('active__error');
      }
    }
    if(inputs.getAttribute("type") === 'radio'){
      if(!inputs.checked){
        console.log('no')
        currentForm.querySelector('.step__error').classList.add('active__error');
        valid = false;
      }else{
        currentForm.querySelector('.step__error').classList.remove('active__error');
        valid = true;
        break;
      }
    }
    
  }
  return valid; 

}


