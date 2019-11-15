# Javascript note

### Comments
var number = 5; // in-line comment

/* this is a
mutiline comment */

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
- \' single quote
- \" double qoute
- \\ backslash
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
>string are immutable, so individual character of string can't be changed
for the last character of the string:
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
Removing first element in an array with a **pop()**<br>
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
>variable outside function is Global scope
>when inside funcion defining variable with using **var** keyword become global 
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
> but when === not type conversion
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




