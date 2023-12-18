console.log(' Big O(n)')
function sum(n) {
    
    let total = 0;
    for(let i= 0; i<=n; i++){
        total+=i;
    }

    return total;
}

let time1 = performance.now();
console.log(sum(1000000000));

let time2 = performance.now();
console.log((time2 - time1) / 1000);
