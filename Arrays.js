let marks=[91,83,"Dipak",false];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);   
console.log(marks[4]);      //it show "undefined" Because the idex 5 is not exist...
console.log("The Length of Marks named array is",marks.length);
marks[5]="90";
console.log(marks[5]); 

// //Array MEthods

let num = [123, 43, 1, 6, 3];

//1- toString():-
let b = num.toString();
console.log(b);

//2- join()
let c = num.join("++");
console.log(c);  //typr=String

//3 - pop()
let r = num.pop();  //returns the popped element
console.log(num, r);

//4 - push()  
let r2 = num.push(5);   //returns the new length of array after push operation
console.log(num, r2);

//5 - shift()
let r3 = num.shift(); //it removes the first element from Array,,,& returns the shifted/deleted/ removed element..
console.log(num, r3);

//6 - unshift()
let r4 = num.unshift(1); //it adds the new element at the first index and returns the new array lenght
console.log(num, r4);

//7 - delete()
delete num[2];  //it deletes the element from specified index but the length of array will not changed..
console.log(num);

//8 - concat()
let num2 = [10, 11, 12, 13, 14];
let new_array = num.concat(num2);  //it concatenes of joins the new array to the existing given array **old arrays will not changed...
console.log(new_array);

//9 - sort()
num.sort();  //this method sorts the array in ascending order and change the array element positions
console.log(num);

//note:- below functiion is for sort the array is ascendign order,, if you want to sort it in descending then change/opposite the return statement like = {return b-a;}
let compare = (a, b) => {
    return a - b;
}
num.sort(compare);  //it will sorts the array in Ascending order using Compare function
console.log(num);

//10 - splice() && Slice()
//splice():-
let r6 = num.splice(2, 3, 21, 23, 34); // it takes three arguments,,,1st is the position from which you want to start to delete a numbers then,,,
// 2nd is the counts of positions till which you want to delete,,, 3 rd are the numbers that you want to add threre as a new as their replacement..
//*note we can add any number of elememts that U want to add there as a replacement of deleted numbers */
//AND  it returns the deleted items
console.log(num, r6);
// //Slice():-
let newnum = num.slice(3, 5); //this method is used to create an new array from specified indexes of the existing array,,,,
//**NOTE:- old existing array cannot be modified...
//it can take two arguments,, first argument indicates from which you want to select the elements for new array,,
//and 2nd argument indicates the position till which you want to select elements..
//yu can also give only one parameter to slice methof ,,which indicates that from given position to start the new array, till the last element of the existing array...
console.log(newnum);






//Looping through Arrays
num = [1, 2, 3, 4, 5]
//1 - for()
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

//2 - foreach()
num.forEach((element, index, array) => { //it can takes three arguments 1st: value,,,2nd: index ,,, 3:complete array with all elements
    console.log(element * element);
    console.log(index);
    console.log(array);
})

//3 - Array.From
let abc = "dipak"
let arr = Array.from(abc); //this method is used to create an array from any other exsisting  object
console.log(arr);

//4 - for...of()
for (let i of num) {
    console.log(i);
}

//5 - for...in()
for (let i in num) {
    console.log(num[i]);
}

//***6 - map()
let t = num.map((value, index, array) => { ////it can takes three arguments 1st: value,,,2nd: index ,,, 3:complete array with all elements
    //when we want t create an new array by performing some action of existing array then map() is used
    console.log(value, index, array); // this method is same as for each but it can create an new array by performing some operation on each element
    return value + 1;

})
console.log(t);
console.log(num); //the old existing array cannot be modified..

//***7 - filter()  
let nas = num.filter((value) => { // this function returns the values for which this filter function returns true ,,,
    return value < 3;   //for those values this filter function returning true those values will stored in new array(nas)...
})                      //this method does not modified the original existing array..
console.log(nas);

//***8 - reduce()
let a4 = num.reduce((a, b) => { //this method returns the single value, by performing the action given in the parameter,,(parameter may be a function)...
    return a + b;   //<- this will assume the a & b as a first & second elements of the array(num),,and do the addition and then the result value will be considered as 'a' and the next i.e., third value will be considered as 'b',,, and so on......
})
console.log(a4);
