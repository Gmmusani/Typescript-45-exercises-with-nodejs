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
// inform that only two guests invite for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");
// using while loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " i cant invite you to dinner"));
}
// sending a invitation to the last guests on the list
console.log("Invitations to the last two guests");
guestList.forEach(function (lastTwo) { return console.log("luckly ".concat(lastTwo, ", you are still invited to dinner")); });
// Removing the last two guests from the list 
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
