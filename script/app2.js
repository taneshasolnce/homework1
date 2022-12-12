const main = document.getElementById("main");
const left = document.getElementById("left");
const right = document.getElementById("right");
const sliderImage = document.querySelector(".slider-screen");
const search = document.getElementById("search");
function handleSearch(e) {
  fetch("https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books")
    .then((res) => res.json())
    .then((data) => {
      main.innerHTML = data
        .filter((i) =>
          i.name.toUpperCase().includes(e.target.value.toUpperCase())
        )
        .map((i) => getBooks(i.name, i.price, i.imageUrl))
        .join("");
    });
}
search.addEventListener("input", handleSearch);
function slider() {
  fetch("https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books")
    .then((res) => res.json())
    .then((data) => {
      const arr = data.map((i) => i.imageUrl);
      let count = 0;
      sliderImage.innerHTML = `<img src = ${arr[count]}>`;
      right.onclick = function () {
        count++;
        sliderImage.innerHTML = `<img src = ${arr[count]}>`;
        /* if (count === arr.lenght - 1) {
          count = 0;
        } */
        if (count === 9) {
          right.disabled = true;
        }

        if (count > 0) {
          right.disabled = false;
        }
      };
      left.onclick = function () {
        count--;
        sliderImage.innerHTML = `<img src=${arr[count]}>`;
        if (count === 9) {
          left.disabled = true;
        }
        if (count === 0) {
          left.disabled = false;
        }
      };
    });
}
slider();
//https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books
/* fetch("https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message)); */
//main.innerHTML = "<h1>hello</h1><button>add</button>";можно сразу вставлять текст, кнопку
const favourite = [];
function onAdd(id) {
  const element = document.getElementById(id);
  favourite.push(element.innerHTML);
  console.log(favourite);
}

function getBooks(name, price, image, id) {
  return `<div class="card" id=${id}>
  <p>${name}</p>
  <p>${price}</p>
  <div>
    <img
      width="250"
      src=${image}
      />
  </div>
  <div>
  <button onclick="onAdd(${id})">add</button>
  </div>
</div>`;
}
function getData(data) {
  main.innerHTML = data
    .map((i) => {
      return getBooks(i.name, i.price, i.imageUrl, i.id);
    })
    .join("") // чтобы было без пробелов
    .toString(); // обязательно перейти в строку нужно
}
function books() {
  fetch("https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books")
    .then((res) => res.json())
    .then((data) => getData(data))
    .catch((err) => console.log(err.message));
}
books();

/* const inp = document.getElementById("inp");
function handleFocus() {
  //находимся в фокусе
  console.log("focus");
}
inp.addEventListener("focus", handleFocus);
function handleBlur() {
  // переход между инпутами
  console.log("blur");
}
inp.addEventListener("blur", handleBlur);
function handleChange(event) {
  console.log(e.target.value); //позволяет выводить в консоль данные с инпута
}
inp.addEventListener("input", handleChange);// собирает все данные и отображает, когда вышли из инпута
const youtube = document.getElementById("youtube");
function handleYoutube(e) {
  e.preventDefault(); // отменяет действие по-умолчанию
}
youtube.addEventListener("click", handleYoutube); */
/* const main = document.getElementById("main");
setInterval(() => {
  main.classList.toggle("hide"); это обязательно(возвращ или прячет)
}, 500); */

/* setTimeout(() => {
  console.log(1);
}, 3000); позволяет выполнить что-то через заданное время 3 сек
setInterval(() => {
  console.log(1);
}, 1000);  счетчик для часов*/

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
