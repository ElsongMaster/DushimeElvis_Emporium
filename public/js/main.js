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
let container_NavBar = document.querySelector(".container_NavBar");
document.addEventListener("scroll", () => {
  navNode = document.querySelector("nav");
  // console.log(window.pageYOffset);
  if (window.pageYOffset == 0) {
    console.log("dans ma condition");
    container_NavBar.classList.remove("display_flex");
    navNode.classList.remove("position_fixed");
  } else {
    if (
      !Array.from(navNode.classList).includes("position_fixed") &&
      !Array.from(container_NavBar.classList).includes("display_flex")
    ) {
      navNode.classList.add("position_fixed");
      container_NavBar.classList.add("display_flex");
    }
  }
});
