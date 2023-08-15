
//  ANIMAÇÃO PARA AS PALAVRAS/LETRA DA HOME
 var typed = new Typed('#element', {
      strings: ['Full Stack Developer', 'Web Developer', 'Estudante'],
      typeSpeed: 100,
      backSpeed:100,
      backDelay:1000,
     loop:true
    });


// SLIDES PROJETOS CARROSSEL
const carrossel = document.querySelector(".carrossel");
primeiraImg = carrossel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let primeiraImgWidth = primeiraImg.clientWidth + 14;
let scrollWidth = carrossel.scrollWidth - carrossel.clientWidth;

const showHideIcons = () => {
     arrowIcons[0].style.display = carrossel.scrollLeft == 0? "none" : "block";
     arrowIcons[1].style.display = carrossel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
     icon.addEventListener("click", () => {
          if(icon.id == "left") {
               carrossel.scrollLeft -= primeiraImgWidth;
          } else{
                carrossel.scrollLeft += primeiraImgWidth;
          }
          setTimeout(() => showHideIcons(), 60);
     })
});

const dragStart = (e) => {
     isDragStart = true;
     prevPageX = e.pageX;
     prevScrollLeft = carrossel.scrollLeft;
}


const dragging = (e) =>{
     if (!isDragStart) return;
     e.preventDefault();
     carrossel,classList.add("dragging");
     let positionDiff = e.pageX - prevPageX;
     carrossel.scrollLeft =e.pageX;
     carrossel.scrollLeft = prevScrollLeft - positionDiff;
     showHideIcons();
}

const dragStop = (e) =>{
     isDragStart = false;
     carrossel.classList.remove("dragging");
}
carrossel.addEventListener("mousesown", dragStart);
carrossel.addEventListener("mousemove", dragging);
carrossel.addEventListener("mouseup", dragStop);