function findElement(arr: number[], element: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return arr[i];

    }
    return -1
}

console.log('findElement : ', findElement([21, 5, 62, 2, 8, 23], 8))

function binarySearchIterative(sortedArr: number[], element: number): number | null {
    let startIndex = 0;
    let endIndex = sortedArr.length - 1

    while (startIndex <= endIndex) {
        let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        if (sortedArr[midIndex] === element) {
            return midIndex;
        }
        if (sortedArr[midIndex] < element) {
            startIndex = midIndex + 1
        } else {
            endIndex = midIndex - 1
        }
    }
    return null;

}

console.log('binarySearchIterative: ', binarySearchIterative([2, 8, 13, 42, 55, 81, 97], 8))