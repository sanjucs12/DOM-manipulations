let form=document.getElementById('addForm');
let itemlist=document.getElementById('items');
let filter=document.getElementById('filter');

//FORM SUBMIT EVENT
form.addEventListener('submit',additem)

//DELETE EVENT
itemlist.addEventListener('click',removeitem);

//FILTER EVENT
filter.addEventListener('keyup', filteritems);

/////////////..........ADD ITEM FUNCTION..........////////////
function additem(e){
    e.preventDefault();
    
  //GET INPUT VALUE
  let newitem=document.getElementById('item').value;

  //CREATE LI element
  let li=document.createElement('li');

  //Add class to li element
  li.className='list-group-item';
  
  //add text node with input value
  li.appendChild(document.createTextNode(newitem));

  //add delete button
  let deletebut=document.createElement('button');

  //add class name to delete button
  deletebut.className='btn btn-danger btn-sm float-right delete';

  //append text node
  deletebut.appendChild(document.createTextNode('X'));

  //append button to li
  li.appendChild(deletebut);

  //append li to list
  itemlist.appendChild(li);
}

////////////..........REMOVE ITEM FUNCTON..........//////////////
function removeitem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are you sure?'))
        {
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

///////////........FUNCTION FILTER ELEMENTS...........////////////

function filteritems(e){

  //convert text to lower case
 let text=e.target.value.toLowerCase();

 //Get list
let items=itemlist.getElementsByTagName('li');

//convert to an Array
Array.from(items).forEach(function(item){
    var itemname = item.firstChild.textContent;
    if(itemname.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

}
