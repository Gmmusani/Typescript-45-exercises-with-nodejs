var current_users = ["Usman", "Areeb", "Huzaifa", "Zain", "Adnan"];
var new_users = ["Hamza", "Ayesha", "Zain", "Adnan", "Ali"];
// loop through new_users to check for usernames availibility
new_users.forEach(function (one_new_user) {
    // Making a Condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (one_current_user) { return one_current_user.toLowerCase() === one_new_user.toLowerCase(); });
    // print different messages using if-else statements
    if (our_condition) {
        console.log("Sorry ".concat(one_new_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(one_new_user, " is available!"));
    }
});
