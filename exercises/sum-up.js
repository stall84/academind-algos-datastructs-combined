"use strict";
// naive initial approach / brute force
function sumUp(n) {
    if (n < 0)
        return 0;
    var result = 0;
    for (var i = 0; i < n; i++) {
        result += i;
    }
    return result;
}
// console.log(sumUp(15))
// New Task: Create algorithm to sum up an array of integers. Determine the most efficient time complexity algorithm
function arraySummer(intArr, algorithm) {
    switch (algorithm) {
        case 'O(1)':
            var sum1 = intArr.reduce(function (prev, curr) {
                return prev += curr;
            });
            console.log('O(1) solution: ', sum1);
            return sum1;
            break;
        case 'O(log n)':
            break;
        case 'O(n)':
            var sum = 0;
            for (var i = 0; i < intArr.length; i++) {
                sum += intArr[i];
            }
            console.log('O(n) solution: ', sum);
            return sum;
            break;
        case 'O(n^2)':
            break;
        case 'O(2^n)':
            break;
        default:
            console.log('No matching algorithm found...');
            break;
    }
}
arraySummer([23, 23, 1, 3], 'O(1)');
