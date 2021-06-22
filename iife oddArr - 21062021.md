const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//Print odd numbers in an array using IIFE function
let num = [1,2,3,4,5,6,7,8,9,10];
let odd = [];

(function () {
    for(let i=0;i<num.length;i++)
    {
        if(num[i]%2 !== 0)
        {
            odd.push(num[i]);
        }
    }
    odd = odd.join(" ");
    console.log(odd);
    
})();

});
