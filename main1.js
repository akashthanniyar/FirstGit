// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent='Hello';
// ul.firstElementChild.style.background = "green";
// ul.children[1].style.background="yellow";
// const btn = document.querySelector('.btn')
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('.btn').style.background="green";
// });
// btn.addEventListener('mouseover', (e)=> {
//     e.preventDefault();
//     document.querySelector('body').classList.add('bg-dark');
// });
// btn.addEventListener('mouseout', (e)=> {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background="#ccc";
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value ==="" || emailInput.value==="") {
        msg.classList.add('error');
        msg.innerHTML='Please Enter Data';
    }else {
        
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
       userList.appendChild(li);

       let object = {
        Name: nameInput.value ,
        Email: emailInput.value
      };
      let object_serialized = JSON.stringify(object);
      localStorage.setItem("myObj",object_serialized);
       
       nameInput.value='';
       emailInput.value='';
    }
}




 