const title = ["My name is Ben", "I am a full stack developer"];
const body = document.querySelector("body");

window.addEventListener("load", () => {
  const toggleContainer = document.querySelector(".toggle");

  toggleContainer.addEventListener("click", () => {
    if (!toggleContainer.children[0].classList.contains("hide")) {
      toggleContainer.children[0].classList.add("hide");
      toggleContainer.children[1].classList.remove("hide");
      body.classList.add("dark-mode");
    } else {
      toggleContainer.children[0].classList.remove("hide");
      toggleContainer.children[1].classList.add("hide");
      body.classList.remove("dark-mode");
    }
  });
});
