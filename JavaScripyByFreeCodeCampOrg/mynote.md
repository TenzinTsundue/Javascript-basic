# Javascript note

### Comments

var number = 5; // in-line comment

/_ this is a
mutiline comment _/

### Data types and variable

**Datatype**

- undefined
- null
- boolean
- string
- symbol
- number
- object

**Variable**

```
var myName = "apple";    // useable throughout the pragram

myName = 8;

let ourName = "freeCodeCamp" ; // useable only in the scope where you declear let

const pi = 3.14; // Can't be chage like var
```

```
var a; // declear
var b = 2; // declear and assign
conlose.log(a) //show in console
```

> javascript is case sensitive
> use of camelcase is a good practice eg: thisIsACamalCase

```
var sum = 10 + 10;
console.log(sum); //difference (-), multiplication (*), division (/), remainder (%) works the same
```

```
var myVar = 87;
myVar = myVar + 1
or
myVar++; // Increment and -- for Decrement
```

```
a = a + 12 // same to a += 12;  //work same with -*/
```

```
var myStr = " I am a \" double quoted\" string insdie" // (\) is a escape character
var myStr = `' I am a \" double quoted\" string insdie'`   // (') and then (`)
```

Code output

- \\' single quote
- \\" double qoute
- \\\ backslash
- \n newline
- \r carriage return
- \t tab
- \b backspace
- \f form feed

**Concatenate (+)**

```
var ourStr = "I come first " + "I come second." ;
or
var ourStr = "I come first. ";
ourStr += "I come second.";

console.log(ourStr);
```

Length of the string: <br>

```
var name = "Tenzin";
nameLength = name.length;

console.log(name);
```

Bracket notation to find specific character in the string: <br>
javascript is a 0 base indexing

```
var name = "Tenzin";
firstLetter = name[0];

console.log(firstLetter);
```

> string are immutable, so individual character of string can't be changed
> for the last character of the string:

```
var name = "Tenzin";
lastLetter = name[-1];   // can find 2nd or 3rd.. last letter by -2, -3 ...

console.log(lastLetter);
```

Word Blanks (mad libs game)<br>

```
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "quickly"));
```

**Array []**<br>

```
var ourArray = ["John", 23]; // eg of array
var ourArray = [["Bulls], 23],["White"]]; //eg of nested array
```

Access arry data with indexes <br>

```
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // equals 50

console.log(ourData);
```

modify Array Data with Indexes

```
var ourArray = [50, 60, 70];
ourArray[1] = 45; // ourArray now equals [50, 45, 70]

console.log(ourArray);
```

For multidimensional array: double bracket notation<br>

```
var ourArray = [[50, 60, 70],[51, 61, 71],[52, 62, 72]];
var myData = ourArray[1][0];

console.log(mData);
```

Adding element in end of array with a **push()**<br>

```
var ourArray = [50, 60, 70];
ourArray.push(40); //we can even push (["happy", "joy"])

console.log(ourArray);
```

Removing last element in an array with a **pop()**<br>

```
var ourArray = [50, 60, 70];
ourArray.pop(); // removing last element

console.log(ourArray);
```

Removing first element in an array with a **shift()**<br>

```
var ourArray = [50, 60, 70];
ourArray.shift(); // removing first element

console.log(ourArray);
```

Adding element in fist of array with a **unshift()**<br>

```
var ourArray = [50, 60, 70];
ourArray.unshift(40); //we can even unshift (["happy", "joy"])

console.log(ourArray);
```

### Functions

```
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();
```

passing value to function with arguments<br>

```
function ourFuncitonWithArgs(a, b) {
  console.log(a - b);
}

ourFuncitonWithArgs(4, 2);
```

Global scope and Functions<br>

> variable outside function is Global scope
> when inside funcion defining variable without using **var** keyword become global

```
var myGlobal = 10;  // Global variable

function fun1() {
  var oopsGlobal = 5; //local scope with fun1()
  /*
  if the is no var then it become global
  oopsGlobal = 5; // Its a global variable now
  */
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
    console.log(output);
  } else {
    console.log("undefine");
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobale: " + oopsGlobal;
    console.log(output);
  } else {
    console.log("undefine");
  }
}

fun1();
fun2();
```

Local scope and Funciton<br>

```
function myLocalScope() {
  var myVar = 20;
  console.log(myVar);
}

myLocalScope();
```

> Local varible take precedence over Global variabel with a same name

```
var simple = 10;
function fun1() {
  var simple = 20;
  return simple;
}

console.log(fun1());  // output will be 20
console.log(simple);  // output will be 10
```

Return a value in Function <br>

```
function addFive(num) {
  return num + 5;
}

console.log(addFive(10));   // Return 15
```

Assignment with a return values<br>

```
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(4);

console.log(changed);
```

Stand in line <br>

```
function nextLine(arr, num) {
  arr.push(num);
  return arr.shift();
}
var arr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(arr));
console.log("Shift element: " + nextLine(arr, 6));
console.log("After: " + JSON.stringify(arr));
```

Boolean Values <br>

```
function welcomeToBooleans() {
  return true;
}
if (true) {
  console.log("Its True");
}
```

If statements<br>

```
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it is!";
  }
  return "No, is not!";
}

