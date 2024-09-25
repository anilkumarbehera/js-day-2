// fname = "krishna";
// var fname; // Hoisting
// document.write(fname);

// var fname; // Declaration
// fname = "krishna"; // Assignment
// document.write(fname);

// Use of strict mode

// "use strict"
// fname = "krishna"; // Throw the exception
// document.write(fname); 

// Functions
1. // General functions
// printName() // we can call the function here due to hoisting
// function printName(){
//     var fname = "krishna 123";
//     document.write(fname);
// }
// printName()

2. // parameterized function
// Examples
// i. // printName("Anil");
 
// printName("Anil kumar")
// function printName(fName, lName){
    
//     document.writeln(fName);
//     document.writeln(lName);
// }

// ii. // function add(a,b,c){
//     document.writeln(a+b+c)
// }
// add(1,2)  // Ans: NAN(Not a Number)

// iii. // function add(a,b,c=0){
//     document.writeln(a+b+c)
// }
// add(1,2)  // Ans: 3

// iv. // function add(a,b,c=0){
//     document.writeln(a+b+c)
// }
// add(1,2,2)  // Ans: 5

// v. 
// printName(lName = "Kumar", fName = "Anil");
// function printName(fName, lName){
//     document.writeln(fName);
//     document.writeln(lName);
// }
// default param
function printData(name, a=""){
    document.writeln(name)
}
printData("kumkum");
printData("lili");