
let currentStep = 0;
showTab(currentStep); 

function showTab(step) {
  let currentForm = document.getElementsByClassName("form__step");
  currentForm[step].classList.add('form__active');
}


function nextPrev(step) {
  let currentForm = document.getElementsByClassName("form__step");
  if (step == 1 && !validateForm()) return false;
  
  if(currentStep === 1){
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
          <h2>What type of bath issues do you have</h2>
        </div>
        <div class="step__body">
          <div class="step__item">
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="option" id="option1" value="option1">
                <label class="form-check-label" for="option1">
                  Option1
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="option" id="option2" value="option2">
                <label class="form-check-label" for="option2">
                  Option2
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="option" id="option3" value="option3">
                <label class="form-check-label" for="option3">
                  Option3
                </label>
              </div>
            </div>
            <i class="step__error">Please select an option (radio button questions)</i>
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
                <input class="form-check-input" type="radio" name="amount" id="selectOne" >
                <label class="form-check-label" for="selectOne">
                  1-3
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="amount" id="selectTwo" >
                <label class="form-check-label" for="selectTwo">
                  3-10
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="amount" id="selectThree">
                <label class="form-check-label" for="selectThree">
                  10+
                </label>
              </div>
            </div>
            <i class="step__error">Please select an option (radio button questions)</i>
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
              <input class="form-check-input" type="radio" name="amount" id="selectOne" >
              <label class="form-check-label" for="selectOne">
                1-3
              </label>
            </div>
          </div>
          <div class="mt-3">
            <div class="form-check d-flex align-items-center justify-content-center step__check">
              <input class="form-check-input" type="radio" name="amount" id="selectTwo" >
              <label class="form-check-label" for="selectTwo">
                3-10
              </label>
            </div>
          </div>
          <div class="mt-3">
            <div class="form-check d-flex align-items-center justify-content-center step__check">
              <input class="form-check-input" type="radio" name="amount" id="selectThree">
              <label class="form-check-label" for="selectThree">
                10+
              </label>
            </div>
          </div>
          <i class="step__error">Please select an option (radio button questions)</i>
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
                <label class="form-check-label" for="option1">
                  Option1
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="option" id="option2">
                <label class="form-check-label" for="option2">
                  Option2
                </label>
              </div>
            </div>
            <div class="mt-3">
              <div class="form-check d-flex align-items-center justify-content-center step__check">
                <input class="form-check-input" type="radio" name="option" id="option3">
                <label class="form-check-label" for="option3">
                  Option3
                </label>
              </div>
            </div>
            <i class="step__error">Please select an option (radio button questions)</i>
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
      if(!document.getElementById('form-step-window')){
        optionsForm.after(bothForm);
      }
    }
  }
  currentForm[currentStep].classList.remove('form__active');
  currentStep = currentStep + step;
  showTab(currentStep);
}


document.getElementById('btnSend').onclick = function() {
  if (!validateForm()){
    return false;
  } else{
    window.location.href = 'thank-you-page.html'
  }
} 

function validateForm() {
  let isValid = true;
  let currentForm = document.querySelectorAll(".form__step")[currentStep];
  let inputLength = currentForm.querySelectorAll("input").length;
  for (i = 0; i < inputLength; ++i) {
    let inputs = currentForm.querySelectorAll('input')[i];
    if(inputs.getAttribute("type") === 'text'){
      let zipReg = /^[0-9]{5}(?:-[0-9]{4})?$/;
      if(inputs.value === '' || !zipReg.test(inputs.value)){
        currentForm.querySelector('.step__error').classList.add('active__error');
        isValid = false;
      }else{
        currentForm.querySelector('.step__error').classList.remove('active__error');
      }
    }
    if(inputs.getAttribute("type") === 'radio'){
      if(!inputs.checked){
        currentForm.querySelector('.step__error').classList.add('active__error');
        isValid = false;
      }else{
        currentForm.querySelector('.step__error').classList.remove('active__error');
        isValid = true;
        break;
      }
    }
    if(inputs.id === 'first-name' || inputs.id === 'last-name'){
      let nameInputs = currentForm.querySelectorAll('input');
      if(nameInputs[0].value === '' || nameInputs[0].value.length <= 2){
        currentForm.querySelector('.error__name').classList.add('active__error');
        isValid = false;
      }else{
        currentForm.querySelector('.error__name').classList.remove('active__error');
      }
      if(nameInputs[1].value === '' || nameInputs[1].value.length <= 2){
        currentForm.querySelector('.error__sename').classList.add('active__error');
        isValid = false;
      }else{
        currentForm.querySelector('.error__sename').classList.remove('active__error');
      }
      if(nameInputs[i].value.length > 2){
        isValid = true;
      }
    }
    if(inputs.id === 'email-adress' || inputs.id === 'number-phone'){
      let infoInputs = currentForm.querySelectorAll('input'),
      emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
      numberReg = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
      if(infoInputs[0].value === '' || !emailReg.test(infoInputs[0].value)){
        currentForm.querySelector('.error__email').classList.add('active__error');
        isValid = false;
      }else{
        currentForm.querySelector('.error__email').classList.remove('active__error');
      }
      if(infoInputs[1].value === '' || !numberReg.test(infoInputs[1].value)){
        currentForm.querySelector('.error__phone').classList.add('active__error');
        isValid = false;
      }else{
        currentForm.querySelector('.error__phone').classList.remove('active__error');
      }
      if(emailReg.test(infoInputs[0].value) && numberReg.test(infoInputs[1].value) ){
        isValid = true;
      }

    }
  }
  return isValid; 
}


