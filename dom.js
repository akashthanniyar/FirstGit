// document.title="Hello"; //will change the title. 



// var header = document.getElementById("main-header");

// header.style.border = "solid 3px #000";



// var addItem = document.getElementsByClassName('title');

// addItem[0].style.fontWeight="bold"; 

// addItem[0].style.color ="green";

// var items = document.getElementsByClassName("list-group-item");
// console.log(items[2]);
// items[2].style.backgroundColor="green";


// for(var i=0;i<items.length;i++) {
//     items[i].style.fontWeight="bold";
//     items[i].style.color="orange";
//     items[i].style.backgroundColor="yellow";
// }
// // get elements by id

// // var li = document.getElementsByTagName("li");
// // li[4].style.fontWeight="bold";
// // li[4].style.color="blue";

// // Query Selector 

// // var header = document.querySelector('#main-header');
// // console.log(header);
// // header.style.borderBottom="solid 10px #ccc";

// // var input = document.querySelector('input');
// // input.value="Hello World!";

// // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.backgroundColor="green";
// // var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// // thirdItem.style.visibility = "hidden";  

// // //Using QuerySelectorALL
// // var secItem= document.querySelectorAll('.list-group-item');
// // secItem[2].style.color="green";
// // var odd = document.querySelectorAll('li:nth-child(odd)');
// // for(var i=0;i<odd.length;i++) {
// //     odd[i].style.backgroundColor="green";
// // }

// // // traverse the DOM 
// // var itemList =document.querySelector('#items');
// // //parent Node 
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor="yellow";
// // console.log(itemList.parentNode.parentNode);
// // //parentelement
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor="yellow";
// // console.log(itemList.parentElement.parentElement); 

// // //childNode
// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor="green";

// // //firstChild
// // console.log(itemList.firstChild);

// // //firstelementChild
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent="hello";

// // //lastChild
// // console.log(itemList.lastChild);

// // //lastelementChild
// // console.log(itemList.lastElementChild);
// // itemList.lastElementChild.textContent="hi";

// // //nextSibling
// // console.log(itemList.nextSibling);

// // //nextElementSibling
// // console.log(itemList.nextElementSibling);

// // //previousSibling

// // console.log(itemList.previousSibling);

// // //previousElementSibing
// // console.log(itemList.previousElementSibling);

// //creating DOM element
//   // create a div 
// var newDiv = document.createElement('div');
// //Add CLass
// newDiv.className="hello"; 
// //add ID
// newDiv.id="hello1";
// //add Attribute 
// newDiv.setAttribute('title','Hello Div'); 

// //create text Node 
 
// var newDivtxt  = document.createTextNode('helloworld'); 

// // add text to div (append)

// newDiv.appendChild(newDivtxt);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv,h1);

// var h2 = document.querySelector('#items');
// var firstItem = document.querySelector('.list-group-item:nth-child(1)');
// h2.insertBefore(newDiv,firstItem);
















