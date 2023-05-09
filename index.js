const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");

menuIcon.addEventListener("click", () => {
  if (menu.classList == "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
