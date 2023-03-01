// const posts = [ 
//     {title:"First Post" , body: "This is post one"},
//     {title:"Second Post" , body: "This is post two"}
// ];

// function getPost() {
//     setTimeout(() => {
//         let output = "";
//         for(let i=0;i<posts.length;i++) {
//             output+= `<li>${posts[i].title} </li>`
//         }
//         document.body.innerHTML = output;
//         console.log("get post called")
//     },1000)
// }

// function createPost(post,callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//         console.log("create post called")  
//     },5000)
//     }

//     createPost({title:"Third Post" , body: "This is post one"},getPost);

    // const posts = [ 
    //     {title:"First Post" , body: "This is post one"},
    //     {title:"Second Post" , body: "This is post two"}
    // ];
    
    // function getPost() {
    //     setTimeout(() => {
    //         let output = "";
    //         for(let i=0;i<posts.length;i++) {
    //             output+= `<li>${posts[i].title} </li>`
    //         }
    //         document.body.innerHTML = output;
    //         console.log("get post called")
    //     },1000)
    // }
    
    // function createPost(post,callback) {
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             posts.push(post);
    //             let error = false;
    //             if(!error){
    //                 resolve();
    //             }else{
    //                 reject('Something Went Wrong');
    //             }
    //         },2000)
    //     })
    //     }
    
        // createPost({title:"Third Post" , body: "This is post one"}).then(getPost)
        // .catch(err => console.log(err))


        
        // getaJob().then((m1)=>{
        //     console.log(m1);
        //     receiveSalary().then((m2)=>{
        //     console.log(m2);
        //     paytherent().then((m3)=>{
        //         console.log(m3)
        //     })
        //     })
        // })

        async function print() {
            function getaJob() {
                return new Promise((resolve,reject)=> {
                    setTimeout(()=>{
                        resolve('Got Placed')
                    },3000)
                })
            }
    
            function receiveSalary() {
                return new Promise((resolve,reject)=> {
                    setTimeout(()=>{
                        resolve('Salary Credited')
                    },2000)
                })
            }
            function paytherent() {
                return new Promise((resolve,reject)=> {
                    setTimeout(()=>{
                        resolve('Rent Paid')
                    },1000)
                })
            }
            const m1 = await getaJob();
            console.log(m1);
            const m2 = await receiveSalary();
            console.log(m2);
            const m3 = await paytherent();
            console.log(m3);
        }
        print();
     