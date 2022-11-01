const maxNumber = document.querySelector("#maxGuess-form input");
const playerNumber = document.querySelector("#player-form input");

function display() {
  const target = document.querySelector(".hidden");
  if (target != null) {
    target.className = "";
  }
}

function answer(a, b) {
  const playNumber = document.querySelector("#playNumber");
  const machineNumber = document.querySelector("#machineNumber");

  playNumber.innerText = a;
  machineNumber.innerText = b;

  const result = document.querySelector("#result");

  if (a == b) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

function handler(event) {
  event.preventDefault();

  const maxNumber = document.querySelector("#maxGuess-form input").value;
  const playerNumber = document.querySelector("#player-form input").value;

  if (isNaN(maxNumber) || maxNumber < 0 || maxNumber === "") {
    alert("0 이상의 생성 값을 입력해주세요.");

    return;
  }

  if (isNaN(playerNumber) || playerNumber < 0 || playerNumber === "") {
    alert("0 이상의 선택 값을 입력해주세요.");

    return;
  }

  const machineGuess = Math.round(Math.random() * maxNumber);

  console.log(maxNumber, ":", playerNumber, ":", machineGuess);

  display();
  answer(playerNumber, machineGuess);
}

const playButton = document.querySelector("#play");

playButton.addEventListener("click", handler);

//Math.floor(Math.random() *
