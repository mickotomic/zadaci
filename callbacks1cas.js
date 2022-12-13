import fs from "fs";
const promise2 = new Promise(function(resolve, reject) {
    try {
    const file = fs.readFileSync("text.txt");
      if (file) {
        resolve(file.toString());
      } 
    } catch(e) {
        reject("File not Found");
      }

  });
  
  promise2.then(
    function(value) { console.log(value); },
    function(error) { console.log(error); }
  );

  