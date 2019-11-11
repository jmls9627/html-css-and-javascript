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
 
 //function showMsg(msg) {
 //console.log("show messesage: " + msg );
 //}
 
 function  showMsg(msg, more){
 if(more){
    console.log("show messesage: " + msg + more);
 } else{
    console.log("show messesage: " + msg);
   }
 }

 showMsg("some information");
 showMsg("some information", "and even more");

 var showit= function(msg){
     console.log(msg);
 }
 showit("some message");

 function showitthen(msg,callback){
     showit(msg);
     callback();
 }

 showitthen("showitthen called", function(){
     console.log("callback called");
 });
