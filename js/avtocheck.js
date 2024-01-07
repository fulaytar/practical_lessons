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