// define a function with aresr parameter that accept items argument representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow enjoy the sandwich");
};

// call the funtion 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg")

makeSandwich("Bread", "Butter");

makeSandwich("Egg", "Cheese", "Chicken", "Lettuce", "Tomato");