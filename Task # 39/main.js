// Creating the function with parameters which return the values in string
function city_Country(city, country) {
    return "".concat(city, " , ").concat(country);
}
// calling the function and print the returned value 
console.log(city_Country("Karachi", "Pakistan"));
console.log(city_Country("Lahore", "Pakistan"));
console.log(city_Country("Berlin", "Germany"));
