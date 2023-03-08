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
let classes = document.getElementsByClassName("list-group-item");
console.log(classes);
console.log(classes[2]);
classes[0].textContent="Hello1";
classes[1].textContent="Hello2";
classes[2].textContent="Hello3";
classes[3].textContent="Hello4";

classes[2].style.backgroundColor = "green";

for(let i=0;i<classes.length;i++)
{
    classes[i].style.fontWeight="bold";
}




