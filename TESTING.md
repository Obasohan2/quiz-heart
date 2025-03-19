## Manual Testing 
### Testing User Stories

`Home Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Sites title | Link directs the user back to the home page | Clicked title | Home page reloads | Pass |
| Login button | Displays the modal with the instructions on the user to register before the game | Clicked on button | Refused to validate the unregistered username | Pass |
| Register button | Successfully register username | Clicked on registration button | Username Registered | Pass |
| Login Button/Username | Directs the user to the game page | Clicked on button | Game page opens to display the difficulty selections | Pass |
| High Scores Button | Directs the user to the high scores page | Clicked on button | Directs to the high scores page | Pass |
| All buttons - hover effect | All black buttons with white text should change to white with black text when hovered over. | Hover over each button on the page | Each button displayed the correct styling when hovered over | Pass |
| The Sites title | Link directs the user back to the home page | Clicked title | Directed back to home page | Pass |
| All buttons - hover effect | All buttons with a blue background & white text should change when hovered over to a background colour of grey with blue text. | Hover over each button on the page | Each button displayed the correct styling when hovered over | Pass |


`Game Page - Quiz Area`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Sites title | Link directs the user back to the home page | Clicked title | directed back to home page | Pass |
| All buttons - hover effect | All buttons with a blue background & white text should change when hovered over to a background colour of grey with blue text. | Hover over each button on the page | Each button displayed the correct styling when hovered over | Pass |
| Timer | When successfully login to game area, the timer appear and start counting in seconds to maximum 30 seconds per game to be played by the user. The game end either with the timer or the user completed the game.| Game end with the timer in 30 seconds duration as programmed | Game end after question 10 was answered I was taken to the end game, score displayed. | Pass |
| Question populated | The question is correctly pulled from the data array | console.log the data and check that the question has been pulled correctly | The question is displaying | Pass |
| Answers populated | The answers are correctly pulled from the javascript data array | console.log the data and check that the answers have been pulled correctly | The answers are displaying | Pass |
| Data attribute correct | The data attribute correct has been applied to the correct answer | By console logging the data I am able to check what the correct answer should be. I can then console.log the id of the buttons to check whether the data attribute has been applied only to the button containing the correct answer | only the correct answer has the correct attribute | Pass |
| Correct answer - border colour | When a correct answer is clicked the border around the game area should display green | Clicked on a correct answer | Border displayed green | Pass |
| Incorrect answer - border colour | When an incorrect answer is clicked the border around the game area should display red | Clicked incorrect answer | Border displayed red | Pass |
| Correct answer - button colour | When a correct answer is clicked the button should change background colour to green | Clicked a correct answer | Button background turned green | Pass |
| Incorrect answer - button colour | When an incorrect answer is clicked the clicked buttons background should turn red | Clicked incorrect answer | Button background turned red | Pass |
| Incorrect answer - display correct answer | When an incorrect answer is clicked, the correct answer should display a green background | Clicked incorrect answer | The correct answer turned green | Pass |
| Question No counter | The Question No counter should start at 1 and increase by 1 time the next button is selected. | answered questions and clicked next button | Each time the next button is clicked the Answer no counter increases by 1. | Pass |
| Score Counter | The score counter should begin at 0. Each time a correct answer is selected the score should increase by 10. If an incorrect answer is selected the score should remain the same | Clicked a correct answer to check if the score increased. Clicked an incorrect answer to check the score stayed the same| When a correct answer was selected the score increased by 10. When an incorrect score was selected the score stayed the same | Pass |
| Not Allowed Cursor | Once an answer has been selected, the answer buttons should then be disabled and when hovered over the not allowed cursor will display | Clicked on one answer button and then clicked on the remaining answer buttons | After the answer was selected each answer button clicked on subsequently displayed the not allowed cursor | Pass |
| Next button - becomes visible | When an answer is clicked the next button should be displayed so the user can progress to the next question, or to the end section if all 15 questions have been answered| Clicked on an answer button | The next button displayed | Pass |


`Game Page - End of Quiz`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Sites title | Link directs the user back to the home page | Clicked title | Home page reloads | Pass |
| Score Display | The Your Score area should populate with the score you have achieved | I added my score as I played, checked the score on the last question & compared to the score displayed | The score displays correctly | Pass |
| Check High Score button - on click | Once clicked the submit button will redirect you to the high scores page | Clicked the button with the team name filled in | Redirected to the high scores page | Pass |
| Play again? button | Clicking on this button will return you to the start of the game page where you can select a quiz difficulty level | Clicked on the play again? button | Directed to the beginning of the game to select a difficulty level | Pass |
| Save button | Clicking on this button will get the score saved in the score section | Clicked the Save button | Score saved | Pass |
| View Score button | Clicking on this button will allow user to view all the saved scores in the score section | Clicked the View Score button | Score viewed | Pass |
| Back to Heart Quiz Game button | Clicking on this button will allow user to go back to the home page and login to start the game.| Clicked the Back to Heart Quiz Game button  | Back to the home page | Pass |
| All buttons - hover effect | All buttons with a blue background & white text should change when hovered over to a background colour of grey with blue text. | Hover over each button on the page | Each button displayed the correct styling when hovered over | Pass |