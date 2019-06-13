function unhide(clickedbutton, elementClass,){
    var color = document.body.style.backgroundColor ="white";
    var checkstatus = document.getElementById(elementClass);
    var instructions = document.getElementById("instructions");
    if(checkstatus){
        if(checkstatus.className == "hide"){
            checkstatus.className = "show";
            clickedbutton.className = "hide";
            instructions.className = "hide";
        }
        else {
            checkstatus.className = "hide";
            clickedbutton.className = "unhide";
        }
    }
}


function tiesheetinformation(){
   var tiehide = document.getElementById("tieinformation");
   if(tiehide.className == "hide"){
       tiehide.className = "show";
   }
   else{
       tiehide.className = "hide";
   }
}

var arrayscore =[];
var arraypoint = 0;
var arrayscore1 =[];
var arraypoint1 = 0;
var winner = document.getElementById("winner");

var arrayscore2 =[];
var arraypoint2 = 0;
var arrayscore3 = [];
var arraypoint3 = 0;

var question1 = document.getElementById("type1");
var question2 = document.getElementById("type2");
var question3 = document.getElementById("type3");
var question4 = document.getElementById("type4");
var question5 = document.getElementById("type5");

var question6 = document.getElementById("type6");
var question7 = document.getElementById("type7");
var question8 = document.getElementById("type8");
var question9 = document.getElementById("type9");
var question10 = document.getElementById("type10");

var question11 = document.getElementById("type11");
var question12 = document.getElementById("type12");
var question13 = document.getElementById("type13");
var question14 = document.getElementById("type14");

var question15 = document.getElementById("type15");
var question16 = document.getElementById("type16");
var question17 = document.getElementById("type17");
var question18 = document.getElementById("type18");

function nextuser(){
    alert("You have finished your questions. Now it is time for the second person to answer the questions.")
}

function checkforblank(){
    if(document.getElementById("type1").value == ""){
        return true;
    }
    if(document.getElementById("type2").value == ""){
        return true;
    }
    if(document.getElementById("type3").value == ""){
        return true;
    }
    if(document.getElementById("type4").value == ""){
        return true;
    }
    if(document.getElementById("type5").value == ""){
        return true;
    }
return false
}

function checkforblank1(){
    if(document.getElementById("type6").value == ""){
        return true;
    }
    if(document.getElementById("type7").value == ""){
        return true;
    }
    if(document.getElementById("type8").value == ""){
        return true;
    }
    if(document.getElementById("type9").value == ""){
        return true;
    }
    if(document.getElementById("type10").value == ""){
        return true;
    }
return false
}

function checkforblank2(){
    if(document.getElementById("type11").value == ""){
        return true;
    }
    if(document.getElementById("type12").value == ""){
        return true;
    }
    if(document.getElementById("type13").value == ""){
        return true;
    }
    if(document.getElementById("type14").value == ""){
        return true;
    }
return false
}

function checkforblank3(){
    if(document.getElementById("type15").value == ""){
        return true;
    }
    if(document.getElementById("type16").value == ""){
        return true;
    }
    if(document.getElementById("type17").value == ""){
        return true;
    }
    if(document.getElementById("type18").value == ""){
        return true;
    }
return false
}


function AreControlsEmpty(){
    if(checkforblank() == true){
        alert("You need to fill out all of the information!")
    }
    else{
        unhide(this, 'main');
        unhide(this, 'main1');
        nextuser();
    }
}
function AreControlsEmpty1(){
    if(checkforblank1() == true){
        alert("You need to fill out all of the information!")
    }
    else{
        checkquestion(); 
        unhide(this, 'main1');
    }
}
function AreControlsEmpty2(){
    if(checkforblank2() == true){
        alert("You need to fill out all of the information!")
    }
    else{
        unhide(this, 'main3');
        unhide(this, 'main4');
        nextuser();
    }
}
function AreControlsEmpty3(){
    if(checkforblank3() == true){
        alert("You need to fill out all of the information!")
    }
    else{
        unhide(this, 'main4');
        tie();
    }
}



function checkquestion(){
    if(question2.value.toLowerCase() == "white"){
        arrayscore.push("Question1: correct</br>" );
        arraypoint = arraypoint +1;
    }
    else{
        arrayscore.push("Question1: incorrect</br>" );
        
    }
    if(question3.value == "600"){
        arrayscore.push("Question2: correct</br>");
        ++arraypoint;
    }
    else{
        arrayscore.push("Question2: incorrect</br>");
    }
    if(question4.value.toLowerCase() == "trump"){
        arrayscore.push("Question3: correct</br>");
        ++arraypoint;
    }
    else{
        arrayscore.push("Question3: incorrect</br>");
    }
    if(question5.value.toLowerCase() == "shark"){
        arrayscore.push("Question4: correct</br>");
        ++arraypoint;
    }
    else{
        arrayscore.push("Question4: incorrect</br>");
    }

    if(question7.value.toLowerCase() == "white"){
        arrayscore1.push("Question1: correct</br>");
        ++arraypoint1;
    }
    else{
        arrayscore1.push("Question1: incorrect</br>" );
        
    }
    if(question8.value == "600"){
        arrayscore1.push("Question2: correct</br>");
        ++arraypoint1;
    }
    else{
        arrayscore1.push("Question2: incorrect</br>");
    }
    if(question9.value.toLowerCase() == "trump"){
        arrayscore1.push("Question3: correct</br>");
        ++arraypoint1;
    }
    else{
        arrayscore1.push("Question3: incorrect</br>");
    }
    if(question10.value.toLowerCase() == "shark"){
        arrayscore1.push("Question4: correct</br>");
        ++arraypoint1;
    }
    else{
        arrayscore1.push("Question4: incorrect</br>");
    }

    var answerfinal = document.getElementById("hidegridid");
if(answerfinal){
    if(answerfinal.className === "hidegrid"){
        answerfinal.className = "grid-container";
    }
    else {
        answerfinal.className = "hidegrid";
    }
}

    if(arraypoint > arraypoint1){
        document.getElementById("winner1").innerHTML = question1.value;
        document.getElementById("user1").innerHTML = arrayscore;
    }
    else{
        document.getElementById("loser1").innerHTML = question1.value;
        document.getElementById("user2").innerHTML = arrayscore;
    }
    if(arraypoint1 > arraypoint){
        document.getElementById("winner1").innerHTML = question6.value;
        document.getElementById("user1").innerHTML = arrayscore1;
    }
    else{
        document.getElementById("loser1").innerHTML = question6.value;
        document.getElementById("user2").innerHTML = arrayscore1;
    }

    if(arraypoint1 == arraypoint){
        document.getElementById("user1").innerHTML = "";
        document.getElementById("user2").innerHTML = "";
        document.getElementById("winner1").innerHTML = "";
        document.getElementById("loser1").innerHTML = "";
        document.getElementById("winner").innerHTML = "";
        document.getElementById("loser").innerHTML = "";
        document.getElementById("hidegridid").className = "hidegrid";
        document.getElementById("tie").innerHTML = "This game has been tied between " + question1.value + " and " + question6.value + "</br>" + "We will have to restart the match and make the questions harder! Goodluck";
    }
    document.getElementById("questioncleared").reset();
    arrayscore1 = [];

    var restartbutton = document.getElementById("restartbutton");

    if(restartbutton.className = "hide"){
        restartbutton.className = "restartbutton";
    }
    

}


