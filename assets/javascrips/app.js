$(document).ready(function(){
    var languageBank = [
        { 
            Language: "Which country if the language HINDUSTANI from?",
            countries: ["Pakistan", "Taiwan", "Austria"],   
        }, 
        {
            Language: "Which country if the language HAUSA from?",
            countries: ["Nigeria", "Benin", "Togo"],        
        }, 
        {
            Language: "Which country if the language SWAHILI from?",
            countries: ["Somalia", "Kenya", "India"],
        }, 
        {
            Language: "Which country if the language CHINESE from?",
            countries: ["Fiji", "Singapore", "Suriname"],   
        }, 
        {
            Language: "Which country if the language TURKISH from?",
            countries: ["Cyprus", "Greece", "Bolivia"],     
        }
    ];
    var questions = $("#questions");
    
    for (var i = 0; i < languageBank.length; i++){
        //creats 5 div tags
        var div = $("<div>");
        //library houses the loop
        var library = languageBank[i];
        var language = library['Language'];
        var nations = library['countries'];
        div.text(language);
        
        for (var ci = 0; ci < nations.length; ci++){
            //creats radio buttons
            var radioButton = $("<input>");
            var rid = ci+"_"+i;
            radioButton.attr({"type": "radio", "name": i, "value": ci, "id": rid});     
            // set input lables 'countries'
            var lables = $("<label>");
            lables.attr({"for": rid});
            //Gets individual countries and appends to lables
            lables.text(nations[ci]);
            //appends radioButtons to each lable
            div.append(radioButton);
            //appends the lables created to the divs
            div.append(lables);
            
        }
            
        //adds the divs to the div with the ID of questions
        questions.append(div);
    }
    $("</br>").insertAfter("div");
    
    $("</br>").insertBefore("input");
    //an object/map of the I of questions set to I of correct answers
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
        //uncheck all radio buttons when start button pressed
        console.log("start button pressed")
    });
    //create attributes for answer I???
    //submit button
    $("#submit").on("click", function(){
        var correct = 0; 
        var incorrect = 0; 
        //stops the countdown when submit button is clicked
        if (interval){
            clearInterval(interval);
        };
        //loops through the languageBank array and,
        for(var i=0; i< languageBank.length; i++ ){
            //elem stores the checked radio button in a group clustered by 'name' attribute
            var elem =$("input[name="+i+"]:checked");
            //val stores the value of elem which stores the I of bitton clicked per group of name 
            var val = elem.val();
            console.log(val);
            //the name:value of the radio buttons correspond to language#:country#- the if/else stmt checks to see if correct answers map matches to the name/value map-also displays # of corresponding scores  
            if(correctAnswers[i]===Number(val)){
                $("#correct").text(++correct);
                console.log("correct for the question at I # "+ i);
            }else{
                $("#incorrect").text(++incorrect);
                console.log("wrong for the question at I # "+ i);
            }
        }         
    });
    
});






























