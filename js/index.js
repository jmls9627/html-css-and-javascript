/* 
index.js
*/

$(document).ready(function(){
"use strict"; 

//console.log($("#resultList").text("jasdjasdaksxm"));
var rs=$('#resultList');
console.log(rs.text("dime que ya..."));
   

var toggleButton=$("#toggleButton");

toggleButton.on("click",function(){

    rs.toggle(500);
  
if(toggleButton.text()=="Hide") toggleButton.text("Show");
   else
    toggleButton.text("Hide");
   
 });

var listitems=$("header nav li");
listitems.css("font-weight","bold");
//listitems.css("font-size","18px");
listitems.filter(":first").css("font-size","35px");

//$("header nav li").text("testing jquery");
// $("header nav li").css("font-weight","bold");



/*
function Hide(){
    var rs=$('#resultList');
    var toggleButton=$("#toggleButton");
    rs.toggle(500);
    if(toggleButton.text()=="Hide") 
    toggleButton.text("Show");
   else
    toggleButton.text("Hide");
}*/
var resultList=$('#resultList');

function test0(){
    var resultList=$('#resultList');
     console.log(resultList.text("this is from jq test0"));
     
 }
 function test1(){
    var resultList=$('#resultList');
     console.log(resultList.text("this is from jq test1"));
     
 }
 function test2(){
    var resultList=$('#resultList');
     console.log(resultList.text("this is from jq test2"));
     
 }
 function test3(){
    var resultList=$('#resultList');
     console.log(resultList.text("this is from jq test3"));
     
 }

//var msg= "hello javascript";
//alert(msg);
//console.log(msg);

//var resultsDiv= document.getElementById("results");
//resultsDiv.innerHTML= "<p> this is from js</p>";
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

$("#githubsearchform").on("submit",function() {
    var searchPhrase=$("#searchPhrase").val();
    var useStars=$("#useStars").val();
    var langChoice=$("#langChoice").val();
    
    if(searchPhrase){

        resultList.text("performing prhase...");
       
        var githubsearch="http://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);

        if(langChoice != "All"){
            githubsearch += "+language:" + encodeURIComponent(langChoice);
      }
   
      if(useStars){
        githubsearch += "&sort=stars";
  } 

    $.get(githubsearch,function(r){
        //console.log(r.items.length)
    displayResults(r.items);
    });
     }
    return false;  
});

/*
$("#githubsearchform").on("submit",function() {
    var searchPhrase=$("#searchPhrase").val();
    var useStars=$("#useStars").val();
    var langChoice=$("#langChoice").val();

if(searchPhrase){

    resultList.text("performing prhase...")

    var githubsearch="http://api.github.com/search/repositories?q=" + searchPhrase;

    if(langChoice!="All"){
      githubsearch += "+language:" + langChoice;
}
    if(useStars){
      githubsearch += "&sort=stars" + langChoice;
} 

var githubsearch="http://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";

$.get(githubsearch,function(r){
    //console.log(r.items.length)
displayResults(r.items);
});
}
return false;

});
*/
/*
$.get(githubsearch)
.success(function(r){
    //console.log(r.items.length)
displayResults(r.items);
})
.fail(function(err){
    console.log("failed to query Github");
})
.done(function() {
    //
});
*/

/*
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
*/
function displayResults(results) {
    
resultList.empty();
$.each(results,function(i,item){

var newResult=$("<div class='result'>"+
"<div class='title'>"+ item.name + "</div>"+
"<div> Language: "+ item.language +"</div>"+
"<div> Owner: "+ item.owner.login +"</div>"+
"</div>");

newResult.hover(function () {
  //make it darker
$(this).css("background-color", "lightgray");
  }, function () {
      //reverse
$(this).css("background-color", "transparent");
 });
resultList.append(newResult);

});}




/*
for(var i=0; i<results.length ; i++){
var result=results[i];
if(result.score > 4)
continue
console.log(result.name);

}


//console.log(results.length);
//console.log(results[0].name);



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

});
  



/*Workit..
$("#githubsearchform").on("submit",function() {
   
    if(searchPhrase){

    var githubsearch="http://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";

    $.get(githubsearch,function(r){
        //console.log(r.items.length)
    displayResults(r.items);
    });
  
    return false;  
});*/