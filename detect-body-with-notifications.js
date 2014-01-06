// Timing detection part 2 (needs other part in to <head>)
if (perf) {
	if (total_time <= 700) {
		document.getElementById('connexion').innerHTML = '<p class="deco good">Votre connexion est bonne (accès en : '+total_time+'ms)</p>';

		// now pixel-ratio detecting
		var pxr = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
		pxr=pxr.toFixed(2);

		// ... and screen width detect
		var w = window.innerWidth;

		document.getElementById('pxratio').innerHTML = '<p class="deco">pixel-ratio : '+pxr+'</p>';
		document.getElementById('viewport').innerHTML = '<p class="deco">largeur de fenêtre : '+w+'px</p>';

		if (pxr >= 2 | w >= 640) {
			// Everything OK ? Go Go Go !
				document.getElementById('bingo').innerHTML = '<p class="deco good">Image chargée : 600px ! YAY </p>';
				good();
		}
	} else if (total_time > 700) {
		// when bad connexion
		document.getElementById('connexion').innerHTML = '<p class="deco bad">Votre connexion est mauvaise (accès en : '+total_time+'ms)</p>';
		// when bug
		if (total_time < 1) {document.getElementById('connexion').innerHTML = '<p class="deco bad">Votre connexion semble faussée (accès en : '+total_time+'ms)</p>';}
	}
} else {
	// when API not supported
	document.getElementById('connexion').innerHTML = '<p class="deco bad">API Navigation Timing non supportée</p>';
}

function good() {
	var imgs = document.getElementsByTagName("img");
	for(var index in imgs) {
		var src = imgs[index].src;
		if(src != undefined)
		imgs[index].src = src.replace("small", "big");
	}
}