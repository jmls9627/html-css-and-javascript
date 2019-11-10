/* 
index.js
*/

"use strict"; 

var msg= "hello javascript";
 alert(msg);
console.log(msg);

var resultsDiv= document.getElementById("results");
resultsDiv.innerHTML= "<p> this is from js</p>";

console.log("msg is " + typeof(msg));
console.log("resultDiv is" + typeof(resultsDiv));

var none;
console.log("none is " + typeof(none));

var aNumber= 10;
console.log("aNumber is " + typeof(aNumber));

var truefalse= true;
console.log("truefalse is " + typeof(truefalse));

/*msgs = "this shouldn't work";*/ 

if(none == undefined) {
console.log("none is undefined "); 
}

if(aNumber == 10) {
    console.log("10 is 10"); 
        }