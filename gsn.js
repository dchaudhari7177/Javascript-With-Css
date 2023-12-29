const prompt = require ('prompt-sync')();

let num= Math.floor(Math.random()*(100-1))+1;
let no = prompt("Enter the number");
let chances = 0;
while(no!=num){
    no = prompt("Enter the number");
if(no<num){
    console.log("your entered number is less than random number");
}
else{
    console.log("your entered number is greater than random number");
}
chances++;
}
console.log("The counts required to guess the correct number are "+ chances);
console.log("The actual Random number is : "+num);