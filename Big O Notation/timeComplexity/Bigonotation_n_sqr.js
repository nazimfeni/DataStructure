console.log('Big O(n^2')
function multipleArray(n) {

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {

            console.log(i, j)

        }

    }

}


console.log(multipleArray(3));