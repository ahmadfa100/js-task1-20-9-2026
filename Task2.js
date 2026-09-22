let food = [
  { name: "Botato", price: 2, category: "Fruit", Available: true },
  { name: "Shawarma", price: 5, category: "fast-food", Available: true },
  { name: "Onion", price: 2, category: "Fruit", Available: false },
  { name: "Tomato", price: 1, category: "Fruit", Available: false },
  { name: "Juice", price: 3, category: "Juice", Available: true },
];

function showMenu() {
  for (let i = 0; i < food.length; i++) {
    document.write("Menu : ", food[i].name + " -- ");
  }
}

showMenu();

let flag = false;
let selectedFood;

while (true) {
  let userchoice = prompt(
    "Please select a food (Botato, Shawarma, Onion, Tomato, Juice)",
  );

  function test() {
    flag = false;

    for (let i = 0; i < 5; i++) {
      if (food[i].Available == false) continue;

      if (userchoice == food[i].name) {
        flag = true;
        selectedFood = food[i];
        break;
      } else continue;
    }
  }

  test();

  if (flag) {
    for (const prop in selectedFood) {
      document.write(prop + ": " + selectedFood[prop] + "<br>");
    }
  }

  if (flag) break;
}
