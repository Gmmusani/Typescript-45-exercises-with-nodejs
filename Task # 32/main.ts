let current_users = ["Usman","Areeb","Huzaifa","Zain","Adnan"];

let new_users = ["Hamza","Ayesha","Zain","Adnan","Ali"];

// loop through new_users to check for usernames availibility
new_users.forEach(one_new_user => {

    // Making a Condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(one_current_user => one_current_user.toLowerCase() === one_new_user.toLowerCase());

    // print different messages using if-else statements
    if (our_condition){
        console.log(`Sorry ${one_new_user} is already taken!`)
    } else {
        console.log(`This username ${one_new_user} is available!`)
    }
})