function Display() {
  let userName = document.getElementById("userName").value;

  let userChoice = document.getElementsByClassName("choice")[0].value;

  let htmlEle = document.querySelector("#toDisplay");

  htmlEle.textContent =
    "Hello [" + userName + "]! Your order is [" + userChoice + "]";
}

function changeColor(){
    let button = document.getElementById("submitButton")

    button.style.backgroundColor="black"
    button.style.color="white"
} 

function resetColor(){
    let button = document.getElementById("submitButton")

    button.style.backgroundColor="white"
    button.style.color="black"
} 