const HeaderTopBurguerWrapper = document.querySelector(`.Header-top-burguer-wrapper`)
const HeaderBottom = document.querySelector(`.Header-bottom`)
const HeaderTopBurguerWrapperClose = document.querySelector(`.Header-top-burguer-wrapper-close`)
console.log(HeaderTopBurguerWrapper)
console.log(HeaderBottom)
HeaderTopBurguerWrapper.addEventListener('click', ()=>{
  HeaderBottom.classList.toggle(`IsActive`)
  HeaderTopBurguerWrapperClose.classList.toggle('IsOpen')

})
const AboutUs = document.querySelectorAll(`.About-us`);
const FondoImg = document.querySelectorAll(`.Fondo-img`);
let options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(AboutUs).indexOf(entry.target);
      if (index !== -1) {
        FondoImg.forEach((img) => img.classList.remove('IsVisible'));
        FondoImg[index]?.classList.add('IsVisible');
      }
    }
  });
}, options);

AboutUs.forEach((element) => {
  observer.observe(element);
});
const CarruselContainer = document.querySelector(`.Carrusel-container`)
const CarruselCommentWrapper = document.querySelectorAll(`.Carrusel-comment-wrapper`)
console.log(CarruselContainer)
console.log(CarruselCommentWrapper)
const Next = document.querySelector(`.Carrusel-button-arrow--Next`)
console.log(Next)
const Prev = document.querySelector(`.Carrusel-button-arrow--Prev`)
const Seleccion = document.querySelectorAll(`.Carrusel-button-select`)
let imagen = 0
let anchoImg = 100 / CarruselCommentWrapper.length
CarruselContainer.style.width = `calc(100% * ${CarruselCommentWrapper.length})`
CarruselCommentWrapper.forEach(( _ , i)=>{
CarruselCommentWrapper[i].style.width = `calc(100% / ${CarruselCommentWrapper.length})`
})

Next.addEventListener('click', ()=>{
  imagen++
  if(
    imagen>=4
  ){
    imagen=0
  }
  CarruselContainer.style.transform = `translateX(-${anchoImg * imagen}%)`
  Seleccion.forEach((_ , i )=>{
    Seleccion[i].classList.remove('IsVisible')
  })
  Seleccion[imagen].classList.add('IsVisible')

})

Prev.addEventListener('click', ()=>{
  imagen--
  if( imagen<=-1){
    imagen=3
  }
  CarruselContainer.style.transform = `translateX(-${anchoImg * imagen}%)`
  Seleccion.forEach((_ , i )=>{
    Seleccion[i].classList.remove('IsVisible')
  })
  Seleccion[imagen].classList.add('IsVisible')

} )

Seleccion.forEach(( _ , i )=>{
  Seleccion[i].addEventListener('click', ()=>{
    imagen = i
    CarruselContainer.style.transform = `translateX(-${anchoImg * imagen}%)`
    Seleccion.forEach((_ , i )=>{
      Seleccion[i].classList.remove('IsVisible')
    })
    Seleccion[imagen].classList.add('IsVisible')

  })
})