// const person = {
//     firstName : "Akash",
//     lastName : "Thanniyar",
//     age : 31, 
//     hobbies : ["Movies","Music","Football"],
//     address : {
//         street : "97 Main street",
//         city : "Doha",
//         state : "Qatar"
//     }
// }
// console.log(person.hobbies[0]);
// console.log(person.address.city);
// const {age,address: {state}} = person;
// console.log(age);
// console.log(state);


// const todos = [
//     {
//         id:1,
//         text : "Take Out Trash",
//         isCompleted : true 
//     },
//     {
//         id:2,
//         text : "Meeting With Boss",
//         isCompleted : true 
//     },
//     {
//         id:3,
//         text : "Dentist Appointment",
//         isCompleted : false
//     }
// ];

// for(var i=0;i<todos.length;i++) {
//     console.log(todos[i].id);
// }
// var i=0;
// while(i<todos.length) {
//     console.log(todos[i].id);
// }

// for(let todo of todos) {
//     console.log(todo.id);
// }
// todos.forEach(function(todo) {
//     console.log(todo.id)
// });
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText);
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted===true;
// }).map(function(todo) {
//     return todo.text;
// });
// console.log(todoCompleted);

// function convTemp (tempVal,convUnit) {
//     var conv = convUnit==="c"? tempVal+273 : tempVal-273 ;
//     console.log((conv));
// }
// convTemp(35,"c")

// function Student (firstName,lastName,rollNo,sex,age) {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.rollNo = rollNo;
//     this.sex=sex;
//     this.age=age;
// }

// Student.prototype.findEligibility = function findEligibility(minAge) {
//     if(this.age>minAge){
//        console.log("He Is Eligible")
//     }else 
//     {
//        console.log("He Is Not Eligble") 
//     }

// };

// var stu1 = new Student("Akash","Thanniyar",4,"Male",39);
// var stu2 = new Student("Durga","Prasad",5,"Male",13);

// if(stu1.age>stu2.age){
//     console.log(`${stu1.firstName} ${stu1.lastName}`)
// }else 
// {
//     console.log(`${stu2.firstName} ${stu2.lastName}`) 
// }

// stu1.findEligibility(18);
// stu2.findEligibility(18);

// class Student {
//     constructor (firstName,lastName,rollNo,sex,age) {
//             this.firstName=firstName;
//             this.lastName=lastName;
//             this.rollNo = rollNo;
//             this.sex=sex;
//             this.age=age;
// }
// findEligibility(minAge) {
//     if(this.age>minAge){
//                console.log("He Is Eligible")
//             }else 
//             {
//                console.log("He Is Not Eligble") 
//             }
//  }
// }
// var stu1 = new Student("Akash","Thanniyar",4,"Male",39);
// var stu2 = new Student("Durga","Prasad",5,"Male",13);

// if(stu1.age>stu2.age){
//     console.log(`${stu1.firstName} ${stu1.lastName}`)
// }else 
// {
//     console.log(`${stu2.firstName} ${stu2.lastName}`) 
// }

// stu1.findEligibility(18);
// stu2.findEligibility(18);

// class User {
//     static registeredUsers=0;
//     constructor(username,email,password) {
//         this.username=username;
//         this.email=email;
//         this.password=password;
//         User.registeredUsers+=1
//     }
//     registered() {
//         console.log(this.username + " " + 'Is Now Registered ');
//     }
//     } 
//  class Member extends User {
//     static membershipactivetilldate =0;
//     constructor (username,email,password,memberPackage) {
//         super(username,email,password);
//         this.package=memberPackage;
//         let todaysDate = new Date();
//         const membershipactivetillYear = todaysDate.getFullYear();
//         const membershipactivetillMonth = todaysDate.getMonth();
//         const membershipactivetillDay = todaysDate.getDay();
//         this.membershipactivetilldate = new Date (
//             membershipactivetillYear,
//             membershipactivetillMonth + 1,
//             membershipactivetillDay 
//         );
//     }
//     renewMembership() {
//         const membershipactivetillYear = this.membershipactivetilldate.getFullYear();
//         const membershipactivetillMonth = this.membershipactivetilldate.getMonth();
//         const membershipactivetillDay = this.membershipactivetilldate.getDay();
//         if(this.package==="standard") {
//             this.membershipactivetilldate = new Date (
//                 membershipactivetillYear,
//                 membershipactivetillMonth +1,
//                 membershipactivetillDay 
//             );
//         } else if(this.package==="yearly") {
//             this.membershipactivetilldate = new Date (
//                 membershipactivetillYear +1,
//                 membershipactivetillMonth,
//                 membershipactivetillDay 
//             );
//         }
//     }
//         subscriptionActiveTill() {
//             console.log(this.username+ " is subscribed to " + this.package+
//              " uptill " +  this.membershipactivetilldate);
//         }
//     getpackage() {
//         console.log(this.username + " " + 'is subscribed to the' +
//          " " + this.package+" "+ 'package');
//     }
//  }

// var akash= new Member ("akash","akash@mail.com","akasht","standard")
// var ajay = new Member ("ajay","ajay@mail.com","ajayv","yearly")
// console.log(User.registeredUsers);

// akash.registered();
// akash.getpackage();
// akash.subscriptionActiveTill();
// akash.renewMembership();
// akash.subscriptionActiveTill();
// ajay.registered();
// ajay.getpackage();
// ajay.subscriptionActiveTill();
// ajay.renewMembership();
// ajay.subscriptionActiveTill();



