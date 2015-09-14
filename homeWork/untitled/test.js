/**
 * Created by avery on 9/14/15.
 */

//Add function

var a = prompt("Enter first value:");
a = Number(a);

while(a === ""){

    if(a === ""){
        a = prompt("Entry was blank, please enter a number:");
    }else if(String(e)){
        alert("Your frist value is: " + a)
    }
}

var b = prompt("Enter second value:");
b = Number(b);

while(a === ""){

    if(a === ""){
        a = prompt("Entry was blank, please enter a number:");
    }else if(String(e)){
        alert("Your first value is: " + b)
    }
}

var answer = add(a, b);

function add(a, b){
    var ab;
    ab = a + b;

    return ab;
}

alert("Numbers added to together equal:" + " " + answer);
//*************************************************************

//Multiply function


var answerM = multiply(a, b);

function multiply(a, b){
    var m;
    m = a * b;

    return m;
}


//*****************************************************************

Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

Array.identity = function (n){
    var i, mat = Array.matrix(n, n, 0);
    for(i = 0; i < n; i += 1){
        mat[i][i] = 1;
    }
    return mat;
};

myMatrix = Array.identity(4);

alert('Multi dimensional array: ' + myMatrix);
