// document.getElementByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[2].innerText = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);


//document.getElementByTagName
let list  = document.getElementsByTagName('li');
console.log(list);
console.log(list[1]);
list[1].style.color='red';
list[1].textContent='Hello';

//Converting HTML collection into array
list = Array.from(list);

list.forEach( (li , index)=> {
    console.log(li.className);
    li.textContent = `${index + 1}: List`; 
});

console.log(list);

//Query selector all
const collection = document.querySelectorAll('ul.collection li.collection-item');
//This does'nt require the .from method
collection.forEach((li, index)=>{
li.textContent=`${index+1}:Collections`;
});

console.log(collection);

const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-child(even)');

liodd.forEach((li,index) =>{
li.style.background='#ccc';
});

lieven.forEach((li,index)=>{
    li.style.background='#f4f4f4';
});