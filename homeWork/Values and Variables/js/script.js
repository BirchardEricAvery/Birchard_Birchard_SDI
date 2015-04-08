/*
Name:       Eric Avery Birchard
Course:     SDI
Date:       1, April 2015
Instructor: Dan Williams

 */

//numbers, strings, boolean--skipped, too basic
//declare before defining


var yearBorn = 1969;        //var string, declaring variables
var age;                    //age variable declared
var eAveryBirchard = true;  //boolean making eAveryBirchard true
var info = ["Avery", "was", "born", yearBorn]; //making array
info[4] = "end array";
age = 46                    //defining age

//or var yearBorn = 46

alert("testing alert for yearBorn\n" + " " + yearBorn + " " + age);

console.log("yearBorn variable \n" + " " + yearBorn + " " + age); //log yearBorn variable
console.log("eAveryBirchard value is \n" + " " + eAveryBirchard); //log eAveryBirchard value
console.log(info); //displaying array


//array access notation

console.log("Array access notation in position 3" + " " + info[3]);
console.log(info[4]);
/*
//Two-Dimensional array

var personnel = new Array();

personnel[0] = new Array();
personnel[0][0] = "Name0";
personnel[0][1] = "Age0";
personnel[0][2] = "Address0";

personnel[1] = new Array();
personnel[1][0] = "Name1";
personnel[1][1] = "Age1";
personnel[1][2] = "Address1";

personnel[2] = new Array();
personnel[2][0] = "Name2";
personnel[2][1] = "Age2";
personnel[2][2] = "Address2";

console.log("Name : " + personnel[0][0] + personnel[1][0] + personnel[2][0] + "\r");
console.log("Age : " + personnel[0][1] + personnel[1][1] + personnel[2][1] + "\r");
console.log("Address : " + personnel[0][2] + personnel[1][2] + personnel[2][2] + "\r");
*/