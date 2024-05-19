var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);
// Print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
console.log("Still in original order:", countriesToVisit);
// print the array in reversed order without modifying the actual array list 
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("Still in original order:", countriesToVisit);
// we have changed the original array order now
console.log("Original Array reversed:", countriesToVisit.reverse());
// print the array to show that its back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());
// print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// we have changed again the original array order now
console.log("Original Array reversed again:", countriesToVisit.reverse());