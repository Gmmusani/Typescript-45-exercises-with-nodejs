// define the function to show magicians
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
;
// function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magicians_name = ["Harry Potter", "Jamshed", "Anas"];
// making a copy of original array through .slice() function
var copy_magician_names = magicians_name.slice();
// modified the copied array to include "The Great" with their names
var copy_great_magician = make_great(copy_magician_names);
// Print both arrays Original and copied
// Original
console.log("Original Array\n");
show_magicians(magicians_name);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magician);
