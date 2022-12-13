let cleanRoom = function () {
  return new Promise(function (resolve, reject) {
    resolve("Room is cleaned!");
  });
};

let removeGarbage = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + "Garbage is removed!");
  });
};

let winIceCream = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + "We won icecream!");
  });
};

cleanRoom()
  .then(function (result) {
    return removeGarbage(result);
  })
  .then(function (result) {
    return winIceCream(result);
  })
  .then(function (result) {
    console.log("The job is done!" + result);
  });

Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(function () {
  console.log("All are finished!");
});

Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function () {
  console.log("One has finished first!");
});


const promise = new Promise(function(resolveFunction, rejectFunction) {
    // Ovdje ide kod koji ce potrajati neko vrijeme
    resolveFunction("OK"); // ova funkcija se izvrsava ako je sve ok
    rejectFunction("Error");  // ova funkcija se izvrsava ako dodje do problema
});

    // ovo je kod koji konzumira promise i mora cekati na rezultat
promise.then(
    function(value) {
        console.log(value)
        // ovaj kod ce se izvrsiti ako je promise uspio 
    },
    function(error) {
        console.log(error)
        // ovaj kod ce se izvrsiti u slucaju greske 
    }
);

console.log("I'm still the number one!");

