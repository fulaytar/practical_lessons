// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

/* function letMeSeeYourName(callback) {
    const name = prompt("Enter your name")
    if (!name) {
        console.log("Ehror")
        return;
    } else {
        callback(name);
    }
}

function great(name) {
    console.log(`Привіт ${name}`)
}
letMeSeeYourName(great); */



// Напишіть функцію makeCounter, яка повертає іншу функцію,
// яка рахує та виводить у консоль кількість своїх викликів

/* 
const count = makeCounter();

function makeCounter(callback) {
    let counter = 0;
    return function () {
        return ++counter;
    }
}
console.log(count());
console.log(count());
console.log(count()); */


// Напиши клас Notes, який керує колекцієї заміток у властивості items
// Замітка - це об"єкт із властивостями text та priority
// Додай класу статичну властивість Priopity,
// в якому буде зберігатися об"єкт з пріоритетами
// Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)

дороби