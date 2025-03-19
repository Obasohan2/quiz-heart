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
- I have used #E6ECF0 as the button background.
- I have use #c6c9cc for the hover background
- I have used #fff as the text colour
- I have used #001e4d;; for the button background
- I have used rgb(3, 233, 103) to display the correct answer .
- I have used #bb0505; to display the wrong answer .


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


# Testing

Please refer to [TESTING.md](./TESTING.md) for all testing carried out.

## Manual Testing

### Test Cases

| Test Case ID | Description | Steps | Expected Result | Actual Result | Status |
| --- | --- | --- | --- | --- | --- |
| TC-001 | User Login | 1. Navigate to login page 2. Enter valid username & password  3. Click login | User is logged in successfully| Login successful! Redirecting...Click OK to continue | Passed |
| TC-002 | Invalid Login | 1. Navigate to login page  2. Enter invalid username & password  3. Click login | Invalid message displayed | Username not found! Please register a username. | Passed |
| TC-003 | Register | Register Username and click on Register button | Display message that Username is registered | Registration successful! You can use this registered Username to now log in. | Passed |


### Usernames Used for Testing

| Username |Test Case ID | Purpose | 
| --- | --- | --- |
| DREAMS | TC-001 | Valid login test |
| Dreams | TC-002 | Invalid login test |
| John | TC-003 | Register Username Test |


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

### Code Used

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