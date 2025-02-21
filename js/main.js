const darkmode = document.getElementById("dark-mode");
const lightmode = document.getElementById("light-mode");
const bodyElement = document.querySelector("body");

//The following lines from 8-13, 18 and 23 was adapted from https://chatgpt.com/share/67b87c16-8544-8005-9408-5d5043093857

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  bodyElement.style.backgroundColor = "#FFC067";
} else {
  bodyElement.style.backgroundColor = "#f5f4e0";
}

//Event listeners

darkmode.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#FFC067";
  localStorage.setItem("theme", "dark");
});

lightmode.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#f5f4e0";
  localStorage.setItem("theme", "light");
});
