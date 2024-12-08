alert("Welcome to my site");

do {
  userInput = window.prompt("Please enter your name:");
} while (!userInput || !isNaN(userInput));
do {
  userInput2 = Number(window.prompt("Enter your birth year:"));
  if (userInput2 > 2010) {
    alert("You are below 2010");
    flag = false;
  }
} while (!userInput2 || isNaN(userInput2));

let msg = document.getElementById("name");
msg.textContent = "welcome " + userInput;
let msg2 = document.getElementById("birth");
msg2.innerHTML += userInput2;
let msg3 = document.getElementById("name2");
msg3.innerHTML += userInput;
function calcAge() {
  let msgAge = document.getElementById("age2");
  let age = 2024 - userInput2;
  msgAge.innerHTML += age;
}
calcAge();
