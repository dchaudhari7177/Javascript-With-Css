//for loop
const prompt = require('prompt-sync')();

let a = prompt("Enter The number till which you want to print the numbers");
for (let i = 1; i <= a; i++) {
    console.log(i);
}

//for in loop
let obj = {
    dipak: 30,
    amit: 29,
    kamlesh: 28,
    sujal: 27,
    manish: 26
}
for (let b in obj) {  //in this b will take the first position value of obj i.e.,(0) . and 
    console.log("Marks of" + b + "are" + obj[b]); //if we want to access the value at the postion i.e, (b) ,, then you need to access it by using obj[b]...
}

//for of loop
for (let c of "Dipak") { // in this c will take directly the value of the first postion i.e  in first iteration it will print the 'D' ..then so on...
    console.log(c);
}
