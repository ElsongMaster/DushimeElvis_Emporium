let tabSlides = Array.from(document.querySelectorAll(".container-slide"));
//NavBar partie dynamique

let barsElt = document.querySelector(".fa-bars");
let listElt;
let containerList;

barsElt.addEventListener("click", () => {
  listElt = barsElt.nextElementSibling;
  //   containerList = document.createElement("div");
  //   containerList.append(barsElt,listElt);

  listElt.classList.toggle("show");
  console.log(listElt);
  //   listElt.classList.toggle("invisible");
});

window.addEventListener("resize", () => {
  let ulList = document.querySelector(".NavBar");
  if (window.innerWidth > 526) {
    ulList.classList.remove("show");
  }
});

//NavBar fixed au scroll

//Effet fade in sur les cartes
let checkpoint = 1770;
let container_card = document.querySelector(".container_card");
let opacity = 0;
let currentScroll;
let fadeInCard = () => {
  currentScroll = window.pageYOffset;
  if (currentScroll >= checkpoint) {
    opacity += currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  container_card.style.opacity = opacity;
};

let navNode;
let NavBar_Node = document.querySelector(".NavBar");
let container_NavBar = document.querySelector(".container_NavBar");
window.addEventListener("scroll", () => {
  fadeInCard();
  navNode = document.querySelector("nav");
  //   console.log(window.pageYOffset);
  if (window.pageYOffset == 0) {
    container_NavBar.classList.remove("display_flex");
    navNode.classList.remove("position_fixed");
    NavBar_Node.classList.remove("width_half");
  } else {
    if (
      !Array.from(navNode.classList).includes("position_fixed") &&
      !Array.from(container_NavBar.classList).includes("display_flex") &&
      !Array.from(NavBar_Node.classList).includes("width_half")
    ) {
      navNode.classList.add("position_fixed");
      container_NavBar.classList.add("display_flex");
      NavBar_Node.classList.add("width_half");
      if (document.body.offsetWidth > 525 && document.body.offsetWidth < 930) {
        console.log("dans ma condition");

        // container_NavBar.setAttribute(
        //   "style",
        //   "display:flex; flex-direction:column; border: 2px solid blue;"
        // );

        container_NavBar.classList.add("flex-directionColumn");
      } else {
        container_NavBar.classList.remove("flex-directionColumn");
      }
    }
  }
});

//mode nuit

let btn_DayMode = document.querySelector(".day_mode");
let btn_NightMode = document.querySelector(".night_mode");
let tabP = Array.from(document.querySelectorAll(".description_text>p"));
btn_DayMode.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  navNode.style.backgroundColor = "white";
  container_NavBar.classList.remove("color_white");
  Array.from(container_NavBar.querySelectorAll("li>a")).forEach((elt) => {
    elt.classList.remove("color_white");
  });
  tabP.forEach((elt) => {
    elt.classList.add("color_white");
  });
  document.querySelector(".fa-bars").style.color = "black";
  if (document.body.offsetWidth <= 525) {
    document.querySelector(".fa-bars").style.border = " 4px solid black";
  }
});

btn_NightMode.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  navNode.style.backgroundColor = "black";
  container_NavBar.classList.add("color_white");
  Array.from(container_NavBar.querySelectorAll("li>a")).forEach((elt) => {
    elt.classList.add("color_white");
  });
  tabP.forEach((elt) => {
    elt.classList.add("color_white");
  });
  document.querySelector(".fa-bars").style.color = "white";
  if (document.body.offsetWidth <= 525) {
    document.querySelector(".fa-bars").style.border = " 4px solid white";
  }
});

//Caroussel
let offsetL;
window.addEventListener("load", () => {
  console.log("wtf");
  offsetL = Math.abs(tabSlides[0].offsetLeft) * 2 - 30;
  // offsetL = tabSlides[0].offsetLeft * 2;
  console.log(tabSlides[0].offsetLeft);
  tabSlides.forEach((elt) => {
    elt.setAttribute("style", `transform: translateX(${offsetL}px)`);
  });
});
let tabRondPoint = Array.from(
  document.querySelectorAll(".container-RondPointer >a")
);
let previousRondPoint = tabRondPoint[0];
let widthElt = tabSlides[0].offsetWidth;
console.log(widthElt);
let initial = 350;
let widthContainer = document.querySelector(".container-caroussel").offsetWidth;
let nbEltContainer = Math.floor(widthContainer / widthElt);
console.log(nbEltContainer);
let nbOffsetTranslet = Math.ceil(widthContainer / nbEltContainer);
let limitOffset = nbOffsetTranslet * 7;
let differenceIndice;
let currentIndice;
let previousIndice;
console.log(nbOffsetTranslet);
let translateSlide = (tabSlides, tabRondPoint, rondPoint) => {
  if (previousRondPoint != rondPoint) {
    previousIndice = tabRondPoint.indexOf(previousRondPoint) + 1;
    currentIndice = tabRondPoint.indexOf(rondPoint) + 1;
    differenceIndice = Math.abs(previousIndice - currentIndice);
    if (currentIndice < previousIndice) {
      initial += nbOffsetTranslet * differenceIndice + 10;
    } else {
      initial -= nbOffsetTranslet * differenceIndice + 10;
    }

    previousRondPoint = rondPoint;
    tabSlides.forEach((elt) => {
      console.log(initial);
      elt.setAttribute("style", `transform: translateX(${initial}px)`);
    });
  }
};

//ecoute des liens

console.log(tabRondPoint);
console.log(tabSlides);
tabRondPoint.forEach((elt) => {
  elt.addEventListener("click", (e) => {
    e.preventDefault();
    tabSlides.forEach((elt) => {
      elt.classList.remove("transform-init");
      console.log(elt);
    });
    translateSlide(tabSlides, tabRondPoint, elt);
  });
});

let list_btnForm = document.querySelectorAll(".btn-centrum>button");
let form_connexion = document.querySelector("form.connexion");
let form_inscription = document.querySelector("form.inscription");

list_btnForm[0].addEventListener("click", () => {
  form_connexion.style.display = "block";
  form_inscription.style.display = "none";
});

list_btnForm[1].addEventListener("click", () => {
  form_connexion.style.display = "none";
  form_inscription.style.display = "block";
});

//apparition formulaire

let btnConnexionNav = document.querySelector(".btnConnexion");

btnConnexionNav.addEventListener("click", () => {
  document.querySelector(".container-form").style.display = "flex";
  document.querySelector(".connexion").style.display = "block";
  document.querySelector(".inscription").style.display = "none";
  document.body.style.overflow = "hidden";
});

let btnXPopupForm = document.querySelector(".header-form> button");

btnXPopupForm.addEventListener("click", () => {
  document.querySelector(".container-form").style.display = "none";
  document.body.style.overflow = "initial";
});
