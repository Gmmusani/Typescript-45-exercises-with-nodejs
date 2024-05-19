// creating a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("Creating a ".concat(size, " size shirt with the ").concat(printMessage, " prints on shirt"));
}
// Calling a function by default values
make_shirt();
// calling a function now with medium size and default message
make_shirt("Medium");
// calling a function now with small size and also print different message
make_shirt("Small", "I love Javascript");
