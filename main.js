
//this grabs all the buttons in the keyboard section
const keyButtons = document.getElementById('keyboard');
console.log(keyButtons)


//WORDS RELATING TO GEN Z
let words = ["STAN", "CRINGE", "SIMP", "SHEEEESH", "BUSSIN", "SNATCHED", "CLAPBACK", "SKRRT", "PERIODT", "FLEX", "SUS", "SHOOK", "RECIEPTS", "SLAPS", "SHADE", "EXTRA", "GUCCI", "LIT", "RATCHET", "SAVAGE", "THIRSTY", "UNALIVE", "STORYTIME", "USSY", "BRUH","STUDIOUS", "NEUROTYPICALS", "WOMBLANDS", "GRWM", "CHUBBABUN", "THICC"]


//this generates a random word from the words array
let randomWord =
words[Math.floor(words.length * Math.random())];
console.log(randomWord)


//this makes the random word chosen into an array
let randomArray = randomWord.split('')



//create spaces on the baord that equal the length of the randomword 
for (let i = 0; i < randomArray.length; i++) {
     randomArray[i] = "_";
}
console.log(randomArray)

//creating element to put prompt
let outcome = document.getElementById('outcome')







//this displays the spaces on the website
let spaces = document.querySelector('p')

spaces.innerHTML = randomArray.join(' ')



  



let tries = 10 

keyButtons.addEventListener('click', event) 
  function event(evt) {
  if (randomWord.includes(evt.target.textContent)) {
//if the randomized word includes the html text content in the button pushed 
//then...


//display it in proper the space on the ganeboard
for (let i = 0; i < randomWord.length; i++){

    if(evt.target.textContent === randomWord[i]){
         randomArray[i] = evt.target.textContent
         spaces.innerHTML = randomArray.join(' ')
         console.log(randomArray)
    }
}


//also change the prompt for if true and disable button clicked. change button color.
    outcome.innerHTML= "Your choice passes the vibe check.";
    evt.target.style.backgroundColor = "#D192BA";
    evt.target.disabled = "true"
        
} else {


//if false change inner html and countdown tries. disable button when clicked. change button color. 
    tries -= 1; 
    outcome.innerHTML = `Low-key you have ${tries} tries left`;
    evt.target.style.backgroundColor = "#ff0000";
    evt.target.disabled = "true"



//the outcome if you are out of quesses aka game over/ disable ability to click all buttons
if(tries === 0){
    outcome.innerHTML = "ITS THE WE ARE ALL GOING TO DIE FOR ME"
    outcome.style.color = "#55FE01"
    spaces.innerHTML = randomWord;
    buttonArray.removeEventListener('click', event )
}
 }  
      

//the outcomes for winnning/ disable ability to click all buttons
if(!randomArray.includes("_") ) {
     outcome.innerHTML = "ITS THE SAVING MANKIND FOR ME"
     outcome.style.color = "#FE0199"
     outcome.style.fontSize = "35px"
     buttonArray.removeEventListener('click', event )
}
    }
    
    
const reloadtButton = document.querySelector("#reload");


//the laziest restart button   
// Reload everything
function reload() {
    reload = location.reload();
}


// Event listeners for reload
reloadButton.addEventListener("click", reload, false);
      
            
          
      



// let guess = buttonArray.addEventListener('click', function(evt) {
// console.log(evt)
// if (evt.target.textContent === randomWord[0]){
//   console.log(true)
// }else {
//   console.log(false)
// }
//   })




// for (let i = 0; i < randomWord.length; i++){
// // if(evt.target.textContent === randomWord[i]){
// // console.log(prompt.innerHTML = "killing it");
// // }else if (evt.target.textContent !== randomWord[i]) {
// // console.log(prompt.innerHTML = "Killing Us");
// // }
// // }
// // })


// }// randomWord.includes(evt.target.textContent) 
// //   console.log(true)
                            


// let spacesp = document.querySelector('p');

// spacesp.innerHtml = spaces.appendChild('body')

// console.log(spacesp)





  

  


//this is a spin on hangman- same game-but altered user experience

//it needs to:

//have a cache of different words within an array-how many words? is there a plug in that offers words and hints already so i have a lardge database of words?
//for each word there is a category that is displayed for the user to see when guessing
//an icebox item would be adding a hint per word

//when you hit the start button it loads the objective prompt and the blank slots for the randomized word.
//an icebox item would be to have the animated carrot at the end of the typewritter effect that the prompt does when pressing start


//when clicking a letter on the keyboard it will process if that letter is in the word and input in the blank if it is.

// if it wrong it will place an X in the scoreboard
//you have 9 trys to guess the "password"
//once you have missed 9 tries the prompt changes to (take cover the astroid is close or something like that)

//if you guess the word before 9 tries the prompt will change to something like 
//"thank you for saving our planet"

//if you would like to play again- hit the reset button. and then hit start. 

//i need to figure out how to attach the buttons to the dom so that each letter pressed can me itterated throughout the letters of the word- and return whereever the letters are on the board in the proper blank spaces or return false and be one turn down.