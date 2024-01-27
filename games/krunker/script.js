function flip(){
	if (document.getElementById('menu').style.display == 'none'){
		document.getElementById('menu').style.display = 'block';
		document.getElementById('menuBTN').innerHTML = '∧';
	} else {
		document.getElementById('menu').style.display = 'none';
		document.getElementById('menuBTN').innerHTML = '∨';
	}
}

function market(){
	document.getElementById('iframe').src = 'https://krunker.io/social.html?p=market';
}

function merch(){
	document.getElementById('iframe').src = 'https://shop.spreadshirt.com/krunkerio';
}

function terms(){
	document.getElementById('iframe').src = 'https://krunker.io/docs/terms.txt';
}

function user(){
	document.getElementById('iframe').src = 'https://krunker.io/social.html?p=profile&q=' + document.getElementById('userInput').value;
}

function item(){
	document.getElementById('iframe').src = 'https://krunker.io/social.html?p=itemsales&i=' + document.getElementById('itemInput').value;
}
function join(){
	document.getElementById('iframe').src = 'https://krunker.io/?game=' + document.getElementById('joinInput').value;
}

function viewer(){
	document.getElementById('iframe').src = 'https://krunker.io/viewer.html';
}

function editor(){
	document.getElementById('iframe').src = 'https://krunker.io/editor.html';
}

function clan(){
	document.getElementById('iframe').src = 'https://krunker.io/social.html?p=clan&q=' + document.getElementById('clanInput').value;
}