console.log(ourTrueOrFalse(true));
```

Comparasion with the Equality Operator <br>

```
function testEqual12(val) {
  if (val == 12) {
    return "is 12";
  }
  return "not 12";
}

console.log(testEqual12(12));
```

Comparision wiht the **strict equality operator (===)**

> when == there is type conversion
> but when === no type conversion

```
3 === 3 //true
3 == 3  //true
3 === '3'   //false
3 == '3'    //true due to type conversion
```

```
//code
function testString(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testString("7"));  //Result Not Equal
```

Comparision wiht the **Inequality (!=) and strick inequility (!==)**<br>

```
function testString(a, b) {
  if (a !== b) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testString(7, "7")); //Result Not Equal
```

Comparasions with the logical and operator<br>

```
function testGreaterThan(val) {
  if (val > 100) {  //equally work with less then <
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}

console.log(testGreaterThan(76));
```

```
function testGreaterOrEqual(val) {
  if (val >= 100) { //equally work wiht less then equal to <=
    return "100 or Over";
  }
  return "Less then 100";
}

console.log(testGreaterThan(76));
```

nested if **(AND = && Or = ||)**<br>

```
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {  //&& And
        return "Yes";
    }
}

console.log(testLogicalAnd(43));
```

```
unction testLogicalAnd(val) {
  if (val < 10 || val > 20) {
    //&& And
    return "outside";
  }
  return "inside";
}

console.log(testLogicalAnd(15));
```

Else statement <br>

```
function testElse(val) {
  var result = "";

  if (val > 5) {
    return "Bigger then 5";
  } else {
    return "Less then or equal to 5";
  }
  return result;
}

console.log(testElse(3));
```

Else If statements<br>

```
function testElseIf(val) {
  if (val > 10) {
    return "Greater then 10";
  } else if (val < 5) {
    return "Less then 5";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(6));
```

Logical order in If Else statements <br>

> order is important in if else stamenets cus once the first condition is met, it will not check the rest of the condition.

Golf code <br>

```
var names = [
  "Hole-in-one",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home"
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(5, 4));
```

Switch statement <br>

```
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "Alpha";
      break;
    case 2:
      answer = "Beta";
      break;
    case 3:
      answer = "Gamma";
      break;
    case 4:
      answer = "Delta";
      break;
    default:    // Default option for other cases
      answer = "other";
      break;
  }
  return answer;
}

console.log(caseInSwitch(3));
```

Multiple Identical Options in Switch Statements <br>

```
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Med";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(1));
```

Replacing if else chains with switch <br>

Returning Boolean Values from Functions<br>

```
function isLess(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
console.log(isLess(10, 15));

OR

function isLess(a, b) {
  return a < b;
}
console.log(isLess(10, 15));
```

Returning Early Pattern from Functions <br>

```
function abTest(a, b) {

  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(4, 4));
```

Counting Cards <br>

```
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}

cc(2);
cc(4);
cc(1);
cc("K");
cc("A");
console.log(cc(2));
```

Build JavaScript Objects <br>

```
var ourDog = {
  // object define by curly braces
  name: "Camper", //name, legs, tails and friends are property, Camper is value
  legs: 4,  //can be any datatype
  tails: 1,
  friends: ["everything!"]
};
// Creating own objects
var outDog = {
    "name" : "Quency",
    "legs" : 3,
    "tails" : 2,
    "friends" : []
};
```

Accessing Object properties with dot notation <br>

```
var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log("hat value : " + hatValue + "\nshirt Value: " + shirtValue);
```

Accessing Object properties wiht Bracket Notation <br>

> bracket notation use when object properties has spacein it eg: "the drink" : "wine"

```
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

console.log(entreeValue + " and " + drinkValue);
```

Accessing Object Properties with Variables<br>

```
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var PlayerNumber = 16;
var player = testObj[PlayerNumber];

console.log(player);
```

Updating Object properties<br>

```
var ourDog = {
  name: "Norbu",
  age: 7
};

ourDog.name = "Happy Norbu";  //update name
console.log(ourDog.name);
```

Add New Properties to an Object<br>

```
var ourDog = {
  name: "Norbu",
  age: 7
};

