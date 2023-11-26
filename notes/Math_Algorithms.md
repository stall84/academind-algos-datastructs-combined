### Fibonacci Sequence

- Any number in the sequence will be the sum of it's preceding 2 numbers.
- Must start with [*1*, *1*, 2, 3, 5, ...]
- Fibonacci Spiral found in nature.
- Potential Interview Question: _'Return the nth element of the fibonacci sequence.'_
- Algorithm Requirements:
  - Calculate the sequence up to the element (n) we're looking for
  - Return that element

### Prime Finder

- Introduce using the modulus operator.
- The important thing to understand in the algorithm we derived for this (see below). We can have a best Big-O scenario, and a _worst_ case Big-O scenario

```
function isPrime(n: number): boolean {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
```

- If the value of 1 or 2 is input to isPrime() .. We'd have an _O(1)_ time complexity. However in most cases we will have to enter the loop and have an _O(n)_ complex solution.
- Be prepared to provide _both a best and worst case time-complexity analysis._ However if unprompted, assume worst-case analysis.

#### Improved-Efficiency Prime Finder

- We can improve time-complexity to O(sqrt(n)), we can greatly speed up this algorithm by using a mathematical observation about (non) prime numbers
- Any _non_ prime number will have at least one of it's factors (not 1 or the number itself obviously) that will be equal to or smaller than the _square *root*_ of the number.
- So we could cut the operations in half by modifying our loop as below (stopping at the number's square root value)

```
function isPrime(n: number): boolean {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
```

### Power Of Two Algorithm (O(log n))

- See below implementation. O(log n) time complexity. Better than O(n) especially at larger and larger values for n

```
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

```
