let promiseTest = new Promise (function(resolve, reject){
    let clean = true;
    if (clean){
        resolve("Room is clean");
    }else{
        reject("Room is not clean");
    }
});

promiseTest.then(function(fromResolve){
    console.log(fromResolve);
}).catch(function(fromReject){
    console.log(fromReject);
});
