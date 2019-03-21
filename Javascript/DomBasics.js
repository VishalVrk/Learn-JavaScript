let val;

/*
Here the Document returns the value as html
we can access the html using document
*/
val = document;
console.log(val);

/*
The Document all is used to return the number of lines in the html
*/

val = document.all;
console.log(val);

/*
Using the array of values we can access all the values in the document
*/

val = document.all[1];
console.log(val);

/* 
using the document all length we can get the length of the html file
*/

val = document.all.length;
console.log(val);


//We can return each of the tag using the given tag name
val = document.head;
console.log(val);

val = document.body;
console.log(val);

val = document.doctype;
console.log(val);

//The domain function is used to return the domain name, URL

val = document.domain;
console.log(val);

//The URL function is used to return the url of our html document
val = document.URL;
console.log(val);
 
// The character set is used to return which type of character set such as UTF-8
val = document.characterSet;
console.log(val);

//The Content type is used to return the type such as text
val = document.contentType;
console.log(val);

//This is used returns object of the forms present in our document 
val = document.forms;
console.log(val);

//array value of 0 is used to return the html of the forms
val = document.forms[0];
console.log(val);

//used to return the id value 
val = document.forms[0].id;
console.log(val);

//used to return the method
val = document.forms[0].method;
console.log(val);

//used to return action 
val = document.forms[0].action;
console.log(val);

//get the link object
val = document.links;
console.log(val);

val = document.links[0].className;
console.log(val);

val = document.links[0].classList;
console.log(val);

val = document.images;
console.log(val);

val = document.scripts;
console.log(val);

val = document.scripts[1].getAttribute('src');
//console.log(val);

//For each to print all the src 
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
});
console.log(val);