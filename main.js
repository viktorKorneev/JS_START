let sum = +prompt("Укажите стартовую сумму", 1000);
const persent = 15;
const result = 2000;

let count = 0;

const depositTerm = +prompt("Укажите срок у депозита", 10);

while (count < depositTerm) {
  sum = sum + sum * (persent / 100);
  count = count + 1;
  document.write(count + ": " + sum + "<br>");
}
