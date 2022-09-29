
//function to track an item on the screen
let isVisible;
// const el = document.getElementById('searchingButtonMobile');
// const observer = new IntersectionObserver((entries) => {
//     if(entries[0].isIntersecting){
//       isVisible = true;
//     } else {
//       isVisible = false;
//     }
// });


// Выполняем заново при изменении размера окна
window.addEventListener('resize', function() {
  if(window.innerWidth <= 991){
    isVisible = true;
  } else{
    isVisible = false;
  }
});



//function that starts an intu at scrolling 
var lastScrollTop = 0;
window.addEventListener("scroll",  function(){ 
  const fixed = document.getElementById("inputScroll");
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (isVisible && st >= 200){
    fixed.classList.add('show');
  } 
  else if(isVisible && st === 0) {
    fixed.classList.remove('show');
  }
  lastScrollTop = st <= 0 ? 0 : st; 
}, false);

// observer.observe(el);
