# TriviaGame
Week 5 UW coding bootcamp Homework
* Instructions:
- You'll create a trivia form with multiple choice or true/false options (your choice).
- The player will have a limited amount of time to finish the quiz. 
- The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
- Don't let the player pick more than one answer per question.
- Don't forget to include a countdown timer.
- instruction video: https://www.youtube.com/watch?v=fBIj8YsA9dk&feature=youtu.be

* PSUDOCODE:
- I'll create a language trivia with multiple choice options- I'll use arrays to hold all the choices per question. 
- use timer function with set interval of a second(1000) and limit the questions to 5 and the multiple choices to three per question. 
- I'll use switch statements to hold the three cases- the default case would be a .text to the final screen saying there was no answer chosen for the question.
- the countdown timer will be on the top of the page counting down from 1 minute(60 seconds)(60000).
- there'll be a total of 3 screens: 
    - first screen- intro statements about the game, start button
    - second screen- all the questions with the options
    - third screen- scores: right/ wrong points, restart button

- declare variables for setInterval(), clearInterval(), setTimeout(), clearTimeout(),  ; which are JS native 
functions
    - var timeOut = window.setTimeout(function(){}, 60000)
        need to set setTimeout to a variable in order to use clearTimeout()
    - window.setInterval(function(){}, 1000)
    - window.clearTimeout(timeOut)

LINK TO DEPLOYED CODE: https://redricasa.github.io/TriviaGame/
TECHNOLOGIES USED: Jquery, CSS, HTML, JavaScript


