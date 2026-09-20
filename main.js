const userName = prompt("Enter you name");
const userAge = prompt("Enter you age");
const userGender = prompt("Enter you gender");

let male = true;
let valid = false;

if (userGender == "Male") {
  console.log("welcome Mr. " + userName);
} else if (userGender == "Femal") {
  console.log("welcome Ms. " + userName);
  male = false;
} else document.write("welcome  " + userName);

if (userAge >= 16) {
  var userChoise = prompt(
    "Please enter one of them (Burger, Shawarma , Zinger) ",
  );
  if (
    userChoise == "Burger" ||
    userChoise == "Shawarma" ||
    userChoise == "Zinger"
  ) {
    alert("Your order is being prepared");
    valid = true;
  } else {
    alert(".Invalid order. Please try again");
  }
}
if (userAge >= 18 && valid) {
  alert("Order confirmed");
} else if (userAge < 18 || !valid) {
  alert("Order requires verification");
}
if (male) document.write("<h3>Welcome Mr. " + userName + "</h3>");
else {
  document.write("<h3>Welcome Ms. " + userName + "</h3>");
}

document.write("<h5>you gender is " + userGender + "</h5>");
document.write("<h5>you age is " + userAge + "</h5>");
document.write("<h5>you order is " + userChoise + "</h5>");
if (valid) document.write("<h5>you order status is not valid </h5>");
else document.write("<h5>you order status is valid</h5>");
