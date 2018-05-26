//Boolean
var isDone = false;
//Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//String
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
var sentence1 = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
//Array
var list = [1, 2, 3];
var list1 = [1, 2, 3];
//Tuple
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
//x[6] = true; // Error, 'boolean' isn't 'string | number'
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var colorName = Color[2];
alert(colorName); // Displays 'Green' as its value is 2 above
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var notSure1 = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
var list2 = [1, true, "free"];
list2[1] = 100;
//Void
function warnUser() {
    alert("This is my warning message");
}
var unusable = undefined;
//Null and Undefined
// Not much else we can assign to these variables!
//let u: undefined = undefined;
//let n: null = null
////Never
//// Function returning never must have unreachable end point
//function error(message: string): never {
//    throw new Error(message);
//}
//// Inferred return type is never
//function fail() {
//    return error("Something failed");
//}
//// Function returning never must have unreachable end point
//function infiniteLoop(): never {
//    while (true) {
//    }
//} 
//# sourceMappingURL=basic.types.js.map