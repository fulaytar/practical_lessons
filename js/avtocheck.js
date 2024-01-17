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



/* const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog', 'eel',
'rabbit', 'goose', 'earwig'];
const animalsE = animals.filter(elem => elem[0].toLowerCase()==='z');
console.log(animalsE);  */


/* const numbers = [1, 12, 3, 4, 3, 3, 4, 5];
const value = [...new Set(numbers)];
console.log(value);

const message = ['adam', 'mary', 'mary', 'victor', 'mary'];
const newMessage = [...new Set(message)];
console.log(newMessage); */

/* const fruitArray = [];
// Добавляем в fruitArray три элемента.
// Каждый из этих элементов — массив строк
fruitArray[0] = ['strawberry', 'blueberry', 'raspberry'];
fruitArray[1] = ['lime', 'lemon', 'orange', 'grapefruit'];
fruitArray[2] = ['tangerine', 'apricot', 'peach', 'plum'];
const fruitList = fruitArray.flat();
console.log(fruitList); */

/* "use strict";

const customer = {
  username: "Jacob",
	sayHello() {
		console.log(`Hello, ${this.username}!`);
  }
};

 // "Hello, Jacob!"

const greet = customer.sayHello.bind(customer);

greet(); 
 */

/* class Person {
constructor(mane, women,age_man,age_women,) {
  this.mane = mane;
  this.women = women;
  this.age_man = age_man;
  this.age_women = age_women;
  }
  getInfoMan() {
    return `Name is ${this.mane}  age ${this.age_man}`
  }
  getInfoWomen() {
    return `Name is ${this.women}  age ${this.age_women}`
  }
  changeAgeMan(age) {
    this.age_man = age;
  }
  changeAgeWomen(age) {
    this.age_women = age;
  }
  changeMane(men) {
    this.mane = men;
  }
  changeMane(man) {
    this.mane = man;
  }
  changeWomen(women) {
    this.women = women;
  }
  sumAge() {
    return this.age_man + this.age_women;
  }
  OldMenOrWomen() {
    return this.age_man>this.age_women?"Чоловік старший":"Дружина старша"
  }
}
// Проверим работу класса Person — создадим объект
// Чтобы вызвать конструктор, нужно применить к классу ключевое слово new
const famileJanos = new Person("Іван", "Мар'янка", 23,24);
console.log(famileJanos);
console.log(famileJanos.OldMenOrWomen());
const famileSister = new Person("Вася", "Валерія", 38, 31);
console.log(famileSister);
console.log(famileSister.OldMenOrWomen());
 */



/* function Person(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}
// Добавляем в прототип Person функцию, представляющую собой метод
Person.prototype.swapNames = function() {
[this.firstName, this.lastName] = [this.lastName, this.firstName];
}
const newPerson = new Person('Luke', 'Takei'); // тут додаємо свою функцію
newPerson.swapNames();
console.log(newPerson.firstName); // 'Takei'
console.log(newPerson);; */




/* class Book {
constructor(title, author, price, publishedDate) {
this.title = title;
this.author = author;
this.price = price;
this.publishedDate = publishedDate;
}
raisePrice(percent) {
const increase = this.price*percent;
this.price += Math.round(increase)/100;
return this;
}
releaseNewEdition() {
// Записываем в pulishedDate сегодняшнюю дату
this.publishedDate = new Date();
return this;
}
}
const book = new Book('I Love Mathematics', 'Adam Up', 15.99,
new Date(2023, 2, 2));
// Поднимаем цену на 15 % и меняем дату выхода книги,
// используя цепочку методов
console.log(book.raisePrice(15).releaseNewEdition());   // цепочка методів */


/* const evens = [2, 4, 6, 8];
const odds = [1, 3, 5, 7, 9];
const evensAndOdds = evens.concat(odds).sort();
console.log(evensAndOdds); */

/* 
class User {
  name;
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Публічний метод для отримання електронної пошти
  getEmail() {
    return this.#email;
  }

  // Публічний метод для зміни електронної пошти
  changeEmail(newEmail) {
    this.#validateEmail(newEmail)? this.#email = newEmail : console.log('Invalid email format');
  }

  // Приватний метод для валідації електронної пошти
  #validateEmail(email) {
    return email.includes('@');
  }
}

const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});

// Спробуємо змінити електронну пошту
mango.changeEmail('newmail.com'); // ehror
mango.changeEmail('new@mail.com'); // good job
console.log(mango.getEmail());  //new@mail.com
 */



/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */
/* const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find(element => element.name === stoneName);
    return ` Ваш камінь ${stoneName} , в наявності ${stone.quantity} за ціною ${stone.price}`
  },
};

console.log(chopShop.calcTotalPrice("Emerald")); // 5200
console.log(chopShop.calcTotalPrice("Diamond")); // 8100
console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop.calcTotalPrice("Ruby")); // 1600 */




/* const changePortfolio = function (age, job) {
  this.age = age;
  this.job = job;
}


const portfolio = {
  age: 23,
  job: "teacher of Math"
}

console.log(portfolio);
 */
/* changePortfolio.call(portfolio, 24, "Fullstack Developer"); //тут просто значення
changePortfolio.apply(portfolio,[24,"Fullstack Developer"]) //потребує масиву 
console.log(portfolio) */
/* const newFunc = changePortfolio.bind(portfolio);
newFunc(40, "developer");
console.log(portfolio); */




/* const counter = {
  value: 0,

  increment(value) {
    console.log("increment -> this", this);
    this.value += value;
  },

  decrement(value) {
    console.log("decrement -> this", this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
console.log(counter); */


/* const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";
dog.love = true;

console.log(dog)

console.log(dog.name); 
console.log(dog.legs);
console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("legs"));

for (const key in dog) {
  if (dog.hasOwnProperty(key)) {
    console.log(key); // "name"
  }
}
 */


/* const credit = {
  summ: 20000,
  month: 12,
  p: 10000,
  result() {
    return this.summ+this.p*this.month
  }
}

console.log(credit.result()); */

/* class Bank {
  static type = "static-bank";
  constructor(options) {
    this.summ = options.summ;
    this.month = options.month;
    this.p = options.p;
  }
  credit() {
    return this.summ+this.p*this.month
  }
} */

/* const userBank = new Bank({
  summ: 30000,
  month: 5,
  p:500,
})
console.log(userBank);
console.log(userBank.credit());
console.log(Bank.type); */


/* class NewBank extends Bank { //extends копіює клас
  constructor(options) {
    super(options)           //без "super" властивості ерор
    this.card = options.card;
  }
}

const Aval = new NewBank({
  summ: 20000,
  month: 5,
  p: 500,
  card: true,
});

console.log(Aval);
console.log(Aval.card);
console.log(Aval.credit()); */





/* class User {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.city = props.city;
  }
  firstName = "";
  lastName = "";
  age = "";
  city = "";
  set name(newName) {
    const nameRow = newName.split(" ");
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
  }
  get name() {
    return `First name : ${this.firstName} last name :${this.lastName}`
  }
  set age(newAge) {
    this.age = newAge;
  }
  get age() {
    return this.age;
  }
  set city(newSity) {
    this.city = newSity;
  }
  get city() {
    return this.city;
  }
}

const Ivan = new User({
  name: "Ivan Stepanowich",
  age: 23,
  city:"Lviv"
});
console.log(Ivan);


const Mary = new User({
  name: "Mary Happy",
  age: 20,
  city:"Odessa"
})
console.log(Mary);*/


//[[PTOTOTYPE]]
/* const a = {
  x: 1,
  y:3,
}
const b = Object.create(a);
 */