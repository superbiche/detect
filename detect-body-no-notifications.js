// Timing detection part 2 (needs other part in to <head>)
if (perf) {
	if (total_time <= 700 && total_time > 1) {
		// now pixel-ratio detecting
		var pxr = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
		pxr=pxr.toFixed(2);
		// ... and screen width detect
		var w = window.innerWidth;

		if (pxr >= 2 | w >= 640) {
			// Everything OK ? Go Go Go !
				good();
		}
	}
}

function good() {
	var imgs = document.getElementsByTagName("img");
	for(var index in imgs) {
		var src = imgs[index].src;
		if(src != undefined)
		imgs[index].src = src.replace("small", "big");
	}
}