console.log("-> First Solution :");

function missingNums(arr){ //First we find out the sum  of a normal array from 1-10 using a loop 
    let sum1 = 0;
    for(let i=1; i<=10; i++){
        sum1+= i;  
    }
    let sum2 = arr.reduce((acc,cur) => acc+cur) //We calculate the sum of our array
    return sum1-sum2;  // The difference between the sum of the full array and the sum of our array should be the missing number.
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

/////The short method using reduce:
function missingNums(arr){
    let sum1 = [1,2,3,4,5,6,7,8,9,10].reduce((acc, cur) => acc + cur)
    let sum2 = arr.reduce((acc,cur) => acc+cur)
    return sum1-sum2;
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));