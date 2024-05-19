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
// call make_great function to modify magicians_name
var great_magicians = make_great(magicians_name);
// call show_magicians that show modified list of magicians
show_magicians(great_magicians);
