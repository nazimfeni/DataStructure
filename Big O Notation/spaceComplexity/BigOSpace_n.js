console.log('Big O(n) space!')
function sum(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]*2);
    }
    return newArr;
}


console.log(sum([2, 4, 6, 8]));