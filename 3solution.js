console.log("-> Third Solution :");

function missingNums(arr){                 
    for (let i = 1; i <= 10; i++) {
        if(arr.indexOf(i) == -1) {
          return i;
        }
        }
    }

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

