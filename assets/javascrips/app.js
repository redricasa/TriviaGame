// console.log($); to test if jquery's cdn works
$(document).ready(function(){
    var languageBank = [
        { 
            Language1: "Hindustani",
            countries1: ["Pakistan", "Taiwan", "Austria"],   
        }, 
        {
            Language2: "Hausa",
            countries2: ["Nigeria", "Benin", "Togo"],        
        }, 
        {
            Language3: "Swahili",
            countries3: ["Somalia", "Kenya", "India"],
        }, 
        {
            Language4: "Chinese",
            countries4: ["Fiji", "Singapore", "Suriname"],   
        }, 
        {
            Language5: "Turkish",
            countries5: ["Cyprus", "Greece", "Bolivia"],     
        }
    ];
//an object/map of the index of questions set to index of correct answers
var correctAnswers = { 0:0, 1:0, 2:1, 3:1, 4:0 }
//set interval of a second  
var interval;
function timerOn(){
    var count=30;
    interval = setInterval(timerFunction, 1000);
    function timerFunction(){
    //if timer gets to 0, stop the timer from going into the negative numbers (clearTimeout)
        if (count===0){
            clearInterval(interval);
            $("#timer").text("Time's up!")
            return;
        }
        --count;
        $("#timer").text(count);
    };  
};

//when start button gets clicked, the timer starts to decrement    
$("#start").on("click", function(){ 
    timerOn();
    console.log("start button pressed")
});

//create attributes for answer index???
//submit button
$("#submit").on("click", function(){
    if (interval){
        clearInterval(interval);
    };
    for(var i=0; i< languageBank.length; i++ ){
        var elem =$("input[name="+i+"]:checked");
        var val = elem.val();
        console.log(val);
        if(correctAnswers[i]===Number(val)){
            console.log("correct for "+ i);
        }else{
            console.log("wrong for "+ i);
        }
    }
    
//display # of in/correct answers


});


});






























