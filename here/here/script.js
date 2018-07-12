function displayText(elm) {
	var text;
	console.log(elm.id);
	if(elm.id == "pos1") {
		text = document.getElementById('test');
	}
	else if(elm.id == "pos2") {
		text = document.getElementById('test1');
	}
	else if(elm.id == "pos3") {
		text = document.getElementById('test2');
	}
	// var y = document.getElementById('test1');
	// var z = document.getElementById('test2');
	//console.log(x);
	// for (var i = 0; i < x.length ; i++) {
	// 	x[i].style.visibility = 'visible';
	// }
	// x.style.visibility = 'visible';
	// y.style.visibility = 'visible';
	// z.style.visibility = 'visible';
	console.log("Hovering!");

	text.style.visibility = 'visible';
}

function hideText(elm) {
	console.log(elm);
	// var x = document.getElementById('test');
	// var y = document.getElementById('test1');
	// var z = document.getElementById('test2');
	// // for (var i = 0; i < x.length ; i++) {
	// // 	x[i].style.visibility = 'hidden';
	// // }
	// x.style.visibility = 'hidden';
	// y.style.visibility = 'hidden';
	// z.style.visibility = 'hidden';
	// console.log("Mouse is out");
	var text;
	console.log(elm.id);
	if(elm.id == "pos1") {
		text = document.getElementById('test');
	}
	else if(elm.id == "pos2") {
		text = document.getElementById('test1');
	}
	else if(elm.id == "pos3") {
		text = document.getElementById('test2');
	}

	text.style.visibility = 'hidden';
}