const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//Print odd numbers in an array using ES6 Arrow functions
let num = [111,222,333,444,555,666,777,888,999];
let odd = [];

let oddArr = () => {
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
