//variables

var name;
var address;
var phone;
var checkingBal;
var otherBal;


//TODO Bank loan information: Name, address, phone

//TODO begin validations, castings......

//account holders name and validation for empty problem
name = prompt("Please enter your full name:");
if(name > "")
{alert("Name:" + " " + name)
}else{name = prompt("Entry was left blank, please enter your full name:")}

//console logging name
console.log("Name:" + " " + name);



//account holders address
address = prompt("enter your complete address:");

if(address > "")
{alert("Address:" + " " + address)
}else{address = prompt("Entry was left blank, please enter your full address:")}

//console logging name
console.log("Address:" + " " + address);


//contact phone number
phone = prompt("Enter contact number:");

if(phone > "")
{alert("Phone:" + " " + phone)
}else{phone = prompt("Entry was left blank, please enter your contact number:")}

//console logging name
console.log("Phone:" + " " + phone);



//Checking balance
checkingBal = prompt("Enter your checking account balance");

if(checkingBal > "")
{alert("Checking balance:" + " " + "$" + checkingBal)
}else{checkingBal = prompt("Entry was left blank, please enter your checking balance:")}

//console logging name
console.log("Checking balance:" + " " + "$" + checkingBal);
Number(checkingBal);


//Other investments balance total
otherBal = prompt("Enter your any other investments holdings total liquid balance");

if(otherBal > "")
{alert("Liquid cash assets total:" + " " + "$" + otherBal)
}else{otherBal = prompt("Entry was left blank, please enter liquid assets cash total:")}

//console logging other investments total
console.log("Liquid assets cash total:" + " " + "$" + otherBal);
Number(otherBal);


//array for info
var info;
info = [name, address, phone, checkingBal, otherBal,];

//Displaying information:
alert("Name:" + " " + info[0] + "\n" +
"Address:" + " " + info[1] + "\n" +
"Phone:" + " " + info[2] + "\n" +
"Checking balance:" + " " + "$" + info[3] + "\n" +
"Other balances total:" + " " + "$" +  info[4]);

//Displaying information via console log
console.log("Name:" + " " + info[0] + "\n" +
"Address:" + " " + info[1] + "\n" +
"Phone:" + " " + info[2] + "\n" +
"Checking balance:" + " " + info[3] + "\n" +
"Other balances total:" + " " + info[4]);