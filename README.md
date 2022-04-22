# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jason Mai**

Time spent: **14** hours spent in total

Link to project: (https://glitch.com/edit/#!/jm-codepath-preworkproject)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Added a background image  

## Video Walkthrough (GIF)
Original Gif with required implementations
![](http://g.recordit.co/GeXQhU4UJa.gif)

1. Implemented features (added 5th button, changed background, fonts, color of buttons, and frequency of each button.
![](http://g.recordit.co/k48WBmG38F.gif)

2. Implemented (3 mistakes feature)
![](http://g.recordit.co/6z2QFHR3pl.gif)

3. Implemented (Computer picks a different pattern the game is played each time, and changed button style)
![](http://g.recordit.co/B5CjTEgoDB.gif)

4. Included a different background image for the game
![](http://g.recordit.co/tcoAGxOXzZ.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- w3Schools html color picker
- w3Schools fonts

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? 


    One of the challenges I encountered was that I was unable to figure out what to specifically use when it came to changing randomizing the pattern each time the game was played. I knew I had to create another function to handle randomizing the pattern but I was unsure on how to approach it. I was then able to solve my issue by creating a function called randomizer() that randomizes the array with a preset pattern of [1, 2, 3 ,4, 5] since I had five buttons. The function would be called each time the start button was pressed and would rearrange the array so no pattern would happen again each time the game is played. 

    Another challenge I encountered is creating the three lives implementation into the Light and Sound Memory Game. It wasn't a hard problem to solve at all, I was able to make an accumulator that would count each time a person makes a mistake and if a person makes three mistakes then the game would end. The problem was mainly showing the user how many mistakes made themselves. It took me less than half an hour to do this but I ran into a bug where the mistake counter was one behind after every mistake and to solve this I accumulated to the html before the function addMistake() (my accumulation function) was called.

3. What questions about web development do you have after completing your submission? 

    Currently I don't have any questions about web development besides the exception of how I will be able to utilize more of JavaScript's language and how to implement more features into a web with JavaScript. I had previously took HTML and CSS courses in High School and re-learned them in my introduction to Computer Science at my freshman year of college with web development but have briefly implemented JavaScript into web development. So I am looking forward to learning more about using JavaScript in web development and what more features or implementations I would be able to do using JavaScript in web development.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific.


    If I were given a few more hours to work on this project, I would try to implement a feature that allows a user to set a level of difficulty that they would prefer so the game doesn't become repetitive and easy after constant play time. When it comes to setting the level of difficulty, I would approach this by making levels from one to ten and each level would have a timer ticking down and as a user progresses then the time they would have to repeat the pattern would be shortened. To add uniqueness to the levels, levels eight through ten would make sure that the buttons will swap colors at a time interval between two to four seconds so a user doesn't anticipate to click a color at the same spot every time. For example, buttons one through four can represent (red, green, blue, purple) and a user has to repeat the color {red, blue}, we can make the colors swap one to the right every 3 seconds while the user is attempting to repeat the pattern so then buttons one through four would be (purple, red, green, blue).



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/01ff7a53df8747bf9f3f61810bb455b4)


## License

    Copyright [Jason Mai]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
