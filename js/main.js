

//function to toggle an asset class for nav link
let links = document.querySelectorAll(".nav__link");
links.forEach((link) => {
  // if(window.location.pathname === link.pathname){
  //   link.classList.add('active');
  // }
  link.addEventListener('click', function() {
    links.forEach((btn) => btn.classList.remove('active'));
    this.classList.add('active');
  })
});

//function to toggle an class close for buttons
document.getElementById('searchingButton').onclick = function() {
  document.getElementById('navbarContent').classList.toggle('close');
}
document.getElementById('button-addon2').onclick = function() {
  document.getElementById('navbarContent').classList.toggle('close');
}

