// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
  
//   processUserInput(greeting);

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback funkcija
function callMe() {
    console.log('I am callback function!');
}

// prosledjivanje funkcije kao argumenta drugoj funkciji
greet('Micko', callMe);

