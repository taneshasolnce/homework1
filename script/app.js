//"use strict";
// 7 занятие
/* const arr = [1, 2, 3];
//console.log(Array.isArray(arr)); //проверить явл. ли массивом
const a = "hello";
const b = Array.from(a);
const c = [...a];
console.log(c);
const arrNum = [1, 1, 2, 3, 1];
const arrWithoutDublicate = [...new Set(arrNum)];
console.log(arrWithoutDublicate);
const arrLikeInJava = new Array(3).fill(undefined);
console.log(arrLikeInJava); */
/* let a = 3.6;
console.log(Math.floor(a)); // округляет в меньшую сторону
console.log(Math.ceil(a)); // в большую
console.log(Math.round(a)); // в большую
console.log(Math.abs(1 - 3)); // диапозон
console.log(Math.min(1, 3, 5)); // выводит меньшее
console.log(Math.max(1, 3, 5));
console.log(Math.max(...[1, 3, 5]));  */ // выводит большее в массиве через спред

/* function getName(arr) {
  const firstLetter = arr
    .map((i) => i.trim())
    .slice(0, 1)
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
  return firstLetter;
}
console.log(getName(["Dima", "Oleg", "Julia"])); */

// 6 занятие
/* function getNum(str) {
  const strSplit = str.split("");
  const arr = [];
  // return strSplit.filter((i) => i % 2 === 0).map((i) => +i);
  for (let i = 0; i <=
     strSplit.length; i++) {
    if (strSplit[i] % 2 === 0) {
      arr.push(strSplit[i]);
    }
  }
  return arr.sort((a, b) => a - b);
}
console.log(getNum("12345"));
 */
/* let str = "cat";
console.log(str.trim());
console.log(str.repeat(2));
function customRepeat(str, num) {
  let res = [];
  for (let i = 0; i < num; i++) {
    res.push(str);
  }
  return res.join("");
}
let res = "";

  for (let i = 0; i < num; i++) {
    res += str;
  }
  return res;
console.log(customRepeat("cat", 2));
 */
/* const obj = {
  id: 1,
  name: "Dima",
  age: 1,
  getHello() {
    return `hello ${this.name}`;
  },
  getAge: () => {
    return `age ${this.age}`;
  },
};
console.log(obj.getHello()); */

/* const movies = [
  {
    title: "Saw",
    rating: 5,
    genre: "horror",
  },
  {
    title: "Titanik",
    rating: 3,
    genre: "romantic",
  },
  {
    title: "Mad Max",
    rating: 4,
    genre: "action",
  },
];
const sortRating = movies.sort((a, b) => a.rating - b.rating);
const getAction = movies.filter((movie) => movie.genre === "action");
//const arr = [...movies] скопировать
const getSaw = movies.map(({ title, rating, genre }) => {
  if (
    title.toUpperCase() === "Saw".toUpperCase() &&
    rating === 5 &&
    genre === "horror"
  ) {
    title = null;
  }
  return title, rating, genre;
});
console.log(getSaw);
console.log(sortRating);
console.log(getAction);
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Object.entries(obj));
console.log(Object.is(0, 0));
console.log(new.Date());
const { a, b, c } = obj;
console.log(a); */

// 5 занятие
/* function getStr(str) {
  console.log(str);
  const upperFirstLetter = str.slice(0, 1).toUpperCase();
  console.log(upperFirstLetter);
  const letterLower = str.slice(1);
  return upperFirstLetter + letterLower;
}
console.log(getStr("hello"));
const str = "hello";
console.log(str.includes("h"));
console.log(str.startsWith("h"));
console.log(str.endsWith("h"));
console.log(str.split("").reverse().join("")); */
/* const arr = [2, 3, 6];
let count = 1;
for (let i = 0; i < arr.length; i++) {
  count *= arr[i];
}
console.log(count); */

/* const arr = [1, 2, 3];
let count = 1;
arr.map((item, index) => (count *= index));
//console.log(arr.map((item) => item));
console.log(count); */
/* const arr = ["home", "about us", "info"];
const arr1 = arr.map((i) =>)
arr.map((i) => {
  return i.slice(0, 1);
}); */
/* const arr = [2, 3, 1, 0, NaN, false, "", null];
console.log(arr.filter(Boolean)); */
/* const arr = [2, 3, 1, 4];
arr.unshift(20);
const a = arr.shift();
//const a = arr.pop();
console.log(a);
//arr.push(10);
console.log(arr); */
/* const arr = [[0, 0, 1, 1, 0, 0, 1]];
//const newArr = arr.flat().filter(Boolean).length;
const newArr = arr.reduce((a, b) => {
  return a + b;
}, 3);
console.log(newArr); */

