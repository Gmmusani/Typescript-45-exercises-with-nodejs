// define the function to show magicians
function show_magicians (magicians: string[]){
    magicians.forEach(name => console.log(name));
};

// function to make magicians great through .map() it will modify array
function make_great (magicians: string[]){
     return magicians.map(name => `The Great ${name}`)
}

// Define an array of magicians names
let magicians_name = ["Harry Potter","Jamshed","Anas"];

// making a copy of original array through .slice() function
let copy_magician_names = magicians_name.slice();

// modified the copied array to include "The Great" with their names
let copy_great_magician = make_great(copy_magician_names);

// Print both arrays Original and copied

// Original
console.log("Original Array\n");
show_magicians(magicians_name);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magician);