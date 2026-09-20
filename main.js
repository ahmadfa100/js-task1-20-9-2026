const userName = prompt("Enter your name");
const userAge = Number(prompt("Enter your age"));
const userGender = prompt("Enter your gender (Male / Female)");

let userChoise = "No order";
let valid = false;


if (userGender === "Male") {

    document.write("<h3>Welcome Mr. " + userName + "</h3>");

} else if (userGender === "Female") {

    document.write("<h3>Welcome Ms. " + userName + "</h3>");

} else {

    document.write("<h3>Welcome " + userName + "</h3>");

}


if (userAge >= 16) {

    userChoise = prompt(
        "Please enter one of them (Burger, Shawarma, Zinger)"
    );

    if (
        userChoise === "Burger" ||
        userChoise === "Shawarma" ||
        userChoise === "Zinger"
    ) {

        alert("Your order is being prepared");

        valid = true;

    } else {

        alert("Invalid order. Please try again");

    }

} else {

    alert("You must be at least 16 years old to place an order");

}

if (userAge >= 18 && valid) {

    alert("Order confirmed");

} else {

    alert("Order requires verification");

}

document.write("<h5>Your gender is: " + userGender + "</h5>");

document.write("<h5>Your age is: " + userAge + "</h5>");

document.write("<h5>Your order is: " + userChoise + "</h5>");

document.write("<h5>Your order status is: " + valid + "</h5>");