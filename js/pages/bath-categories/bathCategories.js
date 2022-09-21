//the function sets the initial number of elements in the slider at different screen sizes 
let itemsFirstSlider = document.querySelectorAll('#recipeCarousel .carousel-item');
let itemsSeconSlider = document.querySelectorAll('#recipeCarouselTwo .carousel-item');

itemsFirstSlider.forEach((el) => {
  const minPerSlide = itemsFirstSlider.length;
  let next = el.nextElementSibling
  for (let i=1; i<minPerSlide; i++) {
    if (!next) {
        next = itemsFirstSlider[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})
itemsSeconSlider.forEach((el) => {
  const minPerSlide = itemsSeconSlider.length - 4
  let next = el.nextElementSibling
  for (let i=1; i<minPerSlide; i++) {
    if (!next) {
        next = itemsSeconSlider[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})

//function to start gallary on click image
baguetteBox.run('.tz-gallery');