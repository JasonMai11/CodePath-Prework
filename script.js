// Global Constants
const clueHoldTime = 1000; // how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


// randomizes the pattern each time the game is played
function randomizer(arr) {
  let currentIndex = arr.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}
// Global Variables
var pattern = [3, 2, 1, 4, 5];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be betwen 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;

function startGame(){
  //initialize game variables
  progress = 0;
  mistakes = 0;
  document.getElementById("life").innerHTML = 0;
  randomizer(pattern)
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("stopButton").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startButton").classList.remove("hidden");
  document.getElementById("stopButton").classList.add("hidden");
}

function addMistake(){
  document.getElementById("life").innerHTML = mistakes;
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0; i<=progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("You Won!")
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //keep going
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //win
        winGame();
      }else{
        //keep going
        progress++;
        playClueSequence();
      }
    }else{
      //keep going
      guessCounter++;
    }
  }else{
    //lose game
    mistakes++;
    addMistake();
    if(mistakes == 3){
      loseGame();
    }
  }
  
}    
  






// Sound Synthesis Functions
const freqMap = {
  1: 370,
  2: 400,
  3: 260,
  4: 450,
  5: 500,
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
