let guestList = ["Hamza","Usman","Ayesha","areeba"];

let dontCome = guestList[0];

console.log(dontCome, "nahi ahh skta");

guestList.splice(0, 1, "Amir")

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));