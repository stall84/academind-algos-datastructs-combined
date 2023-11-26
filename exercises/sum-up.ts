// naive initial approach / brute force

function sumUp(n: number): number {
    if (n < 0) return 0;
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += i;
    }
    return result;
}

// console.log(sumUp(15))

// New Task: Create algorithm to sum up an array of integers. Determine the most efficient time complexity algorithm

function arraySummer(intArr: Array<number>, algorithm: string) {
    switch (algorithm) {
        case 'O(1)':
            // This is NOT actually O(1) time complexity. Because the reduce function is essentially looping internally.
            let sum1 = intArr.reduce((prev: any, curr: any) => {
                return prev += curr;
            })
            console.log('O(1) (except its not) solution: ', sum1)
            return sum1;
            break;
        case 'O(log n)':

            break;
        case 'O(n)':
            let sum = 0;
            for (let i = 0; i < intArr.length; i++) {
                sum += intArr[i];
            }
            console.log('O(n) solution: ', sum)
            return sum;
            break;
        case 'O(n^2)':

            break;
        case 'O(2^n)':

            break;
        default:
            console.log('No matching algorithm found...')
            break;
    }
}

arraySummer([23, 23, 1, 3], 'O(1)')

function oneLineSum(intArr: Array<number>) {
    let length = intArr.length;

}