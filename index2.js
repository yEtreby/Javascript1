// function checkTemperature() {
//   let temperature = Number(window.prompt("Enter the temperature:"));
//   if (temperature >= 30) {
//     weather = "hot";
//   } else {
//     weather = "cold";
//   }
// }

function checkTemperature() {
  let temperature;
  let validInput = false;

  while (validInput == false) {
    let input = window.prompt("Enter the temperature:");
    temperature = Number(input);

    if (!isNaN(temperature)) {
      validInput = true;
      if (temperature >= 30) {
        weather = "hot";
      } else {
        weather = "cold";
      }
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  }
}

checkTemperature();
let input = document.getElementById("temp");
input.textContent = "temperature is " + weather;
