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

/* class User{
  constructor(username,age,city) {
    console.log('Hello, I am constructor', username);
    this.name = username;
    this.age = age;
    this.city = city;
  }
  sauHello() {
    console.log("Hello World")
  }
  login() {
    console.log("User logged in")
  }
} */

//User.sayHello();
//  ===так не працює====


/* const user = new User("Ivan", 23,"Lviv");
const user2 = new User("Dima",45,"Odessa");
const user3=new User("Mary",19,"Dream")
console.log(user)
console.log(user2)
console.log(user3)  */
//user.sauHello()
// ===ось  так працює===

/* class Rectangle{
  #a;
  #b;
  static value = 0;
  static printAllRectangles() {
    console.log(Rectangle.value);
  }
  constructor(a, b) {
    this.#a = a;
    this.#b = b;
    Rectangle.value++;
  }
  get P() {
    return (this.#a+this.#b)*2
  }
  get S() {
    return this.#a*this.#b
  }
  getA() {
    return this.#a;
  }
  setA(newValue) {
    if (newValue > 0) {
      this.#a = newValue;
    }
  }
  get a(){
      return this.#a;
    }
}

const r1 = new Rectangle(2, 4);
const r2 = new Rectangle(3, 5);
console.log(r1.getA())//2
r1.setA(9)
console.log(r1.getA())//9
r1.setA(-5);
console.log(r1.getA())//9
console.log(r1.a) // це уже через гетер, зручно
console.log(Rectangle.value); //через клас до класу 
console.log(Rectangle.value);//а був 0 ...
console.log(Rectangle.printAllRectangles());// а тепер так, рахуємо кількість екземплярів */




//=======Наслідування класів======

/* class Transport{
  color;

  constructor(color) {
    this.color = color;
  }
  startEngine() {
    console.log("Engine start");
  }
}

class Car extends Transport{  //успадковує клас
  model;
  constructor(color, model) {
    super(color);        //успадковує колор
    this.model = model;
  }
}

const car = new Car("green","bmw");
console.log(car)
car.startEngine(); */

/* const list = document.querySelector(".list");

const heading = document.createElement("li");
heading.classList.add("елемент-батька-ul-append");
heading.textContent = "Мій перший код через JS";
heading.style.color = "red";
console.log(heading);
list.append(heading);


const head_2 = document.createElement("li");
head_2.classList.add("елемент-батька-ul-prepend");
head_2.textContent = " My second code";
head_2.style.color = "purple";
list.prepend(head_2);
console.log(head_2);

const li_1 = document.createElement("li");
li_1.classList.add("піcля-елемента-ul");
li_1.textContent = "hello , i am li";
li_1.style.color = "green"
list.after(li_1);
console.log(li_1);

const li_2 = document.createElement("li");
li_2.classList.add("перед-елемента-ul");
li_2.textContent = "hello , i am li-2";
li_2.style.color = "blue"
list.before(li_2);
console.log(li_2);

const del_p = document.querySelector(".del_item");
console.log(del_p)
del_p.remove();



const list2 = document.querySelector(".list-2");
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join(""); */
// Check the console, you'll see a single string with HTML tags
/* console.log(markup); */
// Adding all the markup in one operation
/* list2.innerHTML = markup; */


// задачка яка рахує кількість кліків на кнопку і виводить у консоль
/* let a = 0; 
const clickHandler = (event) => {
    a++;
  console.log(`Ти зробив клік, аж ${a} разів`)

}; */
// навішуєте на кнопку
/* const btn = document.getElementById('click-button');

btn.addEventListener('click', clickHandler); */
//запускаємо і давим на 'click'

/* const primer = document.querySelector(".primer");
console.log(primer);
primer.textContent = "Тут я зробив таке через innerHTML";
console.log(list.textContent);
primer.innerHTML += " а також можна зробити таке";
 */
/* // Функція для видалення обробника подій
const removeClickHandler = () => {
  btn.removeEventListener('click', clickHandler);
  console.log('Обробник події був видалений');
};

// Навішуєте на другу кнопку для видалення обробника події
const removeBtn = document.getElementById('del-btn');
removeBtn.addEventListener('click', removeClickHandler); */


/* // Відловлюю кнопку
const redBtn = document.getElementById("del-btn");
console.log(redBtn);

// Ліплю функцію
const redClick = () => {
  console.log("Активовано почервоніння на 2 секунди");
  btn.style.backgroundColor = "red";
  btn.style.border = "none";
  btn.innerHTML = "I am red button";

  // Встановлюю таймер на 2 секунди (2000 мілісекунд)
  setTimeout(() => {
    // Після 2 секунд повертаю стилі до початкових
    btn.style.backgroundColor = "";  // Початковий колір (залишаю порожнім для використання значення за замовчуванням)
    btn.style.border = "";
    btn.innerHTML = "Нажми на мене";
  }, 2000);
}

// Додаю подію
redBtn.addEventListener("click", redClick);


//А тепер відслідковуємо клавіші

// Функція для виведення повідомлення в консоль
let message = "";
const handleKeyPress = (event) => {
  message += event.key;
  console.log(message);
  
};

// Додаємо прослуховувач подій до документу
document.addEventListener('keydown', handleKeyPress);

 */

