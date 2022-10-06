let form = document.getElementById('contact-us-form'),
    formInputs = document.querySelectorAll('.contact__input'),
    inputName = document.querySelector('.contact__input__name')
    inputEmail = document.querySelector('.contact__input__email'),
    inputPhone = document.querySelector('.contact__input__phone'),
    inputArea = document.querySelector('.contact__area'),
    error = document.querySelectorAll('.step__error');

function validateEmail (email)  {
  let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/;
  return emailReg.test(email);
}

function validatePhone (phone)  {
  let phoneReg = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return phoneReg.test(phone);
}

form.onsubmit = function () {
  let emailValue = inputEmail.value,
      phoneValue = inputPhone.value,
      areaValue = inputArea.value,
      emptyInputs = Array.from(formInputs).filter(input => input.value === '');
    
  formInputs.forEach((input) => {
    if(input.value === ''){
      input.closest('.input-container')
      .closest('.contact__form')
      .querySelector('.step__error')
      .classList.add('active__error');
    }else{
      input.closest('.input-container')
      .closest('.contact__form')
      .querySelector('.step__error')
      .classList.remove('active__error');
    }
  });

  if(emptyInputs.length){
    return false;
  }

  if(!validateEmail(emailValue)){
    document.querySelector('.error__email').classList.add('active__error');
  } else{
    document.querySelector('.error__email').classList.remove('active__error');
  }

  if(!validatePhone(phoneValue)){
    document.querySelector('.error__phone').classList.add('active__error');
  } else{
    document.querySelector('.error__phone').classList.remove('active__error');
  }
  
  if(areaValue === '' ){
    document.querySelector('.error__area').classList.add('active__error');
  } else{
    document.querySelector('.error__area').classList.remove('active__error');
  }

}



