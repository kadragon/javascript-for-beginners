function getClock() {
  const date = new Date();
  const christmas = new Date(date.getFullYear().toString() + "-12-25 00:00");

  const remindTime = (christmas - date) / 1000;
  let calcTime = [
    remindTime / 60 / 60 / 24,
    (remindTime / 60 / 60) % 24,
    (remindTime / 60) % 60,
    remindTime % 60,
  ];

  calcTime = calcTime.map(function (element) {
    element = Math.floor(element);
    if (element < 10) {
      return "0" + element;
    }
    return "" + element;
  });

  return calcTime;
}

function print() {
  const day = document.querySelector("#day");
  const hour = document.querySelector("#hour");
  const minutes = document.querySelector("#minutes");
  const second = document.querySelector("#second");

  const calcTime = getClock();

  day.innerText = calcTime[0];
  hour.innerText = calcTime[1];
  minutes.innerText = calcTime[2];
  second.innerText = calcTime[3];
}

setInterval(print, 1000);

print();
