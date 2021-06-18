const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var obj = [{ person: "Name1", age: "2", company: "GUVI" },
          { person: "Name2", age: "5", company: "GUVI geek" },
          { person: "Name3", age: "8", company: "GUVI geek network" }];

 for(var i of obj)
    {
        console.log(i.person, i.age, i.company);
    }
});

