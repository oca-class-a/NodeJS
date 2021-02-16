// excersise 1:
// ************************************
var a ;
// ************************************
let testContext = 15;
console.log(testContext);
// *************************************
var a,b,c;
// ************************************
var a ='1',b='2',c='3';
// *******************************
var success = true;
var x = false;
var x = new Boolean(false);
if (x) {
  // this code is executed
}
// *************************************
const r="aseel";
// ****************************************
var arr = new Array();
// console.log(arr) 
// ******************************************
var arr = new Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr) 
// ******************************************
var arr2 = new Array('a','b','c','d','e', 'f', 'j');
console.log(arr2)
// *******************************************
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  console.log(Object.keys(object1));
// *******************************************
const object1 = {
    a: 'coding',
    b: 44444,
    c: false
  };
  console.log(Object.keys(object1));
//   *****************************************************
const object2 = {
    a: 'somestring',
    b: 42,
    c: false,
    array: [1,2,3]
  };
  console.log((object2));
  // *******************************************
const object3 = {
    a: 'somestring',
    b: 42,
    c: false,
    array: [1,2,3],
    obj :{
        name:'aseel',
        job:"fullstack"
    }
  };
  console.log((object2));
//   *********************************************************
  const object3 = {
    a: 'somestring',
    b: 42,
    c: false,
    array: [1,2,3],
    obj :{
        name:'aseel',
        job:"fullstack"
    },
    object :{
        name:'aseel',
        job:"fullstack"
    }
  };
  console.log((object2));
//   ***************************************************
  let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
                 squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
               squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
              squirrel: true},
  ];
//   ***************************************************
let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
                 squirrel: false},
                 aseel= array(1,2,3)
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
               squirrel: false,
               aseel= array(1,2,3)
            },
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
              squirrel: true,
              aseel= array(1,2,3)
            },
  ];
var a=10,b=20;
function sum(a,b){
  return a+b;
}
console.log(sum(a,b));
// ******************************************
var a=10,b=20;
function multiply(a,b){
  return a*b;
}
console.log(multiply(a,b));
//********************************************
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
//add two numbers
const sums = num1 + num2;
// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
//**********************************************
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
//add two numbers
const sums = num1 * num2;
// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// ***********************************************************************
function returnvalue () {
    return "hamzeh"
}
console.log(returnvalue());
// ***************************************************
//Write a function to print a value
function printvalue() {
    console.log("ali")
}
printvalue();