/* const btn = document.getElementById('click-button');
const body = document.querySelector('body')

console.log(body);
let index = 20;
function hendler() {
  btn.style.marginLeft = `${index}px`
  btn.style.marginTop = `${index}px`
  index += 10;
  console.log(index);
}

btn.addEventListener("click", hendler); */

/* const input = document.getElementById("input");
console.log(input); */
/* input.addEventListener("blur", ()=>{
  alert(`Привіт мій хазяїн ${input.value}`);
}) */
/* input.addEventListener("input", () => {
  console.log(input.value);
}) */
/* input.addEventListener("click", (event) => {
  console.log(event.target.value)
}) */

/* const form = document.querySelector('.js-form');
console.log(form);
function chandeInfo(event) {
  event.preventDefault();
  const InfoDetail = {
    email: event.target.email.value,
    password: event.target.password.value,
    comment: event.target.comment.value,
  }
  console.log(InfoDetail);
}
form.addEventListener("submit", chandeInfo); */

/* const pressKey=document.querySelector(".pressKey")
pressKey.style.color = "red";
pressKey.style.fontSize = "72px";

function keyHandlrer(event) {
  pressKey.textContent = event.key;
}

function keyUp(event) {
  pressKey.textContent = event.key;
}

document.addEventListener("keydown", keyHandlrer);
document.addEventListener("keyup", keyUp); */

/* const parent = document.querySelector(".parent"),
  child = document.querySelector(".child"),
  item = document.querySelector(".item"),
  parentText = document.querySelector(".parent_text"),
  itemText = document.querySelector(".item_text"),
  childText = document.querySelector(".child_text");


function greenEnterParent() {
  parent.style.backgroundColor = "#90ff20";
  console.log("Вітаю, ти знайшов батька!")
  parentText.textContent="Батя все бачить"
}
function leaveParent() {
  parent.style.backgroundColor = "";
  console.log("Ти покинув батька...")
  parentText.textContent="Батя"
}
function yellowChild() {
  child.style.backgroundColor = "#ffff20"
  console.log("Вітаю, ти знайшов дитину!")
  childText.textContent="Дитина бачить тебе"
}
function leaveChild() {
  child.style.backgroundColor = "";
  console.log("Ти покинув дитину...")
  childText.textContent="Дитина"
}
function redItem() {
  item.style.backgroundColor = "#ff2020";
  console.log("Вітаю, ти знайшов item!");
  itemText.textContent="Item see you"
}
function leaveItem() {
  item.style.backgroundColor = "";
  console.log("Ти покинув item...");
  itemText.textContent="Item"
}

parent.addEventListener("mouseenter", greenEnterParent);
parent.addEventListener("mouseleave", leaveParent);

child.addEventListener("mouseenter", yellowChild)
child.addEventListener("mouseleave", leaveChild)

item.addEventListener("mouseenter", redItem);
item.addEventListener("mouseleave", leaveItem); */

/* localStorage.setItem("name", "Ivanko");
const name = localStorage.getItem("name");
console.log(name);

localStorage.setItem("surname", "Fulaitar")
const surname = localStorage.getItem("surname");
console.log(surname); */
let age;
function check() {
  let age = document.getElementsByName("radio");
  if (age[0].checked) {
    return age = true;
  } else {
    return age = false;
  }
}
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const btn = document.querySelector('button');
const form = document.getElementById('form');

btn.addEventListener("click", saveInfo);

function saveInfo(event) {
  event.preventDefault();
  const info = {
    name: name.value,
    surname: surname.value,
    validAge: check(),
  }
  localStorage.setItem("info", JSON.stringify(info));
  form.reset();
}

/* const values = ["viktor",undefined,9,null,true,"sex"];

const jsonString = JSON.stringify(values);
console.log(JSON.parse(jsonString)); */

/* function cleanLocalStorage() {
  localStorage.clear();
} */

/* const json = {
  age: 12,
  name: "petro"
};

const jsonData = JSON.stringify(json);
console.log(jsonData)

localStorage.setItem("test", jsonData);
console.log(JSON.parse(jsonData)); */




//рішення від Макса
const forms = document.querySelector(".form-task");


/* function dataForm(forms) {
  const message = forms.message.value;
  const name = forms.name.value;
  return {
    name,
    message
    
  }
}

forms.addEventListener("input", (event) => {
  event.preventDefault();
  const data = dataForm(event.currentTarget)
  console.log(data)

  const dataJson = JSON.stringify(data);
  localStorage.setItem("key", dataJson);
});

const rowData = localStorage.getItem("key");
if (rowData) {
  const data = JSON.parse(rowData);
  forms.message.value = data.message;
  forms.name.value = data.name;

} */



//мій варіант
forms.addEventListener("submit", (event) => {
  event.preventDefault();
  const info = {
    name: forms.name.value,
    message: forms.message.value
  };
  const jsonInfo = JSON.stringify(info);
  localStorage.setItem("info", jsonInfo);
  forms.reset();
})

const data = localStorage.getItem("info");
  const rowData = JSON.parse(data);
  console.log(rowData);
  if (rowData) {
    forms.name.value = rowData.name;
    forms.message.value = rowData.message;
  }