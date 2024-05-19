// Creating a guest list Array
var guestList = ["Hamza", "Usman", "Ayesha", "areeba"];
// making variable for those guest who can't come
var dontCome = guestList[0];
// print the name of guest who can't come
console.log(dontCome, "nahi ahh skta");
// Add or remove values from guestList Array
guestList.splice(0, 1, "Amir");
// Message print for bigger table
console.log("Good News ! We have found a bigger table for dinner.");
// Adding a new guest at starting index of Array
guestList.unshift("Ali");
// adding a new guest at ending index of Array
guestList.push("Mudassir");
// Get a middle index of our guest list Array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Jamshed");
// print message of updated list
console.log("Updated list of our guests");
// sending a invitation message one by one to our guests with their names 
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
