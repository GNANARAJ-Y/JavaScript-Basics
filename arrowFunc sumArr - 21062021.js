//Sum of all numbers in an array using Anonymous function
let num = [11,22,33,44,55,66,77,88,99];
let sum = 0;

let sumArr = () => {
    for(let i=0;i<num.length;i++)
    {
        sum = sum + (+num[i]);
    }
    
    console.log(sum);
    
};

sumArr();
