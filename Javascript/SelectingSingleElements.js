// Here we are using the document.getElementById()

console.log(document.getElementById('task-title'));

//Get the things from the element 
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//Change Style
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color= '#FFF';
document.getElementById('task-title').style.padding= '5px';

//This is used to remove the entire element
//document.getElementById('task-title').style.display = 'none';

//Change Content

document.getElementById('task-title').textContent='Hello';
document.getElementById('task-title').innerText = 'World';
document.getElementById('task-title').innerHTML= '<span style="color:red">Task List</span>'


//Using variables

const tasktitle = document.getElementById('task-title');

tasktitle.style.background="#333";
tasktitle.textContent = 'Hello';
tasktitle.innerText='world';


//document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));


//Selecting first element in the list 2 ways
document.querySelector('li').style.color = "red";
document.querySelector('ul li').style.color="blue";

//Selecting the last element
document.querySelector('li:last-child').style.color='yellow';

//Selecting nth element in the list
document.querySelector('li:nth-child(2)').style.color='green';
document.querySelector('li:nth-child(3)').style.color='pink';
document.querySelector('li:nth-child(4)').style.color='orange';
document.querySelector('li:nth-child(4)').innerText="hello dude";

//odd and even
document.querySelector('li:nth-child(odd)').style.background='#ccc';
document.querySelector('li:nth-child(even)').style.background='#f4f4f4';

