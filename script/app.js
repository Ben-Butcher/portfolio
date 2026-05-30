const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");
const heroH1 = document.getElementById("hero");
const pageNavigation = document.querySelector(".page-navigation");
const modeToggleContainer = document.querySelector(".mode-toggle-container");

// pages objects
const heroPageObj = {
  title: "Ben Tembe",
};
window.addEventListener("load", () => {
  const m = localStorage.getItem("darkMode");
  if (m !== null) {
    document.getElementById("body").classList.add(m);
    lightMode.classList.add("hide");
    darkMode.classList.remove("hide");
  }
});

modeToggleContainer.addEventListener("click", changeMode);
pageNavigation.childNodes.forEach((element) => {
  element.addEventListener("click", (x) => {
    switch (x.target.attributes[1].nodeValue) {
      case "home":
        heroH1.innerText = pages[0].title;
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
    document.getElementById("body").classList.add(m);
  } else {
    document.getElementById("body").classList.remove("dark-mode");
    window.localStorage.removeItem("darkMode");
  }
}
