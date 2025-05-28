// promise - to complete acync task

// create promise 
const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // dataBase call , cryptography  ,  network
    setTimeout(function(){
        console.log('async task 1 is completed');
        resolve();
    },1000)


    
});

promiseOne.then(function(){
    console.log('promise 1 consumed');
    });

console.log("\n")
// another way to create promise without using variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2 is completed');
        resolve();
    },1000);
}).then(function(){
    console.log('promised 2 consumed');
})
console.log("\n")
// promise 3
 const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: 'rahul' , Email: 'rahulxample@gmail.com' });
    },1000)

    
})
promiseThree.then(function(user){
    console.log(user);
 })

 // promise 4
console.log("\n")
 const promiseFour = new Promise(function ( resolve,reject){
    setTimeout(function(){
        let Error = true;

        if(!Error){
            resolve({username: "rahulyadav",password : "12345"});
        } else{
            reject('Error: something went wrong try again!!')
        }
    },1000)

    })

promiseFour.then(function(user){
    console.log(user);
    return user.username;
    }).then(function(username){
        console.log(username);
 }).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("The promise is either resolve or rejected"))


// promise  5
console.log("\n")
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let Error = true;

        if(!Error){
            resolve({username: "javascriptUser",password : "12345"});
        } else{
            reject('Error: javaScript went wrong try again!!')
        }
    },1000)

})

async function consumePromiseFive(){
    try {
        const response = await promiseFive ;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
// call the function to execute it
consumePromiseFive();


// using fetch
async function getAllData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log('E:' , error);
        
    }
}
getAllData();


/*

fetch working :-

when fetch part executed - 2 entity/person control the flow 
1st one deal with data and promise resolving and promise rejecting
2nd one deal with network control...

property:
fetch has special queue in system for prioratizing itself over all the request of process

*/