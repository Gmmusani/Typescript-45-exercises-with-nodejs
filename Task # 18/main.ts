let countriesToVisit: string[] = ["China","Denmark","Brazil","Argentina"];

console.log("Original Order:", countriesToVisit);

// Print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

console.log("Still in original order:", countriesToVisit);

// print the array in reversed order without modifying the actual array list 
console.log("Reverse Order:", [...countriesToVisit].reverse());

console.log("Still in original order:", countriesToVisit);

// we have changed the original array order now
console.log("Original Array reversed:", countriesToVisit.reverse());

// print the array to show that its back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// we have changed again the original array order now
console.log("Original Array reversed again:", countriesToVisit.reverse());




