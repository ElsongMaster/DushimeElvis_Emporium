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

let navNode;
let NavBar_Node = document.querySelector(".NavBar");
let container_NavBar = document.querySelector(".container_NavBar");
document.addEventListener("scroll", () => {
  navNode = document.querySelector("nav");
  // console.log(window.pageYOffset);
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

//mode nuit

let btn_DayMode = document.querySelector(".day_mode");
let btn_NightMode = document.querySelector(".night_mode");

btn_DayMode.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  navNode.style.backgroundColor = "white";

  container_NavBar.classList.remove("color_white");
  Array.from(container_NavBar.querySelectorAll("li>a")).forEach((elt) => {
    elt.classList.remove("color_white");
  });
});

btn_NightMode.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  navNode.style.backgroundColor = "black";
  container_NavBar.classList.add("color_white");
  Array.from(container_NavBar.querySelectorAll("li>a")).forEach((elt) => {
    elt.classList.add("color_white");
  });
});
