function Display() {
  let userName = document.getElementById("userName").value;
  let userChoice = document.getElementsByClassName("choice")[0].value;
  htmlEle = document.querySelector("#toDisplay");
  htmlEle.textContent =
    "Hello [" + userName + "]! Your order is [" + userChoice + "]";
}

let button = document.querySelector(".button")
button.onmouseover()