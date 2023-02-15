// console.log('Person1: Shows Ticket');
// console.log('Person2: Shows Ticket');

// const promiseWifeBringingTicks = new Promise ((resolve,reject)=> {
// setTimeout(()=>{
// resolve('ticket');
// },3000)
// }) 
// const getpopcorn = promiseWifeBringingTicks.then((t)=>{
//     console.log('Wife: I have the ticket');
//     console.log('husband: We should go in');
//     console.log('Wife: No i am hungry ');
// return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
// });
// const getButter = getpopcorn.then((t)=>{
// console.log('husband: I got some popcorn');
//  console.log('husband: We should go in');
// console.log('Wife: i need butter on my popcorn ');
// return new Promise((resolve,reject)=>resolve(`${t} butter`))
// });

// const getColdDrink = getButter.then((t)=>{
//     console.log('husband: I got some butter on the popcorn');
//     console.log('husband: We should go in');
//     console.log('Wife:i want some cold drink too');
// return new Promise ((resolve,reject)=>resolve(`${t} cold drink`))
// });

// getColdDrink.then((t)=>console.log(t));

// console.log('Person4: Shows Ticket');
// console.log('Person5: Shows Ticket');

// console.log('Person1: Shows Ticket');
// console.log('Person2: Shows Ticket');

// const preMovie = async ()=>{
// const promiseWifeBringingTicks = new Promise ((resolve,reject)=> {
// setTimeout(()=>{
// resolve('ticket');
// },3000)
// });
// const getpopcorn= new Promise((resolve,reject)=>resolve(`popcorn`));
// const addbutter= new Promise((resolve,reject)=>resolve(`butter`));
// const getColdDrink = new Promise((resolve,reject)=>resolve(`coldDrink`));

// let ticket = await promiseWifeBringingTicks;
//     console.log(`Wife: I have the ${ticket}`);
//     console.log('husband: We should go in');
//     console.log('Wife: No i am hungry ');

//     let popcorn = await getpopcorn;
//     console.log(`husband: I got some ${popcorn}`);
//     console.log('husband: We should go in');
//     console.log('Wife: i need butter on my popcorn ');

//     let butter = await addbutter;
//     console.log(`husband: I got some ${butter} on popcorn`);
//     console.log('husband: anything else darling?');
//     console.log('Wife: yes, i want some cold drink too');
  

//     let coldDrink = await getColdDrink;
//     console.log(`husband: I got some ${coldDrink}`);
//     console.log('husband: anything else darling?');
//     console.log('Wife: lets go in we are getting late');
//     console.log(`husband: thank you for the reminder *grins* `);


// return ticket; 

// }

// preMovie().then((m)=> console.log(`Person3: Shows ${m}`));

// console.log('Person4: Shows Ticket');
// console.log('Person5: Shows Ticket');


// console.log('Person1: Shows Ticket');
// console.log('Person2: Shows Ticket');

// const preMovie = async ()=>{
// const promiseWifeBringingTicks = new Promise ((resolve,reject)=> {
// setTimeout(()=>{
// resolve('ticket');
// },3000)
// });
// const getpopcorn= new Promise((resolve,reject)=>resolve(`popcorn`));
// const getcandy= new Promise((resolve,reject)=>resolve(`candy`));
// const getcoke = new Promise((resolve,reject)=>resolve(`coke`));

// let ticket = await promiseWifeBringingTicks;
//     let [popcorn,candy,coke] = await Promise.all([getpopcorn,getcandy,getcoke])
//     console.log(`${popcorn},${candy},${coke}`)  
// return ticket; 

// }

// preMovie().then((m)=> console.log(`Person3: Shows ${m}`));

// console.log('Person4: Shows Ticket');
// console.log('Person5: Shows Ticket');



const posts = [
    { title:'Post One', body : 'This is post one'},
    { title:'Post Two', body : 'This is post two'}
];
function getPosts () {
    setTimeout(()=> {
        let output='';
        posts.forEach((post, index) => {
            output+=`<li> ${post.title}</li>`;
        });
        document.body.innerHTML = output; 
    },1000);
}
    createPost =(post)=> {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                posts.push(post);
                const error= false;
                if(!error){
                    resolve();
                }else {
                    reject('Error: Something Went Wrong');
                }
            },1000);
        });
    }
    deletePost = ()=> {
        return new Promise ((resolve,reject) => {
            setTimeout ( () => {
                if(posts.length>0) {
                    const lastElement = posts.pop();
                    resolve(lastElement);
                }else {
                    reject ("Array Is Empty");
                }
            },1000);
        });
    }
    
async function print () {
    const createing = await createPost({title:'Post Three',body:'This is post three'});
    getPosts();
    const deleting = await deletePost();
    getPosts();
}
print();



    






