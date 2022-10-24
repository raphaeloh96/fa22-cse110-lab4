## Expose - Javascript
### Part 2

1. `3`. Because, after completing the for loop, `i` will be equal to `prices.length`, which in this case is `3`.
2. `150`. Because, the last value stored in `discountPrice` is corresponding to the last element in the `prices` list. (`300 * (1 - 0.5) = 150`)
3. `150`. Same as above. The last value stored in `finalPrice` is corresponding to the last element in the `prices` list. (`Math.round(150 * 100) / 100 = 150`)
4. The function processes the given `prices` list and returns the list of `discounted` prices. (`[ 50, 100, 150 ]`)
5. `ReferenceError: i is not defined`. The `i` variable is declared with the keyword `let`. Hence, it cannot be accessed outside it's block scope (the for loop).
6. `ReferenceError: discountPrice is not defined`. The `discountPrice` variable is declared with the keyword `let`. Hence, it cannot be accessed outside it's block scope (the for loop).
7. `150`. The last value stored in `finalPrice` is corresponding to the last element in the `prices` list. (`Math.round(150 * 100) / 100 = 150`). There are no errors since `finalPrice` is accessed within its blocks scope.
8. The function processes the given `prices` list and returns the list of `discounted` prices. (`[ 50, 100, 150 ]`)
9. `ReferenceError: i is not defined`. The `i` variable is declared with the keyword `let`. Hence, it cannot be accessed outside it's block scope (the for loop).
10. `3`. Because at `line 4`, we are declaring `const` variable `length` with value `prices.length` which is `3`.
11. The function processes the given `prices` list and returns the list of `discounted` prices. (`[ 50, 100, 150 ]`). There's no error since pushing an element into the `discounted` list does not change it's reference and thus, is valid for `const`.
12. 
        A. student.name
        B. student['Grad Year']
        C. student.greeting()
        D. student['Favorite Teacher']['name']
        E. student.courseLoad[0]
13. 
        A. '32'. Because the integer 2 maps to its exact string representation '2'. Hence, '3' + '2' = '32'.
        B. 1. Because, '3' maps to its exact integer representation 3. Hence, 3 - 2 = 1.
        C. 3. Because null maps to the integer 0. Hence, 3 + 0 = 3.
        D. '3null'. Because null maps to the string 'null'. Hence, '3' + 'null' = '3null'.
        E. 4. Because true maps to the integer 1. Hence, 1 + 3 = 4.
        F. 0. Because false and null both map to the integer 0. Hence, 0 + 0 = 0.
        G. '3undefined'. Because undefined maps to its exact string representation 'undefined'. Hence, '3' + 'undefined' = '3undefined'.
        H. NaN. Because, in subtraction, undefined cannot be mapped to any valid number. Thus, it returns NaN (not-a-number).
14. 
        A. true. Because '2' is mapped to the integer 2 which is greater than 1.
        B. false. Because, the string '2' is lexicographically greater than the string '12'.
        C. true. Because, the string '2' maps to the integer 2. Hence, '2' == 2 is true.
        D. false. Because, 2 and '2' have different data types.
        E. false. Because true maps to the integer 1 which is not equal to 2.
        F. true. Because Boolean(2) returns true which has same value and data type as true.
15. The `==` operator only checks whether the operands have same values or not. If they have different data types, it automatically typecasts the operators. The `===` checks the data type equality as well as the value equality i.e. both data types and values of the operands should be same.
16. See [part2-question16.js](part2-question16.js)
17. The result will be `[ 2, 4, 6 ]`. The function `modifyArray` performs the function `callback` on each element of `array` and stores them in a new array which is retured at the end. In this case, the `callback` is `doSomething` which multiplies each element by `2` and returns the result.
18. See [part2-question18.js](part2-question18.js)
19. `1 4 3 2` (each number on a seperate line). This is because `setTimeout` is asynchronous.
