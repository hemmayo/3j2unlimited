$(document).ready(function () {

	var container = document.getElementById('js-photo-compare');
	var elipse = document.getElementById('js-elipse');
	var divider = document.getElementById('js-divider');
	var photo1 = document.getElementById('js-photo-1');
	var photo2 = document.getElementById('js-photo-2');
	var img1 = photo1.getElementsByTagName('img')[0];
	var img2 = photo2.getElementsByTagName('img')[0];

	// elipse.ontouchstart = elipse.onmousedown = function (e) {
	// 	document.ontouchmove = document.onmousemove = function (e) {
	// 		// if cursor does not go outside left or right site of container
	// 		if ((e.pageX < (container.offsetLeft + container.offsetWidth)) && (e.pageX > container.offsetLeft)) {
	// 			divider.style.left = (e.pageX - container.offsetLeft) + 'px';
	// 			photo1.style.width = (e.pageX - container.offsetLeft) + 'px';
	// 			img1.style.transform = 'scale(1.02)';
	// 			img2.style.transform = 'scale(1.02)';
	// 		}
	// 	}
	// };
	//
	// document.ontouchend = document.onmouseup = function () {
	// 	document.onmousemove = null;
	// 	img1.style.transform = 'scale(1)';
	// 	img2.style.transform = 'scale(1)';
	// };
	//
	// window.addEventListener("resize", ()=> {
	// 	divider.style.left = '50%';
	// 	photo1.style.width = '50%';
	// 	img1.style.transform = 'scale(1)';
	// 	img2.style.transform = 'scale(1)';
	// });

	// var container = document.getElementById('js-container');
	// var elipse = document.getElementById('js-elipse');
	// var divider = document.getElementById('js-divider');
	// var photo1 = document.getElementById('js-photo-1');
	// var photo2 = document.getElementById('js-photo-2');
	// var img1 = photo1.getElementsByTagName('img')[0];
	// var img2 = photo2.getElementsByTagName('img')[0];

	function moveDivider(x) {
		if ((x < (container.offsetLeft + container.offsetWidth)) && (x > container.offsetLeft)) {
			divider.style.left = (x - container.offsetLeft) + 'px';
			photo1.style.width = (x - container.offsetLeft) + 'px';
		}
	}

	function imgscale(b) {
		var s = b ? 'scale(1.02)' : 'scale(1)';
		img1.style.transform = s;
		img2.style.transform = s;
	}

	elipse.onmousedown = function (e) {
		imgscale(true);

		document.onmousemove = function (e) {
			moveDivider(e.clientX);
		};
	};

	elipse.ontouchstart = function (e) {
		document.ontouchmove = function (e) {
			moveDivider(e.touches[0].pageX);
		}
	};

	document.onmouseup = document.ontouchend = function () {
		document.onmousemove = null;
		document.ontouchmove = null;
		imgscale(false);
	};

	window.addEventListener("resize", function () {
		divider.style.left = '50%';
		photo1.style.width = '50%';
		img1.style.transform = 'scale(1)';
		img2.style.transform = 'scale(1)';
	});

}());




