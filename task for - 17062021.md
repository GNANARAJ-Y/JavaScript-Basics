const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var obj = [{ person: "Name 1", age: "2", company: "GUVI" },
          { person: "Name 2", age: "5", company: "GUVI geek" },
          { person: "Name 3", age: "8", company: "GUVI geek network" }];

for(i=0;i<obj.length;i++)
{
    console.log(obj[i]);
}
});

