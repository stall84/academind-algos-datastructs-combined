

// Fibonacci Sequence Finder (initial)
function fib(n: number) {
    if (n < 0) return -1; // Case for negative integer input
    if (n <= 1) return 1; // Case for if index 0 or index 1 is input
    // if (n === 2) return 2;

    let returnval = 0
    const fibArr = [1, 1]
    for (let i = 2; i < n + 1; i++) {
        let newNum = fibArr[i - 2] + fibArr[i - 1];
        fibArr.push(newNum)
    }
    console.log('fibArr: ', fibArr)
    return fibArr[n]
}

console.log('fib result: ', fib(12))

function isPrime(n: number) {
    // O(n) solution however if 1 is input, it would be an O(1) operation. 
    // You typically want to analyze the worst-case scenario
    // But you should be prepared to present a best and worst case time complexity analysis.
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {  // Runs n times 
            return false;
        }

    }
    return true
}

console.log('isPrime: ', isPrime(1))

function isPrimeImproved(n: number) {
    // This is a better situation with O(sqrt(n))
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {  // Runs n times 
            return false;
        }

    }
    return true
}

function getMin(numberArray: Array<number>) {
    let currentMin = numberArray[0]  // Initialize to first element in array.
    for (const num of numberArray) {
        if (num < currentMin) {
            currentMin = num;
        }
    }
    return currentMin;
    // Time Complexity Analysis 
    // Best Case: [1,2,3] input, O(n)
    // Worst Case: [3,2,1] input, O(n)
    // Avg Case: [2,1,3] input, O(n)
}

console.log('getMin: ', getMin([4, 2, 56, 2, 1, 53, 25]))

function isEven(n: number): boolean {
    // O(1) time complexity 
    return n % 2 === 0;
}

console.log('isEven: ', isEven(8))

function isPowerOfTwo(n: number): boolean {
    if (n < 1) return false;
    let dividedNumber = n;      // Set equal to input value
    while (dividedNumber !== 1) {
        if (dividedNumber % 2 !== 0) {
            return false;
        }
        dividedNumber = dividedNumber / 2;
    }
    return true;
}

console.log('isPowerOfTwo: ', isPowerOfTwo(16))