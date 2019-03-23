/*
Here we are looking at how to traverse the dom
*/
let val;

const list = document.querySelector("ul.collection");
console.log(list);
const listItem = document.querySelector("li.collection-item:first-child");
console.log(listItem);

// Get the child nodes
val = list.childNodes;
console.log(val);
