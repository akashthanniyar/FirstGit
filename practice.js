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

    const posts = [ 
        {title:"First Post" , body: "This is post one"},
        {title:"Second Post" , body: "This is post two"}
    ];
    
    function getPost() {
        setTimeout(() => {
            let output = "";
            for(let i=0;i<posts.length;i++) {
                output+= `<li>${posts[i].title} </li>`
            }
            document.body.innerHTML = output;
            console.log("get post called")
        },1000)
    }
    
    function createPost(post,callback) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                posts.push(post);
                let error = false;
                if(!error){
                    resolve();
                }else{
                    reject('Something Went Wrong');
                }
            },2000)
        })
        }
    
        // createPost({title:"Third Post" , body: "This is post one"}).then(getPost)
        // .catch(err => console.log(err))
