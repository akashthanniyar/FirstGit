const posts = [
    { title:'Post One', body : 'This is post one'},
    { title:'Post Two', body : 'This is post two'}
];

// function getPosts () {
//     setTimeout(()=> {
//         let output='';
//         posts.forEach((post, index) => {
//             output+=`<li> ${post.title}</li>`;
//         });
//         document.body.innerHTML = output; 
//     },1000);
// }
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

// createPost({title:'Post Three',body:'This is post three'})
// .then(() => {
//     getPosts();
    // deletePost().then((deletedElement)=> {
    //     getPosts();
    //     deletePost().then(()=> {
    //         getPosts();
    //         deletePost().then(()=> {
    //             getPosts();
    //             deletePost().then(()=> {
    //                 getPosts();
    //                 deletePost().then(()=> {})
    //                 .catch((err) => {
    //                     console.log('Inside Catch Block :',err)
    //                 })
    //             })       
    //         })
    //     })
    // })
// })
//     .catch(err=>console.log(err));
   
    // const promise1 = Promise.resolve("Hello World");
    // const promise2 = 10;
    // const promise3 = new Promise ((resolve,reject)=> 
    // setTimeout(resolve,2000,'Good Bye')
    // );
    // Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));

  updateLastUserActivityTime = () =>{
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                posts.lastActivityTime = new Date().getHours() +":"+ new Date().getMinutes() + ":" + new Date().getSeconds();
                resolve(posts.lastActivityTime) 
            },1000)
        }) ;
    }
     Promise.all([createPost({title:'Post Three', body: 'This is Post Three'}),updateLastUserActivityTime()])
     .then(([createPostresolves,updateLastUserActivityTimeresolves]) => {
        for (i=0;i<posts.length;i++) {
            console.log(posts[i].title)
        }
        console.log("User Last Activity Time" ,updateLastUserActivityTimeresolves);
        deletePost().then(()=>{
            for (i=0;i<posts.length;i++) {
                console.log(posts[i].title)
            }
        })
     }).catch(err=>console.log(err));
     
    


     

