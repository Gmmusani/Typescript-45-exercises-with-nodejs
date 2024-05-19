let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple","banana","orange"];

// Test for equality and inequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple?");
console.log(apple != "apple");

// test using lowercase function
console.log("\nis APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\nis APPLE is not equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");

// numerical tests
console.log("\nis ten is equal to twenty?");
console.log(ten == twenty);

console.log("\nis ten is not equal to twenty?");
console.log(ten != twenty);

// greater than
console.log("\nis ten is greater than zero?");
console.log(ten > 0);

// less than
console.log("\nis ten is less than zero?");
console.log(ten < 0);

// greater than or equal to
console.log("\nis ten is greater than or equal to 5?");
console.log(ten >= 5);

// less than or equal to 
console.log("\nis twenty is less than or equal to 10?");
console.log(twenty <= 10);

// tests using "and" & "or" operators

// using && (and)
console.log("\ntwentyis not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

// using || (or)
console.log("\nten is equal to 30 or ten is greater than 5");
console.log(ten == 30 || ten > 5);

console.log("\nten is equal to 30 or ten is less than 5");
console.log(ten == 30 || ten < 5);

// test wheather an item is include in array
console.log("\nis orange include in my fruits array?");
console.log(fruits.includes("orange"));

// not include
console.log("\nis orange is not include in my fruits array?");
console.log(!fruits.includes("orange"));















