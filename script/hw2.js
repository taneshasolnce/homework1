"use strict";
// 1 задание
const name = prompt("Ваше имя?");
const surname = prompt("Ваша фамилия?");
const nickname = prompt("Ваш никнейм?");
if (name) {
  alert(`Добро пожаловать, ${name + surname}`);
  console.log(name + surname);
}
