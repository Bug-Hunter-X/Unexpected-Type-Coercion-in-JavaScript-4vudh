function myFunction(a, b) {
  // Explicit type checking and conversion
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: Both arguments must be numbers.';
  }
  return a + b;
}

console.log(myFunction(5, 10)); // Output: 15
console.log(myFunction(5, '10')); // Output: Invalid input: Both arguments must be numbers.