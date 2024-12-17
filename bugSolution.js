```javascript
function myFunction(a, b) {
  // Check if b is 0 before division
  if (b === 0) {
    return 0; // or throw an error: throw new Error('Cannot divide by zero');
  } else {
    return a / b; 
  }
}
```