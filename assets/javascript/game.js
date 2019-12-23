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


// Generate random number between 19-120:
function random() {
    randomNum = Math.floor(Math.random() * (120 - 19) + 19);
    $("#randomNumber").html("<h1>" + randomNum + "</h1>")
    score=0;
    $("#score").html("<h1>" + score + "</h1>");
    return randomNum;
}
// Assign value to crystals:
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
    
    crystalReset();
});

//Win/Loss function:
function addWinLoss() {
    if (score == randomNum) {
        wins++;
        $("#wins").html("<p>Wins: " + wins + "</p>")
        random();
        crystalReset();
    }
    else if (score > randomNum) {
        losses++;
        $("#losses").html("<p>Losses: " + losses + "</p>")
        random();
        crystalReset();
    }
}

// Clicking crystals adds to score:

$("#black").on("click", function() {
    score += blackCrystal;
    $("#score").html("<h1>" + score + "</h1>");
    addWinLoss();
});
$("#red").on("click", function() {
    score += redCrystal;
    $("#score").html("<h1>" + score + "</h1>")
    addWinLoss();
})
$("#blue").on("click", function() {
    score += blueCrystal;
    $("#score").html("<h1>" + score + "</h1>");
    addWinLoss();
});
$("#green").on("click", function() {
    score += greenCrystal;
    $("#score").html("<h1>" + score + "</h1>");
    addWinLoss();
});

