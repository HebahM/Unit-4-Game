// Variables:

var randomNum;
var blackCrystal;
var redCrystal;
var blueCrystal;
var greenCrystal;
var score = 0;
var wins = 0;
var losses = 0;

$("#wins").html("<p>Wins: " + wins + "</p>")
$("#losses").html("<p>Losses: " + losses + "</p>")

// Functions:

function random() {
    randomNum = Math.floor(Math.random() * (120 - 19) + 19);
    return randomNum;
}

function crystalReset() {
    function crystalVal() { 
        crystalNum = Math.floor((Math.random() * 12) + 1);
        return crystalNum;
    }
    crystalVal();
    blackCrystal = crystalNum;
    console.log("Black Crystal value:")
    console.log(blackCrystal);
    crystalVal();
    redCrystal = crystalNum;
    console.log("Red Crystal value:")
    console.log(redCrystal)
    crystalVal();
    blueCrystal = crystalNum;
    console.log("Blue Crystal value:");
    console.log(blueCrystal);
    crystalVal();
    greenCrystal = crystalNum;
    console.log("Green Crystal value")
    console.log(greenCrystal)
}



// Generate random number and crystal values:

$(document).ready(function() {
    random();
    console.log(randomNum)
    $("#randomNumber").html("<h1>" + randomNum + "</h1>")
    crystalReset();
});



// Clicking crystals adds to score:

$("#black").on("click", function() {
    score = score + blackCrystal;
    $("#score").html("<h1>" + score + "</h1>");
})
$("#red").on("click", function() {
    score = score + redCrystal;
    $("#score").html("<h1>" + score + "</h1>")
})
$("#blue").on("click", function() {
    score = score + blueCrystal;
    $("#score").html("<h1>" + score + "</h1>");
})
$("#green").on("click", function() {
    score = score + greenCrystal;
    $("#score").html("<h1>" + score + "</h1>");
})


// Count wins and losses:

if (score == randomNum) {
    wins++;
    $("#wins").html("<p>Wins: " + wins + "</p>")

    random();
    crystalReset();
}
if (score > randomNum) {
    losses++;
    $("#losses").html("<p>Losses: " + losses + "</p>")

    random();
    crystalReset();
}
