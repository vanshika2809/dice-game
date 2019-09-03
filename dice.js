var diceTotal=0;
function rollDice(){
	var die= document.getElementById("Die");
	var status= document.getElementById("status");
	var d=Math.floor(Math.random() * 6) +1;
	document.getElementById('imgd').src = 'dice-' + d + '.png';
	document.getElementById('die').innerHTML=d;
		status.innerHTML="you rolled "+d+".";
	var diceTotal= diceTotal+d;
	die.innerHTML=d;
	document.getElementById('total').textContent=diceTotal;

}