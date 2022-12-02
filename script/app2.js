/* setTimeout(() => {
  console.log(1);
}, 3000);
setInterval(() => {
  console.log(1);
}, 1000); */

/* const main = document.getElementById("main");
const btn = document.getElementById("btn");
const burger = document.getElementById("burger");
function handleClick() {
  burger.classList.toggle("menu");
}
btn.addEventListener("click", handleClick); */

/* function createInput(type, labelText, divEl) {
  const inputEl = document.createElement("input");
  inputEl.type = type;
  const labelEl = document.createElement("label");
  labelEl.innerText = labelText;
  divEl.append(inputEl);
  divEl.append(labelEl);
}
const main = document.getElementById("main");
createInput("text", "user", main);
createInput("file", "foto", main);

function createDiv() {
  const divEl = document.createElement("div");
  divEl.innerText = "div";
  main.append(divEl);
}
createDiv(); */

// создание формы Филсет
/* const main = document.getElementById("main");
main.className = "main-cont"

const formElem = document.createElement("form");

const fieldsetElem = document.createElement("fieldset");
fieldsetElem.className = 'field-size'

main.append(formElem);

formElem.append(fieldsetElem);

const legendElem = document.createElement("legend");
legendElem.innerText = "legend";
fieldsetElem.append(legendElem);

const divInput1 = document.createElement("div");
const divInput2 = document.createElement("div");
const divButton = document.createElement("div");
fieldsetElem.append(divInput1);
fieldsetElem.append(divInput2);
fieldsetElem.append(divButton);

const inputUser = document.createElement("input");
const inputEmail = document.createElement("input");
const buttonSubmit = document.createElement("button");
buttonSubmit.innerText = "submit";
divInput1.append(inputUser);
divInput2.append(inputEmail);
divButton.append(buttonSubmit);

const labelUser = document.createElement("label");
labelUser.innerText = "username";
divInput1.append(labelUser);

const labelEmail = document.createElement("label");
labelEmail.innerText = "Email";
divInput2.append(labelEmail); */

/* function getArr(num) {
  const arr = new Array(num).fill(undefined);
  return arr.map((_, index) => 2 * index + 1);
}
console.log(getArr(5));
function sum(a, b = 2) {
  return a + b;
}
console.log(sum(1)); */
/* const main = document.getElementById("main");
const hello = document.querySelector(".hello");
const hello = document.querySelectorAll(".hello");
console.log(hello);
console.log(Array.from(hello));
 */
/* const main = document.getElementById("main");
const divElem1 = document.createElement("div");
const input1 = document.createElement("input");
divElem1.innerText = "hello"; // добавить элемент
divElem1.id = "div1"; // добавить айди
divElem1.className = "divElemColor";
main.append(divElem1);
divElem1.append(input1);
input1.type = "text";
const divElem2 = document.createElement("div");
divElem2.id = "div2";
const input2 = document.createElement("input");
input2.type = "checkbox";
divElem2.append(input2);
 */
/* main.prepend(input1); //поднимает вверх
main.append(divElem1); // опускает вниз */
