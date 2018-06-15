// Declaring Variables==================================
 var myChoices =["q","a","z","w","s","x","e","d","c","r","f","v","t","g","b","y","h","n","u","j","m","i","k","o","l","p"] ;
 var compChoices =["q","a","z","w","s","x","e","d","c","r","f","v","t","g","b","y","h","n","u","j","m","i","k","o","l","p"] ;
 var wins = 0;
 var losses = 0;
 var lives = 9;
 var currentGuesses =[];
 var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];


//  Where some magic happens================================

document.onkeyup = function(event){

   var userGuess = event.key.toLowerCase();    
  
     
     if(myChoices.indexOf(compChoices)) {
    
       if(userGuess === compGuess) {    
       alert("Cheater!!")
       wins++;
       lives = 9;
       compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
       currentGuesses = [];
       }
       if(userGuess != compGuess){
        lives --;
       }   
       if(lives === 1){
       alert("LAST TRY!!!")
       }
       if(lives === 0){
       alert("MUHAHAHA!!!")
       losses ++;
       lives = 9;
       compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
       currentGuesses.length = 0;
       }
    }      

     currentGuesses.push(event.key);



     var html =
       "<p>What letter am I thinking of? </p>" +
       "<p>Wins: " + wins + "</p>" +
       "<p>Losses: " + losses + "</p>" +
       "<p>Guesses left: " + lives + "</p>"+
       "<p>Guesses so far: " + currentGuesses + "</p>";
    
       document.querySelector("#game").innerHTML = html;
 } 
