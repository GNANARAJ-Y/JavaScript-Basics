//Print odd numbers in an array using Anonymous function
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let num = userInput[0].split(" ");
let odd = [];

let oddArr = function () {
    for(let i=0;i<num.length;i++)
    {
        if(num[i]%2 !== 0)
        {
            odd.push(num[i]);
        }
    }
    odd = odd.join(" ");
    console.log(odd);
    
};

oddArr();

});
