//Create element
const li = document.createElement("li");
// Add Class
li.className = "collection-item";

//Add id
li.id = "new-item";

//Add Attribute
li.setAttribute("title", "New Item");

//Create text Node and append
li.appendChild(document.createTextNode("Hello World"));

//Create new link element
const link = document.createElement("a");

//Add classes
link.className = "delete-item secondary-content";
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);
console.log(li);
