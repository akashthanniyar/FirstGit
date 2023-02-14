const posts = [
    { title:'Post One', body : 'This is post one',CreatedAt : new Date().getTime()},
    { title:'Post Two', body : 'This is post two',CreatedAt : new Date().getTime()}
];

let intervalId = 0;
function getPosts () {
    clearInterval(intervalId);
    intervalId= setInterval(()=>{
        let output = '';
        for(let i=0; i<posts.length;i++){
            output+=`<li>${posts[i].title} Created At ${(new Date().getTime() - posts[i].CreatedAt)/1000} Seconds Ago</li>`;
        };
        document.body.innerHTML = output; 
    },1000);
}

function create3rdPost (post,callBack) {
    setTimeout(()=> {
        posts.push({...post,CreatedAt: new Date().getTime()});
        callBack()
    },2000); 
}
function create4thPost (post,callBack) {
    setTimeout(()=> {
        posts.push({...post,CreatedAt: new Date().getTime()});
        callBack()
    },5000); 
}
getPosts();
create3rdPost({title:'Post Three', body: 'This is post three',time:'CreatedAt'},getPosts);
create4thPost({title:'Post Four', body: 'This is post four',time:'CreatedAt'},getPosts);
