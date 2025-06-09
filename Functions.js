// How many ways a function can be defined

// 1. Function Declaration 
function add(a,b){
    return a+b;
}

// 2. Function Expression 
const subtract=function(a,b){
    return a-b;
}
const multiply=(a,b) => a*b;

// 3. Arrow Functions
const divide=(a,b)=> a*b;

// Function Constructor
const power=new Function('a','b','return Math.pow(a,b)');
