console.log('Big O(1)')
function sum(n) {
   
    return n * (n + 1) / 2; 
}

let time1 = performance.now();
console.log(sum(1000000000));

let time2 = performance.now();
console.log((time2 - time1) / 1000);
