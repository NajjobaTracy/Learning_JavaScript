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

//OBJECT LITERALS-these are basically key value pairs
const person={
  firstname: 'Tracy',
    lastname:   'Najjoba',
    age :     20,
    hobbies:['movies','basketball','eating','swimming','JavaScript'],
     //we can also put embedded objects
     address: { 
         street: '50 main st',
         city: 'Boston',
        state: 'MA'
     }
}
console.log(person) 
//to access a single element you add a dot to the variable
 console.log(person.firstname); 
 //you can also access different logs with commas 
 //for instance you want to access two objects under person
 console.log(person.firstname,person.lastname); 
// //Challenge -print out one item from the hobbies
 console.log(person.hobbies[2]) 


//we can also use destructuring
  const {firstname,lastname} = person;
  console.log(firstname) ;
 //if theres an embedded object 
 // const {firstname,lastname,address:{city}} = person;
  //console.log(city);

 //we can also add properties
person.email='tracynajjoba8@gmail.com';
console.log(person)//you will notice in the output that email has been added

//more of arrays and objects
//commas go right after each element and right after an object
const todos=[
     {
         id:1,
         text: 'Take out trash',
         isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with the boss',
        isCompleted: true
    },
     {
         id:3,
         text: 'Dentist appointment',
         isCompleted: false
    }
 ];
console.log(todos)
console.log(todos[1].text)

//JSON FORMAT-Is aformat you receive or send work to and from a server

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//FOR LOOPS-has three steps 
//1-assignment of the iterator
//2-the condition that needs to be met
//3-the increment
for(let i=0; i <=10 ;i++){
console.log(`for loop number:${i}`);
 }

//WHILE LOOP
let i =0;
 while(i<10){
    console.log(`while loop number:${i}`);
    i++;
 }


// HOW TO LOOP THROUGH ARRAYS

const todos1=[
         {
             id:1,
             text: 'Take out trash',
             isCompleted: true
         },
         {
             id:2,
             text: 'Meeting with the boss',
             isCompleted: true
         },
         {
             id:3,
           text: 'Dentist appointment',
            isCompleted: false
         }
    ];
    console.log(todos1)
    console.log(todos1[1].text)
    
for(let i=0; i < todos1.length;i++){
     console.log(todos1[i].text);
     }

// A FOR OF LOOP
for(let todo of todos1 ){
console.log(todo.id)
}

 // HIGH ORDER ARRAY METHODS 
 /*for each-loops through them
 map-allow us to create a new array from an array
 filter-make a new array based on a condition */
 todos1.forEach(function(todo) {
 console.log(todo.text);
 })

  const todoText=todos1.map(function(todo) {
     return todo.text;
     })
    console.log(todoText); 

    const todoCompleted=todos1.filter(function(todo) {
        return todo.isCompleted== true;
        }).map(function(todo){
            return todo.text;
        })
        console.log(todoCompleted);
        //you can also add other methods as above.

        const h =70;
        if(h==10){
            //double equal doesnot reference data type
            //triple sign ensures that there is matching of the datatype 
        console.log(h)    
        }else if (x>10){
            console.log('x is greater than the value')

        }else {
            console.log('h is  less the value')
        }
        // or is represented by || and, and represented by && 

        const e =80;
        const color= e>10? 'red': 'blue'
        //?-asks,:stands for else(illustration of iternary operators)
        console.log(color)


        //SWITCHES
        const T =80;
        const colour= T>10? 'red': 'blue'
        switch(colour){
            case'red'://set a case
            console.log('colour is red')
            break;
            case'blue':
            console.log('colour is blue')
            break;
            default:
                console.log('colour is not red or blue')
        }

        //FUNCTIONS
        //state your function then print out what it does
        function addnums(num1,num2){
            console.log(num1+num2)
        }
        addnums(5,4)//call the function
        //you an also assign values to the parameters
        function addition(numb1=4,numb2=6){
            console.log(numb1+numb2)//also return numb1+numb2 works then add the console log as you call the function
        }
        addition();//however if you pass values as you call the function they will override the set parameters

// ARROW FUNCTIONS
const add =(a=4,b=3)=>  a+b
console.log(add());

//OOP
//USING A CONSTRUCTOR FUNCTION
function Person(firstN,surname,dob){
this.firstN=firstN;
this.surname=surname;
this.dob= new Date (dob);
this.getBirthYear=function(){
    return this.dob.getFullYear();
}
this.getFullName=function(){
    return  `${this.firstN} ${this.surname}`;
}
} 
//INSTANTIATE OBJECT-uSING THE CONSTRUCTOR FUNCTION
const person1=new Person('Arnold','Ssejjoba','3-17-2003');//date in the order of mdy
console.log(person1);//diffrence between this and the object literal is this is prefixed by the actual name of the object
const person2=new Person('Allan ','Mugumbya','28-8-1995');
console.log(person2.firstN)
// introduce new Date to dob to get an actual date
console.log(person1.dob)//you can format the date with a dot
// you can add methods
console.log(person1.getBirthYear())
console.log(person1.getFullName());






      