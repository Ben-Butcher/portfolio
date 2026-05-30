const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");
const heroH1 = document.getElementById("hero");
const pageNavigation = document.querySelector(".page-navigation");
const modeToggleContainer = document.querySelector(".mode-toggle-container");
const body = document.getElementById("body");
const mainContainer = document.getElementById("main");
// pages objects
const heroPageObj = {
  title: "Ben Tembe",
  description:
    "I write code to make the lives of people who can't write code easier",
};
window.addEventListener("load", () => {
  const m = localStorage.getItem("darkMode");
  if (m !== null) {
    body.classList.add(m);
    lightMode.classList.add("hide");
    darkMode.classList.remove("hide");
  }
});

modeToggleContainer.addEventListener("click", changeMode);
pageNavigation.childNodes.forEach((element) => {
  element.addEventListener("click", (x) => {
    switch (x.target.attributes[1].nodeValue) {
      case "home":
        setHeroPage(heroPageObj);
        break;
      case "projects":
        heroH1.innerText = pages[1].title;
        break;
      case "skills":
        heroH1.innerText = pages[2].title;
        break;
      case "about-me":
        heroH1.innerText = pages[3].title;
    }
  });
});

function changeMode() {
  lightMode.classList.toggle("hide");
  darkMode.classList.toggle("hide");

  if (lightMode.classList.contains("hide")) {
    localStorage.setItem("darkMode", "dark-mode");
    const m = localStorage.getItem("darkMode");
    body.classList.add(m);
  } else {
    body.classList.remove("dark-mode");
    window.localStorage.removeItem("darkMode");
  }
}

function setHeroPage(obj) {
  const heroContainer = document.createElement("div");
  const h1El = document.createElement("h1");
  const pEl = document.createElement("p");

  h1El.innerText = obj.title;
  pEl.innerText = obj.description;

  heroContainer.classList.add("hero-container");
  heroContainer.appendChild(h1El);
  heroContainer.appendChild(pEl);

  mainContainer.append(heroContainer);
}
