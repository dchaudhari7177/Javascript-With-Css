
Strings
let s1="dipak";
console.log(s1.length);
console.log(s1[0]);
console.log(s1[1]);
console.log(s1[2]);
console.log(s1[3]);
console.log(s1[4]);

// template literals
let boy1 = 'dipak'
let boy2 = 'om'

let sentence = `${boy1} is a Best friend of ${boy2}`;
console.log(sentence);

// Escape Sequence characters
let fruit= "Bana\"na";
console.log(fruit);

// String methods
let s = "dipakchaudhari";
console.log(s.length);  //<=Property

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.slice(2,5));
console.log(s.slice(5));
console.log(s.replace("dipak", 'tejaswini'));

let s2 = "dipakchaudhari";
console.log(s2.trim());

let s3="omhumbad";
console.log(s.concat(" is a best friend of" + s3))
