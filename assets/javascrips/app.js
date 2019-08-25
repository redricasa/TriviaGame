// console.log($); to test if jquery's cdn works
$(document).ready(function(){

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
    }
    
//display # of in/correct answers
});
//a countdown function

// var countDown = function(){
//     for(var i=0; i < count.length ; i++){
//        timerFunction();
//     //    console.log(countDown);
//     };
// }




});






























