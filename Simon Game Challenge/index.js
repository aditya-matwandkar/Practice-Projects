let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;


function nextSequence(){
    userClickedPattern = [];
    let randomNumber = Math.ceil(Math.random() * 4) - 1;
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    level++;
    $("#level-title").text("level " + level);
}

$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePressed(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function animatePressed(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}


$(document).keydown(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
    }
    else {
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        $("#level-title").text("Game Over, Press any key to Restart");
        StartOver();
    }
}

function StartOver(){
    level = 0;
    gamePattern = [];
    started = false;
}