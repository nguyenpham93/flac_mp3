const Promise = require("bluebird");


function test(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("wake up");
        resolve("hello");
    },3000);
    
    console.log("adad");
    });
}

test().then(()=>{
    console.log("123");
});