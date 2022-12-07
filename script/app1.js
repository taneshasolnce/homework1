"use strict";
// 1 задание
/* const text = prompt(`введите текст`);
alert(`{введенный текст}`);
console.log(text); */

// 2 задание
/* const num1 = +prompt(`введите первое число `, 2);
const num2 = +prompt(`введите второе число `, 3);
const sum = alert(`${num1 + num2}`);
console.log(num1 + num2); */

// 3 задание
/* const name = prompt(`Ваше имя?`);
const age = prompt(`Ваш возраст?`);
if (age > 17) {
  alert(`Добро пожаловать, ${name}!`);
} else {
  alert(`Простите, доступ закрыт, ${name}!`);
} */

// 4 задание
const divName = confirm(`Хотите ввести название блока?`);
if (false) {
  confirm(`элементу не присвоен класс`);
} else {
  prompt(`Название блока`);
}
const element = confirm(`Хотите ввести название элемента?);
if (false) {
  console.log(`Название блока`);
} else {
  prompt(`название элемента`);
} 
 const modif = confirm(`Хотите ввести название модификатора?`);
if (true) {
  prompt(`название элемента`);
  console.log(`${divName + element + modif}`);
} else {
  console.log(`${divName + element}`);
}