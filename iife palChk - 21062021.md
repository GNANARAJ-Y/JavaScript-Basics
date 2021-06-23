const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//Return all the palindromes in an array using IIFE function
let palArr = [1,22,333,4444,53535,6786,7867,8348438,6969,"liril","madam","radar","rotor","tenet","civil"];
let revArr = [];
let val;

(function () {
    for(let i=0;i<palArr.length;i++)
    {
        val = palArr[i].toString();
        val = val.split("");
        val = val.reverse();
        val = val.join("");
        revArr.push(val);
        if(palArr[i] == revArr[i])
        {
            console.log(palArr[i]);
        }
    }
    
})();

});
