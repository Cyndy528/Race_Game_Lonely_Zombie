$(document).ready(function() {
	
	var $box1 = $('#box1');
	var $box2 = $('#box2'); 
	var p1Moves = 0;
	var p2Moves = 0;
	var max = 27;
	var p1Wins = 0;
	var p2Wins = 0;

$(window).keydown(function(key) { 

        switch (parseInt(key.which)) {
            case 66:
                $('#box1').animate({
                    left: "+=110px"
                }, 'slow');
                p1Moves++; 

                break;
            case 70:
                $('#box2').animate({
                    left: "+=100px"
                }, 'slow');
                p2Moves++;
            
                break;
            default:
                break;
        }


function Game (player1, player2, winner) {
  this.player1 = player1;
  this.player2 = player2;
  this.winner = winner;
  this.init();
}

// A starter Player constructor.
function Player(playerName, position, wins) {
  this.playerName = playerName;
  this.position = position;
  this.wins = wins;
}

var player1 = new Player("Player 1", $('#container1'));
var player2 = new Player("Player 2", $('#container2'));

Player.constructor.prototype.winOnce = $(document).keypress (function (winner) {
  
  if (p1Moves >= max) {
    p1Wins++;
    alert("Biter Wins!");
}
  if (p2Moves >= max) {
    p2Wins++;
    alert("Flesh Eater Wins");

  }
		}); 
	}); 

});