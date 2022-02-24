<h1 align="center">Cat Memory Game - Testing Details</h1>

[View the main README.md document](README.md)

**Please note: To open any links in this document in a new browser tab, press 'CTRL + click'.**

<a id=#table-of-contents></a>
# Table of Contents
<details open>
<summary><b>(click to expand or hide)</b></summary>
<!-- MarkdownTOC -->

[Testing](#testing)
* [Validators](#validators)
* [Lighthouse](#lighthouse)
* [Wave Report](#wave)
* [User Stories](#user-stories)
* [Manual Testing](#manual-testing)
* [Bugs/Fixes](#bugs-fixes)

<!-- /MarkdownTOC -->
</details>

<a id="testing"></a>
# Testing 

<a id="validators"></a>
## Validators

<a id="lighthouse"></a>
## Lighthouse

<a id="wave"></a>
## Wave Report  

<a id="user-stories"></a>
## User Stories  

<a id="manual-testing"></a>
## Manual testing of all elements and functionality on every page

<a id="bugs-fixes"></a>
## Bugs/Fixes  

**Home Page**

**1. Issue**:  
    I was having issues with my footer where the footer wouldn't stay at the bottom of the page.
* **Fix**: I found the answer at [freeCodeCamp](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/) 
where I was advised to add a relative position to the container and an absolute position to the footer. This fixed the issue.  
There was a future issue with this - see Level 1 Page below.

**Level 1 Page**

**1. Issue**:
    Once I added the cards in, the footer kept going higher up the page. I tried lots of different changes in my css to get this to work.
    None did. 
* **Fix**: I searched Slack and found a link to a [YouTube page](https://www.youtube.com/watch?v=yc2olxLgKLk) and followed the flex 
    instructions. This has rectified the issue with my footer moving. 

**2. Issue**:
    I was having an issue when creating the cards using Bootstrap where the Bootstrap background colour kept displaying a white border 
    around the card that I didn't want.
* **Fix**: I found the answer on [Stack Overflow](https://stackoverflow.com/questions/45408037/how-to-remove-background-color-in-bootstrap) 
where I used background-color: transparent, to remove the Bootstrap default background colour.