ourDog.bark = "bow-wow"; //add bark property
ourDog['bark2'] = "woof!"; // adding property with bracket notation
console.log(ourDog.bark);
```

Delete property from an Object <br>

```
var ourDog = {
  name: "Norbu",
  age: 7,
  bark: "woof!"
};

delete ourDog.age; //delete propety age
console.log(ourDog);
```

Using Objects for lookups<br>

```
switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "beta":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
    }

INSTEAD

function phoneticLookup(val) {
  var result = "";

  var lookUp = {
    alpha: "Adams",
    beta: "Boston",
    charlie: "Chicago"
  };
  result = lookUp[val];
  return result;
}

console.log(phoneticLookup("alpha"));
```

Testing Objects for Properties<br>

```
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj("apple"));
```

Manipulating Complex Objects<br>

```
var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    formats: ["CD", "8T", "LP"],
    gold: true
  },
  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    formats: ["YouTube video"]
  }
];
```

Accessing Nested Objects <br>

```
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    outside: {
      truck: "jack"
    }
  }
};

var gloceBoxContents = myStorage.car.inside["glove box"];

console.log(gloceBoxContents);
```

Accessing Nested Arrays <br>

```
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];

var secondTree = myPlants[1].list[1];

console.log(secondTree);
```

Record collection <br>

```
var collection = {
  "2548": {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  "2468": {
    album: "1998",
    artist: "Prince",
    track: ["1999", "Little Red Corvette"]
  },
  "5439": {
    album: "ABBA Gold"
  }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "track") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}
updateRecords(2468, "track", "test");
updateRecords(2468, "testProp", "test");
console.log(updateRecords(5439, "artist", "ABBA"));
```

Iterate with **while** loop <br>

```
var myArry = [];

var i = 0;
while (i < 5) {
  myArry.push(i);
  i++;
}

console.log(myArry);
```

Iterate with **for** loop <br>

```
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

console.log(ourArray);
```

Iterate odd number with a for loop <br>

```
var ourArray = [];

for (var i = 1; i < 10; i += 2) { //can do increment of 2 or any number
  ourArray.push(i);
}

console.log(ourArray);
```

Count backward with the for loop <br>

```
var myArray = [];

for (i = 10; i > 0; i--) {
  myArray.push(i);
}

console.log(myArray);
```

Iterating Through an Array with a For loop<br>

```
var myArray = [1, 2, 3, 4, 5];
var ourTotal = 0;

for (var i = 0; i < myArray.length; i++) {
  ourTotal = ourTotal + myArray[i];
}

console.log(ourTotal);
```

Nesting For loop<br>

```
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

var product = multiplyAll([
  [2, 2],
  [3, 3]
]);

console.log(product);
```

Iterate with Do... While loops

```
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(i, myArray);
```

Profile lookup<br>

```
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "08198345",
    likes: ["pizza", "coding", "brownie"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "45798479",
    likes: ["momo", "bread", "chicken"]
  },
  {
    firstName: "Kristina",
    lastName: "Larry",
    number: "495938798",
    likes: ["pizza", "bear"]
  }
];

function lookupProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i] == name) {
      return contacts[i][prop] || "No such property";
      //console.log(contacts[i]);
    }
  }
  return "No such contact";
}

var data = lookupProfile("Akira", "number");

console.log(data);
```

Generate Random Fractions <br>

```
function randomFunction() {
  return Math.random();
}

console.log(randomFunction());
```

Generating Random Whole Numbers <br>

```
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

console.log(randomNumberBetween0and19);
```

Generating Random Whole Numver within a Range <br>

```
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin) + ourMin);
}

console.log(ourRandomRange(5, 20));
```

Use the **parseInt** Function <br>
it takes string and return an interger

```
function converToInteger(str) {
  return parseInt(str);
}

console.log(converToInteger("56"));
```

Use the **parseInt** Function with a Radix <br>

```
function converToInteger(str) {
  return parseInt(str, 2);  // is a base 2, so computer know its a binary number
}

console.log(converToInteger("10011"));
```

Use the Conditional (Ternary) Operator<br>
replace if else statement with ternary <br>

> condition ? statement-if-true : statement-if-false;

```
function isGreaterThen(a, b) {
  return a > b ? "a is Greater" : "a is not greater";
}

console.log(isGreaterThen(14, 12));
```

```
function checkEqual(a, b) {
  return a === b;
}

console.log(checkEqual(12, 12));
```

Using Multiple Conditional (Ternary) Operators<br>

```
function checkSign(num) {
  return num > 0 ? "Positibe" : num < 0 ? "Negative" : "Zero";
}

