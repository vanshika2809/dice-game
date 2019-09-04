var sec=20;
var diceTotal=0;
function rollDice(){
	var die= document.getElementById("die");
	var status= document.getElementById("status");
	var d=Math.floor(Math.random() * 6) +1;
	document.getElementById('imgd').src = 'dice-' + d + '.png';
	document.getElementById('die').innerHTML=d;
		status.innerHTML="you rolled "+d+".";
	 diceTotal= diceTotal+d;
	die.innerHTML=d;
	document.getElementById('total').innerHTML=diceTotal;



	if(sec<=0)
	{
		Button.disabled=true;
		alert("Game Over")
	}

	if(sec==20)
	{
		time();
	}

}

function time()
{
	if(sec<=0)
	{
		Button.disabled=true;
		alert("Game Over")
	}
	else{
		sec=sec-1;
		document.getElementById("time").innerHTML=sec;
	}

	setTimeout(function(){time();},1000);
}