//LEARNING JAVASCCRIPT

console.log('hello world')
console.error('This is an error')
 // var-globally scoped  ,let-you can reassign values  ,const-cant be changed  -always use const unless youre going to reassign the values
 

//string,numbers,boolean,null,undefined,symbol. 
 const name ='John';
 const Age =38;
 const iscool = true;
 const x = null;
 const y = undefined;
const rating = 4.5;
let z; //undefined

console.log(typeof iscool);// returns data type
console.log ('hello world')


const Name = 'Tracy'
const age = 20;

//CONCATENATION
console.log('My name is '+Name+' and I am '+ age)
//template strings-use the back quotes-no plus sign -use the syntax,${variable name}
console.log(`My name is ${Name} and i am ${age}`);
// we can also assign the above as a variable 
const hello =`My name is ${Name} and i am ${age}`;
console.log(hello);


//STRINGS AND THEIR METHODS 
const s ='hello world';
console.log(s.length);//returns the length if that string
//note a property doesnt have parenthis'but a method does
console.log(s.toUpperCase());// method to upper case
// a method is a function associated to an object!
console.log(s.toLowerCase());// method to lower case 
console.log(s.substring(0,5));//returns string astarting from index 0 to index 4
console.log(s.substring(0,5).toUpperCase());//you can add other methods to other methods
console.log(s.split(''));// separator method to split by letter into array with 11 values

const b ='technology,computers,IT,code';//if you want to create an array the separator to use would be to use a comma as separated in origin
console.log(b.split(', '));//thus the array
console.log(b);

//SINGLE LINE COMMENTS
/*MULTI
LINE COMMENTS*/

//ARRAYS!!!- Tthese are variables that hold multiple values
 //1-using an array constructor
const numbers = new Array(1,2,3,4,5); //if you see the keyword 'new' you know its a constructor 
console.log(numbers);

const fruits= ['apples','pears','oranges'];// you can have multiple data types
console.log(fruits);
console.log(fruits[1]);//returns fruit at that index
fruits[3] ='mangoes';//to add value at specific index
//however not advised since you may not necessarily know the array size
console.log(fruits);
//const for arrays enables one to add features and also use methods however you can reassign the array !!
fruits.push('grapes')// method adds to the end of array
console.log(fruits);
fruits.unshift('berries');//method adds element to the beginning of array
console.log(fruits);
fruits.pop();// removes last element in array
console.log(fruits);
console.log(Array.isArray(fruits));// to check if something is an array
console.log(fruits.indexOf('apples'))//index of a certain value 
