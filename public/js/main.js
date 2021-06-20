let tabSlides = Array.from(document.querySelectorAll(".container-slide"));
let container_caroussel = document.querySelector(".container-caroussel");
let navNode = document.querySelector("nav");

let NavBar_Node = document.querySelector(".NavBar");
let container_NavBar = document.querySelector(".container_NavBar");
let tabRondPoint = Array.from(
  document.querySelectorAll(".container-RondPointer >a")
);
let container_card = document.querySelector(".container_card");
let checkpoint = document.querySelector(".caroussel ").offsetTop - 75;
let opacity = 0;
let currentScroll;
let tabSpanRondPoint = Array.from(document.querySelectorAll(".rondPointer"));
console.log(tabSpanRondPoint);
let btn_DayMode = document.querySelector(".day_mode");
let btn_NightMode = document.querySelector(".night_mode");
let tabP = Array.from(document.querySelectorAll(".description_text>p"));
//NavBar partie dynamique

let barsElt = document.querySelector(".fa-bars");
let listElt;
let containerList;
console.log(document.body.offsetWidth);
barsElt.addEventListener("click", () => {
  listElt = barsElt.nextElementSibling;
  //   containerList = document.createElement("div");
  //   containerList.append(barsElt,listElt);

  listElt.classList.toggle("show");
  console.log(listElt);
  //   listElt.classList.toggle("invisible");
});

window.addEventListener("resize", () => {
  offsetL = Math.round(
    Math.abs(tabSlides[0].offsetLeft) + container_caroussel.offsetLeft
  );

  tabSlides.forEach((elt) => {
    elt.setAttribute("style", `transform: translateX(${offsetL}px)`);
  });
  tabSlides.forEach((elt) => {
    elt.style.width = Math.floor(container_caroussel.offsetWidth / 4) - 70;
  });
  let ulList = document.querySelector(".NavBar");
  if (window.innerWidth > 526) {
    ulList.classList.remove("show");
  }
});

//NavBar fixed au scroll

//Effet fade in sur les cartes

let fadeInCard = () => {
  currentScroll = window.pageYOffset;
  if (currentScroll >= checkpoint) {
    opacity += currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  container_card.style.opacity = opacity;
};

window.addEventListener("resize", () => {
  if (window.offsetWidth <= 600) {
    checkpoint = document.querySelector(".caroussel ").offsetTop - 75;
  } else {
    checkpoint = document.querySelector(".caroussel ").offsetTop;
  }
  let container_btnConnexion = document.querySelector(
    ".container_btnConnexion"
  );
  if (document.body.offsetWidth > 525 && document.body.offsetWidth < 930) {
    console.log("dans ma condition");

    container_btnConnexion.classList.add("mg-right");

    container_NavBar.classList.add("flex-directionColumn");
  } else {
    container_btnConnexion.classList.remove("mg-right");
    container_NavBar.classList.remove("flex-directionColumn");
  }
});
window.addEventListener("scroll", () => {
  fadeInCard();
  navNode = document.querySelector("nav");
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
    }
  }
});

tabRondPoint.forEach((elt) => {
  elt.addEventListener("mouseover", () => {
    elt.classList.add("border_fichua");
  });
});

tabRondPoint.forEach((elt) => {
  elt.addEventListener("mouseout", () => {
    elt.classList.remove("border_fichua");
  });
});
//mode nuit

btn_DayMode.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  navNode.style.backgroundColor = "white";
  container_NavBar.classList.remove("color_white");
  Array.from(container_NavBar.querySelectorAll("li>a")).forEach((elt) => {
    elt.classList.remove("color_white");
  });
  tabP.forEach((elt) => {
    elt.classList.remove("color_white");
  });
  tabRondPoint.forEach((elt) => {
    elt.style.border = " solid white";
  });

  document.querySelector(".fa-bars").style.color = "black";

  if (document.body.offsetWidth <= 525) {
    document.querySelector(".fa-bars").style.border = " 4px solid black";
    tabSpanRondPoint.forEach((elt) => {
      elt.style.border = "1px solid black";
    });
  } else {
    tabSpanRondPoint.forEach((elt) => {
      elt.style.border = "2px solid black";
    });
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
  tabRondPoint.forEach((elt) => {
    elt.style.border = " solid black";
  });
  if (document.body.offsetWidth <= 525) {
    document.querySelector(".fa-bars").style.border = " 4px solid white";
    tabSpanRondPoint.forEach((elt) => {
      console.log(elt);
      elt.style.border = "1px solid white";
    });
  } else {
    tabSpanRondPoint.forEach((elt) => {
      elt.style.border = "2px solid white";
    });
  }
});

//Caroussel
let offsetL;
window.addEventListener("load", () => {
  fadeInCard();

  offsetL = Math.round(
    Math.abs(tabSlides[0].offsetLeft) + container_caroussel.offsetLeft
  );

  tabSlides.forEach((elt) => {
    elt.setAttribute("style", `transform: translateX(${offsetL}px)`);
  });
});

let previousRondPoint = tabRondPoint[0];
let widthElt = tabSlides[0].offsetWidth;

let initial = Math.round(
  Math.abs(tabSlides[0].offsetLeft) + container_caroussel.offsetLeft
);
let widthContainer = document.querySelector(".container-caroussel").offsetWidth;
let nbEltContainer = Math.floor(widthContainer / widthElt);
let nbOffsetTranslet = Math.floor(widthContainer / 7);
let limitOffset = nbOffsetTranslet * 7;
let differenceIndice;
let currentIndice;
let previousIndice;
let translateSlide = (tabSlides, tabRondPoint, rondPoint) => {
  if (previousRondPoint != rondPoint) {
    previousIndice = tabRondPoint.indexOf(previousRondPoint) + 1;
    currentIndice = tabRondPoint.indexOf(rondPoint) + 1;
    differenceIndice = Math.abs(previousIndice - currentIndice);
    if (currentIndice < previousIndice) {
      // initial += nbOffsetTranslet * differenceIndice + 20;
      initial += 300;
    } else {
      initial -= 300;
      // initial -= nbOffsetTranslet * differenceIndice + 10;
    }

    previousRondPoint = rondPoint;
    tabSlides.forEach((elt) => {
      console.log(initial);
      elt.setAttribute("style", `transform: translateX(${initial}px)`);
    });
  }
};

//ecoute des liens

tabRondPoint.forEach((elt) => {
  elt.addEventListener("click", (e) => {
    e.preventDefault();

    translateSlide(tabSlides, tabRondPoint, elt);
  });
});

let list_btnForm = document.querySelectorAll(".btn-centrum>button");
let form_connexion = document.querySelector("form.connexion");
let form_inscription = document.querySelector("form.inscription");

list_btnForm[0].addEventListener("click", () => {
  form_connexion.style.display = "block";
  form_inscription.style.display = "none";
  if (!Array.from(list_btnForm[0].classList).includes("active_btn")) {
    list_btnForm[0].classList.add("active_btn");
  }
  list_btnForm[1].classList.remove("active_btn");
});

list_btnForm[1].addEventListener("click", () => {
  form_connexion.style.display = "none";
  form_inscription.style.display = "block";
  if (!Array.from(list_btnForm[1].classList).includes("active_btn")) {
    list_btnForm[1].classList.add("active_btn");
  }
  list_btnForm[0].classList.remove("active_btn");
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
