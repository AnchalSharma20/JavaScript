// Q1:
// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

//string
let name1 ='iNeuron'
console.log(name1)//output:iNeuron

//boolean
let bool = true
console.log(bool)//output:true

//undefined
let user1
console.log(user1)//output:undefined

//null
let user2=null
console.log(user2)//output:null




// Q2:
// Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

let firstName='Anchal'
let lastName='Sharma'
let maritalStatus='Single'
let country='India'
let age='20'

console.log(`My name is ${firstName} ${lastName}. I am ${age} years old and ${maritalStatus}. I am from ${country}`)




// Q3:
// Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.

let myName='Anchal Sharma'
console.log(myName.toUpperCase())



// Q4:
// Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

let string1='That line is not in the script'
console.log(string1.includes('script'))



// Q5:
// Declare a varibale and assign string value to it and then split it into an array using split() method

let name2='Anchal'
let array1=name2.split('')
console.log(array1)




// Q6:
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let string2='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let array2=string2.split(',')
console.log(array2)



// Q7:
// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let array3=['Anurag','pw skills','physics wallah','Hitesh','pw skills','Hitesh','pw skills','Anurag']
console.log(array3.indexOf('pw skills'))
console.log(array3.lastIndexOf('pw skills'))


//Q8:
// Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

let username=' Anchal Sharma '
console.log(username+" length is: "+username.length)
console.log(username.trim()+ " length is: " + username.trim().length)




// Q9:
// Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

//All the numbers are true only zero is false
//truthy value
console.log(Boolean(7))//output:true
console.log(Boolean("Anchal"))//output:true
console.log(Boolean(-1))//output:true
//falsy value
console.log(Boolean(null))//output:false
console.log(Boolean(0))//output:false
console.log(Boolean(undefined))//output:false




/*
Q10:
Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //flase
4 == '4' //true
4 === '4' //false
Find the length of python and jargon and make a falsy comparison statement.
*/

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3 )
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4 )
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
let string3='python'
let string4='jargon'
console.log("lenght of python is "+string3.length)
console.log("lenght of jargon is "+string4.length)
console.log((string3.length-string4.length))



/*
Q11:
Use the Date object to do the following activities
- What is the year today?
- What is the month today as a number?
- What is the date today?
- What is the day today as a number?
- What is the hours now?
- What is the minutes now?
- Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

let date3 = new Date();
console.log(date3.getFullYear())
console.log(date3.getMonth())
console.log(date3)
console.log(date3.getDay())
console.log(date3.getHours())
console.log(date3.getMinutes())
let d=(date3.getTime())
var sec = d/1000;
console.log(sec)



// Q12:
//  Create a human readable time format using the Date time object
    // - YYYY-MM-DD HH:mm
    // - DD-MM-YYYY HH:mm
    // - DD/MM/YYYY HH:mm

let date1 = new Date();
let month=date1.getMonth()
month+=1
let date2=date1.toString ()
let date=(date2.charAt(8)+date2.charAt(9))

console.log(date1.getFullYear()+"-"+month+"-"+date+" "+date1.getHours()+":"+date1.getMinutes())
console.log(date+"-"+month+"-"+date1.getFullYear()+" "+date1.getHours()+":"+date1.getMinutes())
console.log(date+"/"+month+"/"+date1.getFullYear()+" "+date1.getHours()+":"+date1.getMinutes())





// Q13:
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const prompt=require("prompt-sync")()
let age1=prompt("Enter your age:")
if(age1>=18){
    console.log("You are old enough to drive")
}
else{
    console.log("you need to wait till the age of 18")
}





// Q14:
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

let num=prompt("Enter the number:")
if(num%2===0){
    console.log("Entered number is Even")
}
else{
    console.log("Entered number is Odd")
}




/*
Q15:
Write a program which can give grades to students according to theirs scores:
    - 90-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/

let marks=prompt("Enter the marks of Student:")
if(marks>=0 && marks<=49){
    console.log("Student grade is F")
}
else if(marks>=50 && marks<=59){
    console.log("Student grade is D")
}
else if(marks>=60 && marks<=69){
    console.log("Student grade is C")
}
else if(marks>=70 && marks<=89){
    console.log("Student grade is B")
}
else if(marks>=90 && marks<=100){
    console.log("Student grade is A")
}
else{
    console.log("Invalid marks")
}