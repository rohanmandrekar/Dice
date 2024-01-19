
var randomNumber1=6;
var randomNumber2=6;

function generate(){
	// console.log("here");
	randomNumber1=Math.floor(Math.random()*6)+1;
	randomNumber2=Math.floor(Math.random()*6)+1;

	document.getElementById('img1').src="images/dice"+randomNumber1+".png";
	document.getElementById('img2').src="images/dice"+randomNumber2+".png";

	if(randomNumber1>randomNumber2){
		document.getElementById('banner').innerHTML="Player 1 Wins";
	}
	else if(randomNumber2>randomNumber1){
		document.getElementById('banner').innerHTML="Player 2 Wins";
	}
	else{
		document.getElementById('banner').innerHTML="Tie";
	}
}