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
