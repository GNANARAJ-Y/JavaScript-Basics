//Return all the palindromes in an array using ES6 Arrow function
let palArr = [1,22,333,4444,53535,6786,7867,8348438,6969,"liril","madam","radar","rotor","tenet","civil"];
let revArr = [];
let val;

let palChk = () => {
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
    
};

palChk();