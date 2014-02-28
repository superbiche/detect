// Timing detection part 2 (needs other part in to <head>)
if (perf) {
	if (total_time <= 700) {
		// now pixel density detecting
		if (window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)").matches) {
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