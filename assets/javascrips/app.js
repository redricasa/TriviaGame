// console.log($); to test if jquery's cdn works

$(document).ready(function(){
//timer function
    timer--;
    

    $("#timer").text("timer:  ").append(timer);
//set interval of a second
    var interval = setinterval(function(){
        console.log("second passed");
    }, 1000);

//timer of 30 seconds
    var timer = setTimeout(timeout, 30000);
    if (timer=0){
        clearTimeout(timer);
        console.log("timer went out!")
    }else{
        timer--;
    }
//when start button gets clicked, the timer starts to decrement    
    $("#start").on("click", function(){
        console.log("start button clicked")
        // timer--;
    });




























});






























