# Heart Quiz Game
Visit the deployed site: [Heart Quiz Game](https://obasohan2.github.io/quiz-heart/)

**Heart Quiz Game** is a kind of educative quiz game, centered on current affairs hereby testing general knowledge with the general knowledge all around the world, where users could play on their own to test their speed and improve their general knowledge anywhere and at any time.

# CONTENTS

## DESIGN
#### HOME PAGE:

<img src="assets\images\homepage.png" alt="Home Page">
<img src="assets\images\login2.png" alt="Login Successful">
<img src="assets\images\login1.png" alt="Login Unsuccessful">
<img src="assets\images\registration.png" alt="Registration">

The Heart Quiz Game contains the registration of username and after the username is registered, the user can be able to login with the username which will eventually takes the user to the game with questions and optional answers.

You can also decide to view the scores from other users by clicking on Check High Scores button. Your username is usually validated.

Users can click on the logo and heading which will take them to the home page.


#### GAME AREA:

<img src="assets\images\game-area.png" alt="game area">
<img src="assets\images\game-area10.png" alt="game area">

After successful validation of your username, you login into the page and then start your game which also got the timer of 30 seconds to answer all the questions, if the time finishes, the Game Area will automatically end the game and your score will be display. The user will be displayed three options to view the saved scores, save score and play again.


#### SCORE PAGE

<img src="assets\images\score.png" alt="Score page">
<img src="assets\images\sscore.png" alt="Saved Scores">

The Score page show the scores from every user who have participated, the highest scores from five (5) users are displayed. You can still use the button of "Back to Heart Quiz Game" to participate. 

## Colour Scheme

In my css file I have used variables to declare colours, and then used these throughout the css file. I was recently introduced to this method during a code institute study and had some help from slack chat room - it is a useful convention to use as it allows you to alter the colour throughout the website if you decide to update a colour, by changing the colour once in the variable.

- I used rgb(135, 206, 235) as a background colour.
- I used #333333 for heading
I have used #E6ECF0 as the button background.
I have use #c6c9cc for the hover background
I have used #fff as the text colour
I have used #001e4d;; for the button background
I have used rgb(3, 233, 103) to display the correct answer .
I have used #bb0505; to display the wrong answer .


## Technologies Used

### Languages Used

HTML, CSS, Javascript

### Frameworks, Libraries & Programs Used

* [Github](https://github.com/) - To save and store the files for the website.
* Visual Studio Code IDE used to create the Heart Quiz Game.
* [GitPod](https://gitpod.io/) - IDE used to create the site.
* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.
* [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.
* [Favicon.io](https://favicon.io/) To create favicon.
* [Webpage Spell-Check](https://chrome.google.com/webstore/detail/webpage-spell-check/mgdhaoimpabdhmacaclbbjddhngchjik/related) - a google chrome extension that allows you to spell check your webpage. Used to check the site and the readme for spelling errors.
* [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices. <img src="assets\images\responsive.png" alt="Responsive Heart Quiz Game">

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







## Code Validation

- I used (https://jshint.com) [JSHint JavaScript Validator] to validate all the Javascript codes which resulted: "Document checking completed. No errors but warnings show"
- I used (https://validator.w3.org) [HTML Validator w3c] to validate all the HTML codes which resulted: "Document checking completed. No errors or warnings to show"
- I used (https://jigsaw.w3.org") [CSS Validator jigsaw] to validate the CSS codes to validate the CSS style codes and resulted: "Congratulations! No Error Found"
- I used the google chrome "Lighthouse" Developer Tools to test and analise with score results as follows: Performance: 88%, Accessibility: 100%, Best Practices: 96%, SEO:91%
<img src="assets\images\lighthouse.png" alt="Lighthouse Score">

## Deployment & Local Development
### Deployment

This Heart Quiz Game is deployed using GitHub Pages - Heart Quiz Game.

To Deploy the site using GitHub Pages:
Login (or signup) to Github.
Go to the repository for this project,  [HEART QUIZ GAME](https://obasohan2.github.io/quiz-heart)
Click the settings button.
Select pages in the left hand navigation menu.
From the source dropdown select quiz-heart branch and select save.
The site has now been deployed, please note that this process may take a few minutes before the site goes live.

## Local Development

### How to Fork
- To fork the repository:
Log in (or sign up) to Github.
Go to the repository for this project, Heart Quiz Game.
Click the Fork button in the top right corner.

### How to Clone
- To clone the repository:

Log in (or sign up) to GitHub.
Go to the repository for this project, [HEART QUIZ GAME](https://obasohan2.github.io/quiz-heart)
Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Credits

# Code Used

- I used various youtube tutorials (https://www.youtube.com) [GreatStackDev GreatStack]  to find more options as to solution when i am stocked.

- I  researched on (https://www.w3schools.com) [W3SCHOOLS] to learn more on website responsive and semantics and applied the knowledge.

- I  researched on this (https://developer.mozilla.org") [MDN] to learn more on html and CSS semantics 

- I knowledged code aquired from (https://codeinstitute.net") [Code Institute] to for my webpage.

## Content

All gallery photos for my site were pulled from google image.

All other content for the site, such as introduction messages and instructions were written by myself.

Acknowledgments
I would like to acknowledge the following people:

Jubril Akolade - My Code Institute Mentor.

The Code Institute Slack channel Peer Code Review - Thank you to everyone who took the time to loo through the responsive webpage and look over the code.