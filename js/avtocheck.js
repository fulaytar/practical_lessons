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