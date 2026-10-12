// Part 1: Variables — var, let, const (6 Questions):- 

    // 1.	Declare a variable using var, assign it the value 10, reassign it to 20, and print the result.
    var num1 = 10;
    num1 = 20;
    console.log(num1);

    // 2.	Declare a variable using var with the value 30. Redeclare the same variable with the value 50 and print it.
    var num2 = 30;
    var num2 = 50;
    console.log(num2);

    // 3.	Declare a variable using let with the value 100. Reassign it to 200 and print the result.
    let num3 = 100;
    num3 = 200;
    console.log(num3);

    // 4.	Declare a variable using const to store your age. Print the value.
    const age1 = 24;
    console.log(age1);

    // 5.	Identify which variable declarations are valid and which are invalid: var, let, and const.
    // Valid: var, let, const.
    // Invalid: Redeclaring a variable with let or const in the same scope is invalid.

    // 6.	Create three variables using var, let, and const to store your name, age, and city. Print all three.
    var name = "Krishna Babu";
    let age2 = 24;
    const city = "Hyderabad";
    console.log(name, age2, city);

// Part 2: Printing Statements and Data Types (6 Questions):-

    // 7.	Use prompt() to get the user's name and display it using alert().
    let userName = prompt("Enter your Name");
    alert("Your Name is: " + userName);

    // 8.	Use prompt() to get the user's age and print it using console.log().
    let userAge = prompt("Enter your Age");
    console.log("Your Age is: " + userAge);

    // 9.	Use confirm() to ask the user whether they know JavaScript. Print the returned value.
    let knowJs = confirm("Do you know JavaScript ?");
    console.log("Do you know JavaScript ? " + knowJs);

    // 10.	Declare variables containing a string, number, boolean, and undefined value. Print each variable's value and type.
    let str1 = "Hello, World";
    let num = 9;
    let bool1 = true;
    let undef1;
    console.log("String:", str1, "Type:", typeof str1);
    console.log("Number:", num, "Type:", typeof num);
    console.log("Boolean:", bool1, "Type:", typeof bool1);
    console.log("Undefined:", undef1, "Type:", typeof undef1);
    
    // 11.	Create an array containing five fruits. Print the entire array, the first element, and the last element.
    let fruits = ["Apple", "Banana", "Mango", "orange", "Grapes"];
    console.log("Fruits Array: ", fruits);
    console.log("First Element: ", fruits[0]);
    console.log("Last Element: ", fruits[fruits.length - 1]);

    // 12.	Create an object containing a fruit array, an electronic-items array, and a vegetable name. Print each property separately.
    let superMarket = {
        fruits: ["Apple", "Banana", "Mango"],
        electronicItems: ["TV", "Laptop", "Mobile"],
        vegetable: "Carrot"
    };
    console.log("Fruits: ", superMarket.fruits);
    console.log("Electronic Items: ", superMarket.electronicItems);
    console.log("Vegetable: ", superMarket.vegetable);

// Part 3: Arithmetic Operators (6 Questions):-

    // 13.	Declare two variables with values 15 and 4. Print their addition, subtraction, multiplication, and division.
    let a9 = 15;
    let b9 = 4;
    console.log("Addition: ", a9 + b9);
    console.log("Subtraction: ", a9 - b9);
    console.log("Multiplication: ", a9 * b9);
    console.log("Division: ", a9 / b9);

    // 14.	Find the remainder when 27 is divided by 5 using the modulus operator.
    console.log("Remainder of 27 divided by 5: ", 27 % 5);

    // 15.	Calculate \(3^4\) using the exponentiation operator.
    console.log("3 raised to the power of 4: ", 3 ** 4);

    // 16.	Declare a variable with the value 10. Apply the pre-increment operator and print the result.
    let x = 10;
    console.log("Pre-increment: ", ++x); 

    // 17.	Declare a variable with the value 10. Apply the pre-decrement operator and print the result.
    let y = 10;
    console.log("Pre-decrement: ", --y);

    // 18.	Predict the output:
    let x1 = 5;
    let y1 = x1++;
    console.log(x1); // Output: 6
    console.log(y1); // Output: 5

// Part 4: Pre/Post Increment and Decrement (12 Questions):-

    // 19. Predict the output:
    let a1 = 4;
    console.log(a1++); // Output: 4
    console.log(a1); // Output: 5

    // 20. Predict the output:
    let a2 = 4;
    console.log(++a2); // Output: 5
    console.log(a2); // Output: 5

    // 21. Predict the output:
    let a3 = 8;
    let b3 = a3++;
    console.log(a3); // Output: 9
    console.log(b3); // Output: 8

    // 22. Predict the output:
    let a4 = 8;
    let b4 = ++a4;
    console.log(a4); // Output: 9
    console.log(b4); // Output: 9

    // 23. Predict the output:
    let a5 = 6;
    let b5 = a5--;
    console.log(a5); // Output: 5
    console.log(b5); // Output: 6

    // 24. Predict the output:
    let a6 = 6;
    let b6 = --a6;
    console.log(a6); // Output: 5
    console.log(b6); // Output: 5

    // 25. Predict the output:
    let a7 = 2;
    a7++;
    a7++;
    console.log(a7); // Output: 4

    // 26. Predict the output:
    let a8 = 10;
    --a8;
    --a8;
    console.log(a8); // Output: 8

    // 27. Predict the output:
    let b7 = 3;
    b7 = b7++;
    console.log(b7); // Output: 3

    // 28. Predict the output:
    let c1 = 4;
    let d1 = c1++;
    console.log("c1:", c1); // Output: 5
    console.log("d1:", d1); // Output: 4

    // 29. Predict the output:
    let e1 = 5;
    let f1 = --e1;
    console.log("e1:", e1); // Output: 4
    console.log("f1:", f1); // Output: 4

    // 30. Predict the final values of a, b, and c:
    let a = 5;
    let b = a++;
    let c = ++a;
    console.log("a:", a); // Output: 7
    console.log("b:", b); // Output: 5
    console.log("c:", c); // Output: 7
