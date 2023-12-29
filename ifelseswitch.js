const prompt =require('prompt-sync')();

let age=prompt("Enter YOur age");
if(age<0){
    alert("Invalid Age...");
}
else if(age>0 && age<18){
    alert("valid Age, but Your are a kid now...");

}
else{
    alert("Your are a valid man on this earth");
}

a=Number.parseInt(a);
switch(a){
    case 1: console.log("age is 1"); break;

    case 2: console.log("age is 2"); break;

    case 3: console.log("age is 3");

    case 4: console.log("age is 4");

    default: alert("Invalid choice");
}