function tie(){
    if(question11.value == "1999"){
        arrayscore2.push(" Question 11: correct </br>");
        ++arraypoint2;
    }
    else{
        arrayscore2.push("Question 11: incorrect </br>");
    }
    if(question12.value == "1080"){
        arrayscore2.push(" Question 12: correct </br>");
        ++arraypoint2;
    }
    else{
        arrayscore2.push("Question 12: incorrect </br>");
    }
    if(question13.value.toLowerCase() == "golf"){
        arrayscore2.push(" Question 13: correct </br>");
        ++arraypoint2;
    }
    else{
        arrayscore2.push("Question 13: incorrect </br>");
    }
    if(question14.value.toLowerCase() == "scream"){
        arrayscore2.push(" Question 14: correct </br>");
        ++arraypoint2;
    }
    else{
        arrayscore2.push("Question 14: incorrect </br>");
    }
    if(question15.value == "1999"){
        arrayscore3.push(" Question 11: correct </br>");
        ++arraypoint3;
    }
    else{
        arrayscore3.push("Question 11: incorrect </br>");
    }
    if(question16.value == "1080"){
        arrayscore3.push(" Question 12: correct </br>");
        ++arraypoint3;
    }
    else{
        arrayscore3.push("Question 12: incorrect </br>");
    }
    if(question17.value.toLowerCase() == "golf"){
        arrayscore3.push(" Question 13: correct </br>");
        ++arraypoint3;
    }
    else{
        arrayscore3.push("Question 13: incorrect </br>");
    }
    if(question18.value.toLowerCase() == "scream"){
        arrayscore3.push(" Question 14: correct </br>");
        ++arraypoint3;
    }
    else{
        arrayscore3.push("Question 14: incorrect </br>");
    }

    var answerfinal12 = document.getElementById("hidegridid");
if(answerfinal12){
    if(answerfinal12.className === "hidegrid"){
        answerfinal12.className = "grid-container";
    }
    else {
        answerfinal12.className = "hidegrid";
    }
}
/*
    if(arraypoint2 > arraypoint3){
        document.getElementById("winner1").innerHTML = question1.value;
        document.getElementById("user1").innerHTML = arrayscore2;
    }
    else{
        document.getElementById("loser1").innerHTML = question1.value;
        document.getElementById("user2").innerHTML = arrayscore2;
    }
    if(arraypoint3 > arraypoint2){
        document.getElementById("winner1").innerHTML = question6.value;
        document.getElementById("user1").innerHTML = arrayscore3;
    }
    else{
        document.getElementById("loser1").innerHTML = question6.value;
        document.getElementById("user2").innerHTML = arrayscore3;
    }
*/
    if(arraypoint2 > arraypoint3){
        document.getElementById("winner1").innerHTML = document.getElementById("type1").value;
        document.getElementById("user1").innerHTML = arrayscore2;
    }
    else{
        document.getElementById("loser1").innerHTML = document.getElementById("type1").value;
        document.getElementById("user2").innerHTML = arrayscore2;
    }
    if(arraypoint3 > arraypoint2){
        document.getElementById("winner1").innerHTML = document.getElementById("type6").value;
        document.getElementById("user1").innerHTML = arrayscore3;
    }
    else{
        document.getElementById("loser1").innerHTML = document.getElementById("type6").value;
        document.getElementById("user2").innerHTML = arrayscore3;
    }

    if(arraypoint2 == arraypoint3){
        document.getElementById("user1").innerHTML = "";
        document.getElementById("user2").innerHTML = "";
        document.getElementById("loser1").innerHTML = "";
        document.getElementById("winner1").innerHTML = "";
        document.getElementById("winner").innerHTML = "";
        document.getElementById("loser").innerHTML = "";
        document.getElementById("hidegridid").className = "hidegrid";
        document.getElementById("tie").innerHTML =  "This game has been tied between " + question1.value + " and " + question6.value + "</br>" + "We will have to restart the match and make the questions harder! Goodluck";
    }
    document.getElementById("questioncleared").reset();
    arrayscore3 = [];
}
