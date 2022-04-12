<h1 align="center">Cat Memory Game</h1>

<h3>Stream Two Project - Interactive Frontend Development</h3>

**Please note: To open any links in this document in a new browser tab, press 'CTRL + Click'.**

<a id=#table-of-contents></a>
# Table of Contents
<details open>
<summary><b>(click to expand or hide)</b></summary>
<!-- Markdown TOC -->

1. [Description](#description)
2. [User Experience (UX)](#user-experience-(ux))
   * [User Stories](#user-stories)
   * [5 Planes](#5-planes)
     1. [Strategy](#strategy)
     2. [Scope](#scope)
     3. [Structure](#structure)
     4. [Skeleton](#skeleton)
     5. [Surface](#surface)
3. [Features](#features)
   * [Current Features](#current-features)
   * [Future Features](#future-features)
4. [Technologies Used](#technologies-used)
5. [Testing](#testing)
6. [Lessons Learned](#lessons-learned)
7. [Deployment](#deployment)
8. [Credits](#credits)

<!-- /Markdown TOC -->
</details>

<a id="description"></a>
# Description  

I am currently studying the Full Stack Development Course through Code Institute.
Part of the course I am required to complete 4 milestone projects.
This memory game is my second milestone project which is part of the 
Interactive Frontend Development Module.

The cat memory game has been created for people of all ages that love cats and 
would like to test their memory.
The purpose of this website is to improve brain functionality such as focus, 
concentration and attention and to also have fun.

[Back to Table of Contents](#table-of-contents)

<a id="user-experience-(ux)"></a>
# User Experience (UX)

<a id="user-stories"></a>
## User Stories

Players Goals

* As a player, I would like to improve my concentration skills
* As a player, I would like to improve my focus skills
* As a player, I would like to improve my attention to detail
* As a player, I would like to have clear instructions on how to play the game
* As a player, I would like to be able to increase the level of difficulty to improve
brain functionality
* As a player, I would like to exit the game at any time
* As a player, I would like to be able to replay the level that I am on after
completing that level
* As a player, when replaying the level, I would like all the cards to be shuffled
* As a player, I would like to click a card and the card flips and displays a cat picture
* As a player, I would like the cards that I matched to stay flipped so I know
exactly how many cards are left to play
* As a player, I would like to be able to click the cards as many times as required
until the matching pair displays

[Back to Table of Contents](#table-of-contents)

<a id="5-planes"></a>
## 5 Planes

<a id="strategy"></a>
### 1. Strategy

The purpose of this project is to create a fun memory game for people of any age 
where they are looking for two cat cards that have the same image.
I have decided to use cats as images as they are one of my favourite animals.

<a id="scope"></a>
### 2. Scope

The features of this project will include:

* The ability to find two matching cat images
* The ability to improve concentration skills
* The ability to improve focus skills
* The ability to improve attention to detail
* The ability to read clear instructions on how to play the game
* The ability to increase the level of difficulty to improve brain functionality
* The ability to exit the game at any time
* The ability to replay the level that I just played
* The ability for all the cards to be shuffled when replaying the same level
* The ability to see a cat when flipping a card
* The ability to keep the matching cards flipped
* The ability to click a particular card again if the cards do not match

<a id="structure"></a>
### 3. Structure

The website consists of three pages:

* The Home Page that consists of the name of the game, a "Play" button and 
an "Instruction" button.
  * The "Instruction" button displays a modal with the instructions that can be 
closed by clicking the "x" button.
  * The "Play" button takes the user to Level 1 of the game.
* The 2nd page is the Level 1 game which consists of 12 cards, an "Exit" button
and a "Restart Game" button.
  * The user can either start playing the game by clicking a card; or
  * The user can click the "Exit" button and is taken to the Home Page; or
  * The user can click the "Restart Game" button where the cards will be shuffled and 
the user can start the game again.
* On completion of Level 1 a "Congratulations" displays and 3 buttons which consist
of "Play Level 2", "Replay Level 1" and "Exit to Main Menu".
  * If "Play Level 2" is clicked the user is taken to the 2nd level which is the 3rd 
  page of the website.
  * If "Replay Level 1" is clicked, the cards are shuffled and the user is able to replay
  Level 1.
  * If "Exit to Main Menu" is clicked, the user is taken back to the main menu. 
* The 3rd page is the Level 2 game which consists of 16 cards, an "Exit" button and a 
"Restart Game" button. The user can do the exact same functions as on the Level 1 game.
* On completion of Level 2, a "Congratulations" displays and 3 buttons which consist of 
"Replay Level 2", "Go back to Level 1" and "Exit to Main Menu".
  * If "Replay Level 2" is clicked, the cards are shuffled and the user is able to replay
  Level 2.
  * If "Go back to Level 1" is clicked, the user is taken back to Level 1 where 12 cards display.
  * If "Exit to Main Menu" is clicked, the user is taken back to the main menu.


<a id="skeleton"></a>
### 4. Skeleton

The wireframes have been created using Balsamiq and were created for Desktop, Tablet and Phone.

Here are the [wireframes](./documents/cat-memory-game.pdf):

* [Home Page Wireframe](./readme-images/wireframes/homepage.png)
* [Instructions Wireframe](./readme-images/wireframes/instructions.png)
* [Level 1 - 12 Cards Wireframe](./readme-images/wireframes/level1-12-cards.png)
* [1st Level Complete Wireframe](./readme-images/wireframes/1st-level-complete.png)
* [Level 2 - 16 Cards Wireframe](.readme-images/wireframes/level2-16-cards.png)
* [2nd Level Complete Wireframe](.readme-images/wireframes/2nd-level-complete.png)

<a id="surface"></a>
### 5. Surface 

Colour scheme

* I made the background colour of the pages purple #660099 for two reasons. 1. Purple is a royal colour 
and cats think they are royalty. 2. My favourite colour is purple.
* I then wanted a blue/green colour to compliment the purple. I selected a Maximum Blue Green #08B5C2.
* I kept the text colour generic and used Black #000 in some parts and a Gainsboro colour #E0E1E4 for some of the other 
text, such as copyright information in the footer, the numbers on level 1 and level 2 and the exit and restart game buttons. 
I originally used white, however the white was too bright on the screen.
* The hover colour is Gainsboro #E0E1E4 when hovered over the black text on the homepage.
* The buttons hover colour on Level 1 and Level 2 is black.


![4 Colours](./readme-images/website-colours.jpg)
Colours sourced using [Coolors](https://coolors.co/660099-08b5c2-000000-e0e1e4)

* The colours were checked through [WebAIM](https://webaim.org/resources/contrastchecker/) to ensure that the colours were accessible.

![WebAIM Contrast Checker](./readme-images/webaim-contrast-checker.jpg)

Typography

* The fonts were sourced from [Google Fonts](https://fonts.google.com/)
* The Fresca font is the main font used throughout the website with sans-serif as the fallback font.
This font was chosen as it compliments the Flavors font that is used for the titles.
* The Flavors font was used for all headings with sans-serif as the fallback font.
This font was chosen for its funky text that I thought would look good in a game.

Imagery

* The background image for the homepage was sourced from [pngset](https://pngset.com/download-free-png-yaylz) and 
was modified for use.
* The same image used in the homepage background, has been used on the back of each card.
* All cat images used for the cards were sourced from [Unsplash](https://unsplash.com/).

[Back to Table of Contents](#table-of-contents)

<a id="features"></a>
# Features

<a id="current-features"></a>
**Current Features**

<a id="future-features"></a>
**Future Features to implement**

[Back to Table of Contents](#table-of-contents)

<a id="technologies-used"></a>
# Technologies Used

Languages Used

1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
2. [CSS3](https://en.wikipedia.org/wiki/CSS)

Frameworks, Libraries, Programs and Resources Used

<!-- Created Ordered Lists via markdown style guide. I didn't want to have to keep updating the numbers in this list
when I added more information to this -->

1. [Balsamiq](https://balsamiq.com/) - wireframes
1. [Bootstrap 4.6 CDN](https://getbootstrap.com/docs/4.6/getting-started/introduction/) - to make the website responsive and to use modals
1. [Coolors](https://coolors.co/) - to display colour palettes
1. [Git](https://git-scm.com/) - version control
1. [GitHub](https://github.com/) - hosting service 
1. [GitPod](https://www.gitpod.io/) - IDE
1. [Google Fonts](https://fonts.google.com/) - typography
1. [Markdown Guide](https://www.markdownguide.org/basic-syntax/) - for creating this numbered list and not having to number each item individually
1. [pngset](https://pngset.com/) - for background cat image
1. [Slack](https://slack.com/) - main source of assistance from other students, developers and documents/resources
1. [Snagit](https://www.techsmith.com/screen-capture.html) - screen capture, resizing images and adding background colour to images
1. [Stack overflow](https://stackoverflow.com/) - for resolving specific issues
1. [TinyPNG](https://tinypng.com/) - efficient compression of images for the site
1. [Unsplash](https://unsplash.com/) - for cat images on cards
1. [W3Schools](https://www.w3schools.com/) - to assist with code
1. [WebAIM](https://webaim.org/resources/contrastchecker/) - web accessibility contrast checker


[Back to Table of Contents](#table-of-contents)
<a id="testing"></a>
# Testing

[Back to Table of Contents](#table-of-contents)

<a id="lessons-learned"></a>
# Lessons Learned

[Back to Table of Contents](#table-of-contents)

<a id="deployment"></a>
# Deployment

[Back to Table of Contents](#table-of-contents)

<a id="credits"></a>
# Credits

Code

* David Bowers, Code Institute student for his assistance with css positioning via a Webinar
* Scott Böning, former Code Institute student for his assistance with the html and css
* Mr_Bim, former Code Institute student for explaining various parts of JavaScript to me
* Manni, former Code Institute student for explaining various parts of JavaScript to me
* My friend Arik for explaining various parts of JavaScript to me
* My friend Rob for explaining various parts of JavaScript to me
* Former students and current students on Slack for their support
* Code Academy for a refresher on JavaScript: https://www.codecademy.com/ 

The below code was sourced from the following various places and modified to suit my code:
* JavaScript Object Destructing: https://www.javascripttutorial.net/es6/javascript-object-destructuring/
* How to shuffle an array: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
* How to create multiple flip cards that flip with a click: https://stackoverflow.com/questions/65485778/javascript-how-can-i-create-multiple-flip-cards-that-flip-with-an-onclick  
* Creating a countdown - function for timer: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown 
* How to trigger a Bootstrap modal programmatically: https://stackoverflow.com/questions/11404711/how-can-i-trigger-a-bootstrap-modal-programmatically 

[Back to Table of Contents](#table-of-contents)