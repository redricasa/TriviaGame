// console.log($); to test if jquery's cdn works

$(document).ready(function(){
//timer function
    timer--;
    var timeout= 0;

    $("#timer").text("timer:  ").append(timer);
//set interval of a second
    var interval = setInterval(function(){
        // console.log("second passed"); 
    }, 1000);

//timer of 30 seconds
    var timer = setTimeout(timeout, 30000);
//if timer gets to 0, stop the timer from going into the negative numbers (clearTimeout)
    if (timer=0){
        clearTimeout(timer);
        console.log("timer went out!");
    }else{
        timer--; 
    }
//when start button gets clicked, the timer starts to decrement    
    $("#start").on("click", function(){
        console.log("start button clicked")
        // timer--;
    });





















});






























