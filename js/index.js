/* 
index.js
*/

"use strict"; 

var msg= "hello javascript";
// alert(msg);
console.log(msg);

var resultsDiv= document.getElementById("results");
resultsDiv.innerHTML= "<p> this is from js</p>";
 /*
var result ={
name:"Jquery",
language:"javaScript",
score: 4.5,
showLog:function(){

},
owner:{
    login:"shawn Wlildermuth",
    id:123456,
  }
};

result.phoneNumber= "123-456-7890";
console.log(result.phoneNumber);
console.log(result.name);
*/


//
var results=[{
    name:"Jquery",
    language:"javaScript",
    score: 4.5,
    showLog:function(){
    
    },
    owner:{
        login:"shawn Wlildermuth",
        id:123456
      }
    }, {
        name:"JQuery UI",
        language:"javaScript",
        score:3.9 ,
        showLog:function(){
        
        },
        owner:{
            login:"shawnWlildermuth",
            id:123456
          }
        }];

console.log(results.length);
console.log(results[0].name);



/*
results.push(result);
results.push({name:"dummy proyect"});
*/



/*
console.log("msg is " + typeof(msg));
console.log("resultDiv is" + typeof(resultsDiv));

var none;
console.log("noe is " + typeof(none));

var aNumber= 10;
console.log("aNumber is " + typeof(aNumber));

var truefalse= true;
console.log("truefalse is " + typeof(truefalse));

msgs = "this shouldn't work"; 

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


 var inglobal=true;
 
 function testme(){
     console.log("testme(): " + inglobal);

     var somemsg = "Some Message";
     console.log("testMe(): " + somemsg);

     showitthen("With closure", function(){
         showit("testme with cosure(): " + somemsg);
     })


 }
        
// console.log("global: " + somemsg); 

 testme(); */