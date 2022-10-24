## Expose - Javascript
### Part 1

1. `values added:  20` (No error)
2. `final result:  20` (No error)
3. `values added:  20` (No error)
4. `ReferenceError: result is not defined.` The `result` variable is declared with the keyword `let`. Hence, it cannot be accessed outside it's block scope.
5. `TypeError: Assignment to constant variable.` We are trying to reassign the value `num1 + num2` to `result` at `line 7` which is not valid because it is declared with `const` keyword.
6. `TypeError: Assignment to constant variable.` We are trying to reassign the value `num1 + num2` to `result` at `line 7` which is not valid because it is declared with `const` keyword. 