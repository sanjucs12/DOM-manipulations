// console.dir(document)
// console.log(document.title)
// document.title=12345;
// console.log(document.title)
// console.log(document.body);
// console.log(document.all[10]);

//get elements by id
// var headertitle=document.getElementById("header-title")
// console.log(headertitle.innerText);
// console.log(headertitle.textContent);

// headertitle.textContent="Hello Items";
//console.log(headertitle.textContent);

//get elements by class name
// let classes = document.getElementsByClassName("list-group-item");
// console.log(classes);
// console.log(classes[2]);
// classes[0].textContent="Hello1";
// classes[1].textContent="Hello2";
// classes[2].textContent="Hello3";
// classes[3].textContent="Hello4";

// classes[2].style.backgroundColor = "green";

// for(let i=0;i<classes.length;i++)
// {
//     classes[i].style.fontWeight="bold";
// }

//get elements by Tag name
// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[2]);
// li[0].textContent="Hello1";
// li[1].textContent="Hello2";
// li[2].textContent="Hello3";
// li[3].textContent="Hello4";

// li[2].style.backgroundColor = "green";

// for(let i=0;i<li.length;i++)
// {
//     li[i].style.fontWeight="bold";
// }

//Query Selector
// let second = document.querySelector('.list-group-item:nth-child(2)')
// second.style.backgroundColor='green'

// let third = document.querySelector('.list-group-item:nth-child(3)')
// third.style.display='none'

//Query Selector all

// let second=document.querySelectorAll('.list-group-item')
// console.log(second)
// second[1].style.backgroundColor='green'

// let odd=document.querySelectorAll('li:nth-child(odd)')
// for(let i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green';
// }

////////////>>>>>>>>>TRAVERSING DOM<<<<<<<<<<<</////////////////

let items=document.querySelector('#items')
//console.log(items);

//Parent node
// console.log(items.parentNode);
// items.parentNode.style.backgroundColor='grey'
// console.log(items.parentNode.parentNode);
// items.parentNode.parentNode.style.backgroundColor='grey'

//Parent element
// console.log(items.parentElement);
// items.parentElement.style.backgroundColor='grey'
// console.log(items.parentElement.parentElement);
// items.parentElement.parentElement.style.backgroundColor='grey'

//ParentNode and ParentElements give same result

//Child nodes and Children

//console.log(items.childNodes);

// console.log(items.children);
// console.log(items.children[1]);

//FIRST CHILD AND FIRSTELEMENT CHILD

// console.log(items.firstChild);
// console.log(items.firstElementChild);
// items.firstElementChild.textContent='Hello1';
// items.firstChild.textContent='Hello1';

//LAST CHILD AND LAST ELEMENT CHILD

// console.log(items.lastChild);
// console.log(items.lastElementChild);
// items.lastElementChild.textContent='Hello1';
// items.lastChild.textContent='Hello1';

//NEXT SIBLING AND NEXT ELEMENT SIBLING

// console.log(items.nextSibling);
// console.log(items.nextElementSibling);
// items.nextSibling.textContent='sibling1'
// items.nextElementSibling.textContent='sibling2'

//PREVIOUS SIBLING AND PREVIOUS ELEMENT SIBLING
// console.log(items.previousSibling);
// console.log(items.previousElementSibling);
// items.previousSibling.textContent='sibling1'
// items.previousElementSibling.textContent='sibling2'

//CREATE ELEMENT

//create div
let newdiv=document.createElement('div')

//add class to div
newdiv.className='Hello';

//add id to div
newdiv.id='Hello1';

//set attrubute to div
newdiv.setAttribute('title', 'Hello div');

//create text node
let newdivtext=document.createTextNode("HELLO WORLD");

//add text node to div
newdiv.appendChild(newdivtext);

console.log(newdiv);

// NOW ADD THE ELEMENT TO DOM

let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');

container.insertBefore(newdiv,h1);