console.log(checkSign(-23));
```

## ES6

Difference between the var and let Keywords<br>

> let can't have duplication

```
// This code will show error due to catName duplication
let catName = "Quincy";
var quote;

let catName = "Beau";

console.log(catName);
```

Compare Scope od the var and let Keywords<br>

```
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();
```

Declare a Read-Only Variable with the const Keyword<br>

> const have all the feature of let and also its a read only

```
function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool !";  // Uppercase for const

  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}
printManyTimes("FreeCodeCamp");
```

Mutate an Array Declared with const<br>

```
const S = [5, 6, 7];

function editInPlace() {
  "use strict";
  //s = [2, 5, 7]  is not allowed

  S[0] = 2;
  S[1] = 5;
  S[2] = 7;
}
console.log(S);
```

Prevent Object Mutaion <br>
object.freeze

```
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {    //ex for exception
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
//TypeError: Cannot assign to read only property 'PI' of object
```

Use Arrow Functions to write Concise **Anonymous Functions**<br>

```
const magic = () => new Data();
// Same to
const magic = function() {
  return new Data();
}
```

Write Arrow Functions with Parameters<br>

```
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([2, 3], [4, 5, 6]));
// Same to
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([2, 3], [4, 5, 6]));
```

Write Higher Order Arrow Functions<br>
map, filter, reduce

```
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = arr => {
  const squaredIntegers = arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(x => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```

Write Higher Order Arrow Functions<br>
default parameter

```
const increment = (function() {
  return function increment(number, value = 1) {
    //if value is not passed then value will set automatically to one
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5));
```

Use the **Rest Operator(...)** with Function Parameters<br>

```
const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4));
```

Use the **Spread Operator(...)** to Evaluate attays in-place<br>
spread and array into its insividual parts

```
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
  arr2 = arr1;
  arr1[0] = "potato";
})();
console.log(arr2);
// Output [ 'potato', 'FEB', 'MAR', 'APR', 'MAY' ] cud arr2 canges with arr1

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
  arr2 = [...arr1];
  arr1[0] = "potato";
})();
console.log(arr2);
// Output [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ] cud arr2 is spread(equal to the content) of arr1, not equal
```

Use _Destructuring Assignment_ to assign variable from objects

```
var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x; // x = 3.6
var y = voxel.y;
var z = voxel.z;
//OR
//assigning object into the variable
const {x:a, y:b, z:c} = voxel;
```

```
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const { tomorrow: tempOfTomorow } = avgTemperatures;

  return tempOfTomorow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));
```

Destructuring Assignment with Nested Objects<br>

```
const LOCAL_FORCAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const {
    tomorrow: { max: maxOfTomorrow }
  } = forecast;

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORCAST));
```

Use Destructuring Assignment to Assign Variabales from Arrays

```
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);
//Output: 1 2 4

let a = 8,
  b = 6;
(() => {
  "use strict";
  [a, b] = [b, a];
})();
console.log(a);
console.log(b);
/* Output: 6
8*/
```

Use Destructuring Assignment with the Rest Operator <br>

```
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
/* Output:
[ 3, 4, 5,  6, 7, 8, 9, 10]
[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
 */
```

Use Destructuring Assignment to pass an object as a Function's Parameters <br>

```
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));
/* Output:
{
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
}
28.015
*/
```

Create String using **Template Literals(`!)**<br>

```
const person = {
  name: "Zosiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

Write Concise Object Literal Declarations Using Simple Fields <br>

```
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};
//OR
const createPerson = (name, age, gender) => ({ name, age, gender });
//when key and value are same

console.log(createPerson("Zodiac Hasbro", 56, "male"));
```

Write Concise Declerative Functions <br>

```
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);
```

Use class Syntax to Define a Constructor Function <br>

```
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet);
```

```
function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);
```

Using **getters** and **seters** to Control Access to an Object <br>

```
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuther) {
    this._author = updatedAuther;
  }
}
```

```
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);
```

Understand the Differences Between import and require <br>

```
//string_function.js

export const capitalizeString = str => str, toUpperCase();

//index.js

import { capitalizeString } from "./string_function"
const cap = capitalizeString("Hello!");

console.log(cap);
```

Use export to Reuse a Code Block <br>

```
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalixeString };

export const foo = "bar";
export const bar = "foo";  // then we can import them into other file
```

Use \* to Import Everythind from a File <br>

```
import * as capitalizeStrings from "./capitalizeStrings";
```

Create an Export Fallback with export default <br>

```
export default function subtract(x, y) {
  return x - y;
}
```

Import a Default Export

```
import subtract from "math_functions";

subtract(7,4);
```
