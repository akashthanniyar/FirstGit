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
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // if(nameInput.value ==="" || emailInput.value==="") {
    //     msg.classList.add('error');
    //     msg.innerHTML='Please Enter Data';
    // }else {
        
    //    const li = document.createElement('li');
    //    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    //    userList.appendChild(li);
       let object = {
        Name: nameInput.value ,
        Email: emailInput.value
      };
      let object_serialized = JSON.stringify(object);
      localStorage.setItem(object.Email,object_serialized);
      showNewUserOnScreen(object);
       nameInput.value='';
       emailInput.value='';
    }
    window.addEventListener("DOMContentLoaded", () => {
        const localStorageObj = localStorage;
        const localstoragekeys  = Object.keys(localStorageObj)

        for(var i =0; i< localstoragekeys.length; i++){
            const key = localstoragekeys[i]
            const userDetailsString = localStorageObj[key];
            const userDetailsObj = JSON.parse(userDetailsString);
            showNewUserOnScreen(userDetailsObj)
        }
    })
    function showNewUserOnScreen(user){
      const parentNode=document.getElementById("users");
      const childHtml = `<li id=${user.Email}>${user.Name} : ${user.Email} 
                         <button onclick=deleteUser('${user.Email}')>
                          Delete User</button>
                          <button onclick=editUser('${user.Email}','${user.Name}')>
                          Edit User</button></li>`;
      parentNode.innerHTML =  parentNode.innerHTML + childHtml;
    }   
function deleteUser(Email) {
    localStorage.removeItem(Email);
    removeUserFromScreen(Email);
}

function removeUserFromScreen(Email) { 
    const parentNode=document.getElementById("users");
    const childNodeToBeDeleted  = document.getElementById(Email);
    parentNode.removeChild(childNodeToBeDeleted);
}

function editUser(Email,Name) {
    document.getElementById('email').value=Email;
    document.getElementById('name').value=Name;
    deleteUser(Email);
}

