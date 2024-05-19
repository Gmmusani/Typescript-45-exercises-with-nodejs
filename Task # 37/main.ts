// creating a function
function make_shirt (size: string = "Large", printMessage: string = "I love Typescript"){
    console.log(`Creating a ${size} size shirt with the ${printMessage} prints on shirt`)
}

// Calling a function by default values
make_shirt()

// calling a function now with medium size and default message
make_shirt("Medium")

// calling a function now with small size and also print different message
make_shirt("Small", "I love Javascript")