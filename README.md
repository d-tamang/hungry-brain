## Hungry Brain

https://d-tamang.github.io/hungry-brain/

## Background

Hungry Brain is a math game for kids that features basic addition problems. Various numbers fall from the top of the game screen, and the objective is to move the sliding mouth to "catch" the correct one. Once a problem is successfully solved, a new one is generated. If the wrong number is caught, the lives counter will decrement by one, losing the game if it reaches 0. The game is won by solving 10 equations.

## Functionality & MVPs

In Hungry Brain, users will be able to:
  - Start and reset the game
  - Slide the mouth left and right to catch the correct number
  - Play/pause the background audio

In addition, this project will include:
  - Instructions for the user describing the rules of the game
  - A production README
  - Links to my LinkedIn and GitHub profile

## Wireframe

![](src/assets/images/wireframe.png)

## Technologies, Libraries, APIs

This project will be implemented with the following technologies:

  - Canvas API to render the game screens
  - Webpack and Babel to bundle and transpile the source JavaScript code
  - Vanilla JS DOM API for basic DOM manipulation

## Implementation Timeline

  - Friday Afternoon & Weekend: Setup project and render the board elements on the browser. Implement basic logic of incrementing a count with correct answers, decrementing a lives counter with wrong answers, and rendering a different brain image with each correct answer. Render game losing/winning screen.
  - Monday: Develop code to bring movement to the mouth and falling number objects. Tie together logic of "catching" the right number to increase the count, and the wrong number to decrease the number of lives.
  - Tuesday: Put background audio, and the option to mute it. Add unique sounds that play when the user's score goes up, and when the user loses a life.
  - Wednesday: Focus on aesthetics of the game, make it look pretty.
  - Thursday Morning: Deploy to GitHub. Write a production README.
  
 ## Bonus Features
  - Add levels of difficulties featuring more advanced operations
  - Add options to choose subjects - math, geography, trivia, etc...
