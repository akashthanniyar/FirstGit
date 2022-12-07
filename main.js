var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit' , addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var descp = document.getElementById('item1').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " + descp));
    //del button
    var delbtn = document.createElement('button');
    delbtn.className="btn btn-danger btn-sm float-right delete";
    delbtn.appendChild(document.createTextNode('X'));
    li.appendChild(delbtn);
    itemList.appendChild(li);
     //edit buton
     var editBtn = document.createElement('button');
     editBtn.className="btn btn-sm float-right edit";
     editBtn.appendChild(document.createTextNode('edit'));
     li.appendChild(editBtn);
     itemList.appendChild(li);
}
function removeItem(e) {
   if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
   }        
}

//filter search 

function filterItems(e) {

    //converttext to lowercase 
    var text = e.target.value.toLowerCase();

    //get list 
    var items = itemList.getElementsByTagName("li");
    // convert to array 

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;  
        var descpdetail = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 
        || descpdetail.toLowerCase().indexOf(text) != -1) {
            item.style.display ="block";
        }else {
            item.style.display= "none";
        }

    });

}




