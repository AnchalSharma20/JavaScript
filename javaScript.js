/*
Q16:
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
*/

const prompt=require("prompt-sync")()
let month=prompt("Write a month name:")
if(month==='September'||month==='October'||month==='November'){
    console.log("The season is Autumn.")
}
else if(month==='December'||month==='January'||month==='February'){
        console.log("The season is Winter.")
}
else if(month==='March'||month==='April'||month==='May'){
        console.log("The season is Spring.") 
}
else{
    console.log("The season is Summer.") 
}





// Q17 & Q18:
// Write a program which tells the number of days in a month.
let date = new Date();
let monthName=prompt("Write a month name:")
if(monthName==='April'||monthName==='June'||monthName==='September'||monthName==='November'){
    console.log(`The number of days in ${monthName} month is 30.`)
}
else if(monthName==='February'){
    if(date.getFullYear()%4===0){
        console.log(`The number of days in ${monthName} month is 29.`)
    }
    else{
        console.log(`The number of days in ${monthName} month is 28.`)
    }
}
else{
    console.log(`The number of days in ${monthName} month is 31.`) 
}




/*
Q20:
In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'
*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat')
}

if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar')
}

let a2=shoppingCart.indexOf('Honey')
shoppingCart.splice(a2,1)

let a3=shoppingCart.indexOf('Tea')
shoppingCart[a3]='Green Tea'




/*
Q22:
The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort((a,b)=>{return a-b}))
let minValue=ages[0]
console.log(minValue)

let maxValue=ages[ages.length-1]
console.log(maxValue)

let num2=ages.length%2
if(num2===0){
    let a=ages.length/2
    let b=a-1
    let sum=ages[a]+ages[b]   
    console.log("Median age is: "+sum/2)
}
else{
    let c=ages.length/2
    let d=Math.floor(c)
    let sum=ages[d]
    console.log("Median age is: "+sum)
}

let sum1=0
for(let key of ages){
    sum1=sum1+key
}
let a1=ages.length
let average=sum1/a1
console.log("Average age is: "+average)
let dif=ages[ages.length-1]-ages[0]
console.log("range of the ages: "+dif )


let value1=Math.abs(minValue - average)
let value2=Math.abs(maxValue - average)
if(value1>value2){
    console.log("|min - average|>|max - average|")
}
else if(value2>value1){
    console.log("|min - average|<|max - average|")
}
else{
    console.log("Both |min - average| and |max - average| are equal")
}







// Q23:
// Write a program to check that the number given by the user is a prime number or not.

let m=prompt("Enter your number:")
let flag=true
for(let i=2;i<m;i++){
    if(m%i===0){
        flag=false
        console.log('Given number is not a prime number')
        break
    }
}
if(flag===true){
    console.log('Given number is a prime number')
}





// Q24:
// Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
let even=[]
let odd=[]
for(let i=0;i<=100;i++){
    if(i%2===0){
        even.push(i)
    }
    else{
        odd.push(i)
    }
}
console.log(even)
console.log(odd)



/*
Q25: 
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m^2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more
    */

    let w=prompt("Enter your Weight:")
    let h=prompt("Enter your Height:")
    let BMI=w/(h*h)
    if(BMI<18.5){
        console.log("Underweight")
    }
    else if(BMI>=18.5 && BMI<=24.9){
        console.log("Normal Weight")
    }
    else if(BMI>=25 && BMI<=29.9){
        console.log("Overweight")
    }
    else{
        console.log("Obese")
    }





/*
Q26:
Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
	If the number given by the user is 2 then the output should look like this-
	2 * 1 = 2
	2 * 2 = 4
	2 * 3 = 6 and so on till 2 * 10 = 20.
*/

let n1=prompt("Enter your number:")
for(let i=1;i<=10;i++){
    console.log(`${n1} * ${i} = ${n1*i}`)
}





// Q27:
// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

for (let i = 0; i <= 100; i++) {
    let flag = true
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            flag = false
            break
        }
    }
    if (i > 1 && flag === true) {
        console.log(i)
    }
}




// Q28:

let n=prompt("Enter the number:")
//a:
for(let i=0;i<n;i++){
    let pattern=''
    for(let j=0;j<=i;j++){
        pattern+='*'
    }
    console.log(pattern)
}
console.log()

//b:
let p=prompt("Enter the number:")
for(let i=0;i<p;i++){
    let pattern=''
    for(let j=0;j<p;j++){
        pattern+='*'
    }
    console.log(pattern)
}
console.log()

//c:
let q=prompt("Enter the number:")
for(let i=0;i<q;i++){
    let pattern=''
    for(let j=1;j<(q-i);j++){
        pattern+=' '
    }
    for(let m=1;m<=(2*i+1);m++){
        pattern+='*'
    }
    console.log(pattern)
}



// Q29:
// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let filename=prompt("Enter the File name:")
console.log(".js")




// Q30:
// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

let operand1=prompt("Enter the first operand:")
let operator=prompt("Enter the operator:")
let operand2=prompt("Enter the second operand:")
switch (operator) {
    case '+':
        console.log(operand1+operand2)
        break;
    case '-':
        console.log(operand1-operand2)
        break;
    case '*':
        console.log(operand1*operand2)
        break;
    case '/':
        console.log(operand1/operand2)
        break;
    default:
        break;
}