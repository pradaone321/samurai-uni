
const btn = document.getElementById("btn");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#menu a");

btn.addEventListener("click", () => {
  btn.classList.toggle("on");
  menu.classList.toggle("on");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    btn.classList.toggle("on");
    menu.classList.toggle("on");
  });
});