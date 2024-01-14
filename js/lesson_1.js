//======Завдання 1==========
//  Напишіть програму, яка отримає від користувача число(кількість хвилин)
// і виведе у консоль рядок у форматі годин та хвилин
// 70 === 01: 10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

/* const globalMinutes = 249;
const minute = String(globalMinutes%60).padStart(2,0); // 2 це кількість символів, 0 це то чим заповнює якщо пусто
const hod = String(parseInt(globalMinutes / 60)).padStart(2,0);     
console.log(minute);
console.log(hod);
const message = `${hod}:${minute}`;
console.log(message); */


//======Завдання 2==========
//  Напишіть цикл, який виводить у консоль числа від max до min у порядку зменшення.
// У консоль виведіть усі парні числа від max  до min

/* const min = 20;
const max = 45;
let message = "Початок";
for (let i = max; i >= min; i--){
    message += ` ${i}`;
}
console.log(message); */


//======Завдання 3==========
// За допомогою цикла for додайте всі парні числа від min до max

/* const max = 50;
const min = 0;
let message = "Початок ";
for (let i = min; i <= max; i++){
    if (i % 2 === 0&&i !==0) {
        message += ` ${i}`;
    }
}
console.log(message); */


//======Завдання 4==========
// При завантаженні сторінки користувачу пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення змінної total.
// Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.

/* let num = prompt("Уведіть число");
let total = 0;
while (num) {
    if (isNaN(num)) {
        alert("Увели не валідні дані")
        break;
    } else {
        total += Number.parseInt(num);
        num = prompt("Уведіть число");
    }
}
alert(total); */


//======Завдання 5==========
//Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо користувач вводить "Адмін", то prompt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
//     вивести рядок "Відмінено"
//     У іншому випадку вивести рядок "Я вас не знаю!"

// Пароль перевіряти так:
// якщо введено пароль "Я головний", то вивести "Вітаю!",
//     у іншому випадку виводити рядок "Невірний пароль!".

/* const userInput = prompt("Уведіть логін");
if (userInput != null && userInput==="Адмін") {
    const password = prompt("Уведіть пароль");
    if (password === "Я головний" && password !== null) {
        alert("Вітаю!");
    }
    else {
        alert("Відмінено")
    }
   
}
else { 
    alert("Я вас не знаю!")
        } */


//======Завдання 6==========
//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

/* let message = prompt("Уведи число більше 100");
message = Number(message);
while (message < 100 && message !== null) {
    message = prompt("Уведіть ще раз");
} */


//======Завдання 7==========
// У змінній  min лежить число від 0 до 59.
// Потрібно визначити, в яку чтверть години потрапить це число(в першу, другу, третю або четверту)

/* let message = prompt("Уведіть кількість хвилин");
message = Number(message);
if(message >= 0 && message <= 14) {
    alert("Перша чверть");
}
else if (message > 14 && message <= 29) { 
    alert("Друга чверть");
}
else if (message > 29 && message <= 44) {
    alert("Третя чверть");
 }
else if (message > 44 && message <= 59) {
    alert("Четверта чверть");
}
else {
    alert("Помилка")
}
  */


//======Завдання 8==========
//Дано рядок, який складається із символів.Наприклад, 'abcde'.
//     Перевірте, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

/* const string = 'abcde'
const string2 = 'bcde'
function name(str, litera) {
    if (str[0] === litera) {
        return `Так`
    } else {
        return `Немає`
    }
}
console.log(string,name(string,"a"));
console.log(string,name(string,"b")) */


// todo Напиши скрипт, який для об'єкта user послідовно:
//   - додасть поле mood зі значенням 'happy'
//   - замінить hobby на 'skydiving'
//   - замінить значення premium на false
//   - виводить вміст об'єкта user у форматі ключ:значення,
// використовуючи Object.keys() і for...of


/* const user = {
  name: 'John',
  age: 20,
  hobby: 'tennis',
  premium: true,
}
user.mod = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
  console.log(` ${key} : ${user[key]}`);
} */


// todo У нас є об'єкт, у якому зберігаються заробітні плати команди.
// Напишіть код для отримання суми усіх зарплат і збережіть його результат у змінній sum
// Якщо об'єкт salaries порожній, то результат повинен бути 0



/* const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
}

let sum = 0;
for (const key of Object.values(salaries)) {
  sum += key;
}
console.log(sum); */


// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта



/* const stonesArray = [
  { name: 'Ізумруд', price: 1300, quantity: 4 },
  { name: 'Брилліант', price: 2700, quantity: 6 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 150, quantity: 100 },
]

const calcTotalPrice = (stones, stonesName) => {
  for (const ston of stones) {
    if (ston.name === stonesName) {
       console.log(`${ston.name} quantity : ${ston.quantity} , price:${ston.price * ston.quantity}`);
      break;
}
      else {
      console.log(`не знайдено ${stonesName}`);
      
  }
  }
}
calcTotalPrice(stonesArray, 'Щебінь'); */



// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}


/* function updateObject(obj, ...keysToRemove) {
  const updatedObject = {};
  for (const key in obj) {
    if (!keysToRemove.includes(key)) {
      updatedObject[key] = obj[key];
    }
  }
  console.log(updatedObject);
}
updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a'); */


// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null
// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

/* const clean = (arr) => {
const newArr = [];
for (const item of arr) {
    if (item) {
    newArr.push(item);
    }
}
console.log(newArr);
}
clean([0, 1, false, 2, undefined, '', 3, null]) */

//через фільтер

/* const newArr = [0, 1, false, 2, undefined, '', 3, null].filter(item => item);
console.log(newArr); */



// Напишіть функцію, яка розвертає масив у зворотньому напрямку.Метод reverse() не використовувати
const arrNumber = [4, 5, 3, 1, 2]


/* const revArr = (arr) => {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result;
};
console.log(arrNumber, "початковий масив")
console.log(revArr(arrNumber),"обернений масив"); 
*/




// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [1,2,3]





// Напишіть фукнцію, яка порівнює два масиви і повертає true, якщо вони ідентичні
// Очікується([1, 2, 3], [1, 2, 3]) => true
// Очікується([4, 5, 5], [1, 2, 3]) => false
// Очікується([4, 5, 5,6,7], [1, 2, 3]) => false

/* const result = (arr1, arr2) => {
    let res;
    for (const elem of arr1) {
        if (arr2.includes(elem)) {
            res =true;
        } else {
            res =false;
        }
    }
    return res;
}
console.log(result([1, 2, 3], [1, 2, 3]));  //true
console.log(result([4, 5, 5], [1, 2, 3]));  //false
console.log(result([4, 5, 5,6,7], [1, 2, 3])); //false */




// Напишіть функцію, яка перетворює глибокий масив в одномірний. Не використовувати array.flat()
// Очікується[1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

/* const simpleArr = (array) => {
    return array.reduce((acum, elem) => acum.concat(Array.isArray(elem) ? simpleArr(elem) : elem), []);
}

console.log(simpleArr([1, 2, [3, 4, [5]]])); // жестока задачка */






/* const scores = [5, 4, 1, 22, 23, 21, 3]
console.log(scores.concat(777)) */
// виведе  [5, 4, 1, 22, 23, 21, 3, 777]