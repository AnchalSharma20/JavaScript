// Q19:
// Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

var nameOfCountries =require('./countries.js')
var nameOfWebTech =require('./web_techs.js')

console.log(nameOfCountries.countriesName[2])
console.log(nameOfWebTech.web_techs_Name[3])
