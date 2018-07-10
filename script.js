function styling(){
	var no=document.getElementById('nicepage').style.color;
	document.getElementById('nicepage').innerHTML = "hey";

	if (no=="blue"){
		document.getElementById('nicepage').style.color="red";
	}
		else {
		document.getElementById('nicepage').style.color="blue";

	}
	console.log(no);

	
}
