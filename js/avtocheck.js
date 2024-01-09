/* const colors = [
  { hex: "#f44336", rgb: "244,67,54", numb:1},
  { hex: "#2196f3", rgb: "33,150,243",numb:2 },
  { hex: "#4caf50", rgb: "76,175,80", numb:3 },
  { hex: "#ffeb3b", rgb: "255,235,59", numb:7 },
];

const hexColors = [];
const rgbColors = [];
const numbers=[]
for(const item of colors){
    hexColors.push(item.hex) //проходить по всім hex
    rgbColors.push(item.rgb) //проходить по всім rgb
    numbers.push(item.numb) //проходить по всім numb
}
console.log(hexColors);  //['#f44336', '#2196f3', '#4caf50', '#ffeb3b']
console.log(rgbColors); //['244,67,54', '33,150,243', '76,175,80', '255,235,59']
console.log(numbers)  //[1, 2, 3, 7] */

// Ітерація по елементам масиву, коли там об'єкти


// Пошук об'єкта за значенням

/* const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
];
console.log(books)

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
	if(book.author === authorToSearchFor) {
		console.log(book);
		console.log(book.title)
	}
} */


// Колекція значень

/* function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const propValues = [];                     // пустий масив

  for (const item of products) {             // цикл for..of перебирає елементи
    if (propName in item) {                  // перевіряє умову чи наявний propName у айтемаи
      propValues.push(item[propName]);       // якщо є то пушить його
    }
  }
  console.log(propValues);
  return propValues;
}
getAllPropValues("name");
getAllPropValues("quantity");
getAllPropValues("price"); */

//замикання

/* function createNewSum(n) {
  return function () {
    console.log(10 * n);
  }
}
const calc = createNewSum(5);
calc(); */

/* function createNewNumber(n) {
  return function (num) {
    return n + num;
  }
}
const addFive = createNewNumber("Я тут перший");
console.log(addFive(", а я другий")); //Я тут перший, а я другий */


/* function createUrl(domain) {
  return function (url) {
   return `http://${url}.${domain}`
 } 
}

const comUrl = createUrl("com");
console.log(comUrl("google")); //http://google.com
console.log(comUrl("facebook")); //http://facebook.com
console.log(comUrl("instagram"));//http://instagram.com */

//this

//global this
/* function hello() {
  console.log("Hello", this);
} */
//hello();

/* const user = {
  name: "Ivan",
  city: "Odessa",
  sayHello: hello,
};

user.sayHello(); */


/* const user = {
  name: "Ivan",
  age: 30,
  sayHelloWindow: hello.bind(window),
  info: function () {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`)
  }
}
user.info(); //виводимо інфу

const Ann = {
  name: "Anna",
  age: 23,
}
user.info.bind(Ann)(); //це нова функція */

/* const fnB =(number)=> console.log(`This number is ${number}`)
fnB(8); */


/* const summa = (a, b) => console.log(a + b);
summa(8, 12); */

/* const add = (a, b, c) => a + b + c;
console.log(add(5, 4, 9));
 */


/* function calc(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

calc(2, 3, (x, y) => {
  const arr = [];
  arr.push(x, y);
  return arr;
});

 */

/* const numbers = [5, 10, 15, 20, 25];
let total = 0;
numbers.forEach(element => total += element);
console.log(total);
 */

/* const logItems = (item) => item.forEach((element, index) => console.log(`${index + 1} - ${element}`));
logItems(["Mango", "ananas", "babanas"]); */


/* const printContactsInfo = ({ names, phones }) => {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
nameList.forEach((elem, index) => console.log(`${elem} -- ${phoneList[index]}`));
}

    printContactsInfo({
      names: "Мар'янка,Іванко,Дідо,Баба",
      phones: "987,453,111,321"
    }); */




/* const calculateAverage = (...args) => {
  let total = 0;
  args.forEach(elem => total += elem);
  return total / args.length;
  
};

console.log(calculateAverage(1, 2, 3, 4));
console.log(calculateAverage(14, 8, 2));
console.log(calculateAverage(27, 43, 2, 8,36)); */



/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

/* const allCars = [
  { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
  { make: "Honda", model: "Accord", amount: 2, price: 22455 },
  { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
  { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
  { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
  { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
  { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
  { make: "Ford", model: "F-150", amount: 11, price: 27110 },
  { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
  { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
]; */
/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */

/* const makeCarsWithDiscount = (cars, discount) => {
  return cars.map(car => {
    return {
      ...car,
      price: car.price - (car.price * discount),
    }
  })
}

console.table(makeCarsWithDiscount(allCars, 0.2));
console.table(makeCarsWithDiscount(allCars, 0.4)); */


/* const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
console.table(players);
 */
/*
 * Збільшуємо кількість годин гравця за id
 */

/* const playerIdToUpdate = "player-3";
const updatedPlayers = players.map((player) => {
  if (player.id === playerIdToUpdate) {
    player.timePlayed *=2;
  }
  return player;
})

console.table(updatedPlayers); */


/* const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];


tweets.forEach(
  ({id, likes}) => console.log(id, likes)
)
const tags = tweets.flatMap(t => t.tags);
console.log(tags); */
