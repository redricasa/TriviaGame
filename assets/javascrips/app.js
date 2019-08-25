// console.log($); to test if jquery's cdn works

$(document).ready(function(){

    var count=30;
    $("#timer").text("timer:  ").append(timer);
//set interval of a second 
    var interval = setInterval(timerFunction, 1000);
    function timerFunction(){
        console.log(count--); 
//if timer gets to 0, stop the timer from going into the negative numbers (clearTimeout)
        if (count===0){
            clearInterval(interval);
            console.log("timer went out!");
    };  
//when start button gets clicked, the timer starts to decrement    
    $("#start").on("click", function(){
        console.log("start button clicked")
        // timer--;
    });
//clearInterval
//DOM radio button groups
    //create attributes for answer index
//submit button

});






























