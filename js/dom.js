// =====Розв'язок 1 задачі=====

/* const btn=document.querySelector('button');
const input=document.getElementById('input');

btn.addEventListener("click", changeInput);

function changeInput(){
  input.value="Я змінив інпут";
} */


// =====Розв'язок 2 задачі=====

/* const btn=document.querySelector('button');
const input=document.getElementById('input');

btn.addEventListener("click", showInput);

function showInput(){
  alert(input.value)
} */


// =====Розв'язок 3 задачі=====

/* const btn=document.querySelector('button');
const firstInput=document.getElementById('first-input');
const secondInput=document.getElementById('second-input');

btn.addEventListener("click", swapInfoInput);

function swapInfoInput(){
  //[firstInput.value, secondInput.value]=[secondInput.value, firstInput.value]
    let saveInput=firstInput.value;
    firstInput.value=secondInput.value;
    secondInput.value=saveInput;
} */


// =====Розв'язок 4 задачі=====

/* const list_item=document.querySelectorAll('p');
const btn =document.querySelector('button');

btn.addEventListener("click", transformNumber,{once:true});

function transformNumber(){
  list_item.forEach((elem,index)=>elem.textContent = index+1+"."+elem.textContent)
} */


// =====Розв'язок 5 задачі=====

/* const btn =document.querySelector('button');
const inputNumber=document.getElementById('test');
const result=document.getElementById('result');

btn.addEventListener("click", calcNumberPow);

function calcNumberPow(){
  console.log(typeof inputNumber.value, "- це тип даних у першому input")
  let validNumber=Number(inputNumber.value);
  !isNaN(validNumber)? result.value= validNumber*validNumber : alert("Input is not a number!");
} */


// =====Розв'язок 6 задачі=====

const title=document.querySelector('h1');
const list=document.createElement("ul");
list.classList.add("list");
title.insertAdjacentElement('afterend', list);

function addListItem(){
  const inputInfo=prompt("Уведи, що хочеш додати у список");
  //перевірка уведених значень
  if (inputInfo === null||inputInfo==="") {
    return;
  };

  let element =document.createElement('li');
  element.textContent=inputInfo;
  list.insertAdjacentElement("beforeend", element);

    addListItem();
}

addListItem();
// дороби видалення пробілів
