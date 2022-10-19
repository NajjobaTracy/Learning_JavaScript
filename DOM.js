//DOCUMENT OBJECT MODEL
// Its like a tree structure of yoyr whole document

//selecting elements from the DOM 

//1-the window object is the parent object of the browser
// console.log(window);
// window.alert(1)
// since window is the very top level we dont include it 


//single element-use selctor that gets single elements
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));


//Multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));// here you cant use array methods

const items = document.querySelectorAll('.item')
items.forEach((item) => console.log('item'))


//MANIPULATING THINGS IN THE DOM
const ul = document.querySelector('.items');
//ul.remove();
 ul.firstElementChild.textContent = 'Hello'; 
 ul.children[1].innerText='Tracy';
 ul.lastElementChild.innerHTML='<h1>Hello</>';


//  const btn = document.querySelector('.btn');
// //  btn.style.background='green';

//  //EVENTS
//  //const btn = document.querySelector('.btn');
//  btn.addEventListener('click',(e)=>{  //e stands for event
//     e.preventDefault();
//     // console.log('click');
//     console.log(e.target.classname);
//  });
const btn = document.querySelector('.btn');
btn.addEventListener('click',(e)=>{ 
e.preventDefault();
document.querySelector('#my-form')
.style.background='#ccc';
document.querySelector('body').classList.add('bg-dark');
document.querySelector('.items').lastElementChild.innerHTML ='<h1>Hello</h1>';
});


//FORM SCRIPT
const myForm =document.querySelector('#my-form');
const nameInput =document.querySelector('#name');
const emailInput =document.querySelector('#email');
const msg =document.querySelector('#.msg');
const userList =document.querySelector('#users');


myForm.addEventListener('submit',onSubmit);
function onSubmut(e){
    e.preventDefault();

    if(nameInput.value==='' || emailInput.value ===''){
        alert('Please enter full name');
    }

   
}


 