const numbers = [0, 5, 0, -3, 12, 0, 8, 0, 4];
const zeroCount = numbers.reduce((count, num) => count + (num === 0 ? 1 : 0), 0);
console.log(`Array: [${numbers.join(', ')}]`);
console.log(`Number of zeros: ${zeroCount}`);