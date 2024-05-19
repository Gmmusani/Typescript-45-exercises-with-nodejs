// Define a function to print each magician name from an array
function show_magicians (magicians: string[]){
    magicians.forEach(name => console.log(name));
};

// Define an array containing magicians name
let magician_names = ["Harry Potter","Jamshed","Anas"];

// call the function to print each magician name
show_magicians(magician_names)