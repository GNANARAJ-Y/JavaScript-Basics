//Print odd numbers in an array using Anonymous function
let num = [11,22,33,44,55,66,77,88,99,110,130];
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

