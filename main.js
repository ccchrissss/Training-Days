    // 7. Scope


// 1. Intro to Scope 

// Scope can essentially be boiled down to 'what is this variable referencing?'


// 2. Scope Exercise #1

var foo = function(y) {
    console.log(y + x);
};

var x = 2;

foo(4);

// Global Scope 
// LHS      RHS
// foo      function(y)
// x        2
// Scope of function(y)
// LHS      RHS
// y        4 <<y is implicit bc it's a parameter in function(y)
//          6 <<for the console.log which is not a LHS

// quick recap of the multiple ways to write a function
// function expression
var greet = function () {
    console.log('hello, world');
}

// function declaration
// function declarations are LHS lookups    
function greet () {
    console.log ('hello, world');
}

// named function expression
var hiThere = function greet  () {
    console.log ('hello, world');
}


// Scope Exercise #2

var y = 10;

var foo = function(x) {
    var y = 5;

    var bar = function() {
        console.log(y + x);
    };

    bar();
};

var baz = foo(y);

// Global Scope
// LHS      RHS
// y        10
// foo      function(x)
// baz      foo(y)
// Scope of function(x)
// LHS      RHS
// x        10 <<x is implicit bc it's a parameter in function(y)
// y        5
// bar      function()
// Scope of function()
// LHS      RHS
//          5 <<for the console.log which is not a LHS
//          10 <<for the console.log which is not a LHS


// Scope Exercise #3

// This is bad code but a good example for scopes
var myArray = [1, 2, 3, 4, 5];

var addTo = function (array) {
    for (let i = 0; i < 10; i++) {
        let x = 10;

        if (i + 10 > 15) {
            let y = 5;

            console.log (i + 5);
        }
    }
};

addTo (myArray);

// Global Scope
// LHS      RHS
// myArray  1, 2, 3, 4, 5
// addTo    function (array)
// Scope of function (array)
// LHS      RHS
// array    1, 2, 3, 4, 5 <<array is implicit because it's a parameter of function(array).
//                          The value(s) were passed when addTo was invoked at the bottom
// Scope of for (let i = 0; i < 10; i++)
// LHS      RHS
// i        0
// x        10
// Scope of if (i + 10 > 15)
// LHS      RHS
// y        5
//          i + 5 <<still a bit confused about this. is it a RHS of if ()? it's in the console.log inside if ()


// 5. Let and Const and Scope

// below works as expected
{ var me = 'Chris'; }

console.log (me); 

// below does not log to console bc let inside a 'block' creates scope
{ let me1 = 'Chris'; }

console.log (me1);

// below works as expected 
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// below does not log to console bc let inside a 'block' creates scope
for (let i = 0; i < 10; i++) {
}

console.log(i);

// the i leaks out because var does not create scope
for (var i = 0; i < 10; i++) {
}

console.log(i);


// 6. Project: Training Days

// This is the completed and working Training Days

// The scope of `random` is too loose 


const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
  
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // The scope of `days` is too tight 
  // below arrow function is equivalent to
  // const getTrainingDays = function (event) {} ...event is the parameter
  const getTrainingDays = event => {
      let days;
    if (event === 'Marathon') {
      // below originally 'let days = 50;' 
      // this creates new days variables within each of
      // these if/else...if statements. omitting the 
      // 'let' changes the og days variable
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
  };
  
  // The scope of `name` is too tight 
  const name = 'Nala';
  
  // below function - event is a parameter
  // below og 
  // const logEvent = event => {
  // below my idea
  // const logEvent = () => {
  // below following directions
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  // below function - days is a parameter
  // below og 
  // const logTime = days => {
  // below my idea
  // const logTime = () => {
  // below following directions
  const logTime = (days, name) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  // const event assigned the result of getRandEvent aka mar, tri, or pent
  const event = getRandEvent();
  // const days assigned the result of getTrainingDays aka 
  // amount of days to train: mar - 50, tri - 100, pent - 200
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  // below my idea
  // logEvent();
  // logTime();
  // below folling directions
  logEvent(name, event);
  logTime(days, name);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
   
  logEvent(name2, event2);
  logTime(days2, name2);

