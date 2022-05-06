//Pseudo Code
// userChoice 
// computerGuess   
//wins for each
//losses for user
//total 10 guesses + update
//if user wins, + 1 game wons, restart
//if user loses, + losses & restart the game 
// array of total onkeyup options
//
$(document).ready(function () {

    var computerChoices = ["q","w","e"]
    var userChoice;
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;

    document.onkeyup = function(event) {
        var userChoice = event.key;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        console.log("user " + userChoice, "computer " + computerGuess, computerChoices)
        if (computerGuess === userChoice){
            console.log("User wins ")
            wins++;
            console.log("guesses left", guessesLeft, "wins", wins)
            reset();
        } else if (computerGuess != userChoice){
            console.log("User losses")
            guessesLeft--;
            losses++;
            console.log("guesses left", guessesLeft)
            reset();

        } 
        $('#wins').html(wins);
        $('#losses').html(losses);
        $('#guessesLeft').html(guessesLeft);
        $('#lettersGuessed').append(userChoice + ", ");
    }
    function reset(){
        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses = 0;
            console.log("Game Reset")
        }
    }   
});
