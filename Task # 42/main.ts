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

// call make_great function to modify magicians_name
let great_magicians = make_great(magicians_name);

// call show_magicians that show modified list of magicians
show_magicians(great_magicians);