# Node.js Unhandled Division by Zero Bug

This repository demonstrates a common yet easily missed error in Node.js: division by zero. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.

**Bug:** The original code lacks error handling for the case where the divisor is zero, leading to an unhandled exception.

**Solution:** The solution incorporates a check to prevent division by zero and handles the potential error gracefully.