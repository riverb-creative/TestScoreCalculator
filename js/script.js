/*
    Author: River 
    Description: Prompt a user to enter a test score between 0 & 100
                    or enter 999 to end program
    Date: 02/20/2025
*/

'use strict';

window.onload = () => {

    //create variables for form IDs
    
    const lastScore = document.getElementById("lastScore");

    const totalScore = document.getElementById("totalScore");

    const avgScore = document.getElementById("avgScore");

    const highScore = document.getElementById("highScore");

    const lowScore = document.getElementById("lowScore");
    
    const btnClick = document.getElementById("btnClick");

    
 // button onclick event function to execute   
    btnClick.onclick = () => {

      //prompts user to enter a test score  
        let testAnswr = prompt("Enter a test score between 0 and 100 or to exit enter 999");  

       //setting all variables equal to correct amount 
        
        let totalScores = 0;

        let sum = 0;

        let avgScores = 0;

        let minScore = 100;

        let maxScore = 0;

        let count = 0;

                //What need do:
                    // While user does not enter 999 this should happen:
                        // if user enters non-numerical value, prompt needs to come back up with error
                        // if user enters value less than zero OR more than 100 prompt needs to come back up with error
                        // ELSE if user enters value b/t 0 and 100:
                            //update variables to store: last score entered, total of scores, avg scores
                                //highest score & lowest score
                            //prompt should reappear to let users enter a new value
                    //after WHILE loop, all scores should be displayed

        
    //while loop that checks if user hasn't entered '999' then:

        while (testAnswr != 999) {
            
        //check if user enters non-numerical value

            if(isNaN(testAnswr)) {

                testAnswr = prompt("ONLY enter a test score between 0 and 100 or to exit enter 999"); 
            } 
        //check if user enters value less than 0 or more than 100

            if (testAnswr < 0 || testAnswr > 100) {

                testAnswr = prompt("ONLY enter a test score between 0 and 100 or to exit enter 999");
            } else {

        //adds totalScores to testAnswer

            totalScores += parseFloat(testAnswr);

        //increment in +1 to count how many entries there are

            count++; 

        //gets average score from totalScores / count

            avgScores = totalScores / count; 

        //checks if minScore is greater than testAnswer;
        //if so: set minScore equal to testAnswr and display that value into lowScore textbox

            if (minScore > testAnswr) {
                minScore = testAnswr;
                lowScore.value = minScore;
            }

        //checks if maxScore is less than testAnswer;
        //if so: set maxScore equal to testAnswr and display that value into highScore textbox

            if (maxScore < testAnswr) {
                maxScore = testAnswr;
                highScore.value = maxScore;
            }

        //output avgScores into avgScore textbox

            avgScore.value = avgScores;

        //output totalScores into totalScore textbox

            totalScore.value = totalScores;

        //output testAnswer into lastScore textbox

            lastScore.value = testAnswr;

        //prompt user to enter another test score
            testAnswr = window.prompt("Enter another test score between 0 and 100 or to exit enter 999");


            } //end else statement

        } // end while loop

    } // end onclick btn
       
} //end onload function

      
