var guestList = ["Hamza", "Usman", "Ayesha", "areeba"];
var dontCome = guestList[0];
console.log(dontCome, "nahi ahh skta");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