//const arr = ["home", "about", 1];
/* const arr = [2, 3, 1, 1000000];
console.log(arr.sort((a, b) => a - b)); */
//console.log(arr.sort((a, b) => (a > b ? 1 : -1))); как сортировать
//console.log(arr.filter((i) => i === "about"));
//console.log(arr.sort());
/* const arr1 = [1, 2, 3];
console.log(arr + arr1);
console.log([] + {}); Object получается
arr.forEach((item) => console.log(item));
console.log([...arr1, ...arr]);
console.log(arr.concat(arr1)); */
// 4 занятие
/* const user1 = handleMath;
console.log(user(20, 30, 2));

function handleMath(num1, num2, num3) {
  const a1 = 2;
  const pr = promt("enter number");
  const res = num1 + num2 + pr / num3;
  return res;
  return num1 + num2 + pr / num3;
  num1 + num2 + a1 + pr / num3;
}
console.log(handleMath(20, 2, 30));
const user1 = handleMath;

const arrowFunc = function() => 
const user3 = (a,b) => a+b;
console.log(user3(1,2)); */

/* (function () {
  console.log("IIFE");
})(); */

/* let a = "hello";
let b = a.toUpperCase();
console.log(a.toUpperCase());
console.log(a);
console.log(b);
console.log(arr); */
//let a = "hello";
//let b = a.slice(0, 2);
//let b = a.slice(-1).toUpperCase().length;
//console.log(b);
/* let a = "hello";
console.log(a.split("")); */
/* let a = "dima roma nick";
console.log(a.split(" ")); */

// 3 занятие
/* const arr = [1, "str", false, {}];
const arr = ["Все", "Видеоигры"];
const obj = {
  name: "Dima",
  age: 1,
  skill: {
    react: true,
    angular: true,
  },
}; */
/* const str = "string";
console.log(str.length);
console.log(arr.length) */
// while
//do while
//for
/* let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
do {
  console.log(i);
  i++;
} while (i < 5); */
/* const str = "string";
for (let i = 0; i <= str.length; i++) {
  console.log(i, str[i]);
} */
/* const obj = {
  a: 1,
  b: 2,
  c: {
    react: true,
  },
};
const obj1 = { ...obj };
obj.c.react = 3;
/* obj.a = 3; */
/* console.log(obj1);
const obj1 = { ...obj };
const obj1 = object.assign({}, obj);
const obj1 = JSON.parse(JSON.stringify(obj)); */
/* const num = 1;
switch (num) {
  case 1:
    console.loge("1");
    break;
  case 2:
    console.loge("2");
    break;
  case 3:
    console.loge("3");
    break;
  default:
    console.loge("default");
}
const num = promt(`sydg`);
const month = num.tolowerCase();
switch (month) {
  case "may":
    console.loge("may");
}
const notStr = promt("enter number");
if (isNaN(+notStr)) {
  console.loge("string");
} else {
  console.loge("number");
}
// && ||
console.loge(1 && 2 && 3);
console.loge("" || null || false);
console.loge("" || null || (false && 2) || (5 && null && 5));

const youTube=[{
  title: 'God of War'
  date:'10.02.2023'
}] */
// 2 занятие
// + - / * ** % ++ -- ||  && += -= > < >= <=
/* console.log(5 % 2);
const num1 = 5;
const num2 = 2;
console.log(string(1));
console.log(a.toString());
console.loge(1 + "");
const a = 1;
console.log(1);
// NaN false '' undefined null 0
console.log(typeof 1); //=> 'number'
console.log(typeof typeof false); // => 'boolean'

const numOne = false;
if (!numOne) {
  console.log("one");
} else {
  console.log("else");
}
const numOne = promt("enter");
if (numOne === "hello") {
  const conf = confirm("18?");
  if (conf === true) {
    console.log("wow");
  } else console.loge("1");
}
numOne === "hello" ? console.log("yes") : console.loge("no"); */
//1 занятие
/* const text = `введите текст`;
alert(`{введенный текст}`);
prompt(`введите текст`); */

/* const userName = `имя пользователя`;
promрt (`Ваше имя?`)
const age = `возраст`;
prompt (`ваш возраст?`) */

/* console.log( +0 === -0) */
/* const str = `text`;
const dog = "Mursik";
const hello = "hello"; */
/* alert (`front-end`) */
/* prompt(`where are you from`) */
/* const whereareyoufrom = prompt(`where are you from`)
console.loge(whereareyoufrom) */
/* console.log(`${hello}  ${dog}`) */

//const var let
//= == ===
//string
//number
//bigint
//object
//underfined
//null
//symbol
