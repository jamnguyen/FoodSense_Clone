var slideIndex = 0;
var tick = 0;
var isPaused = false;
var slides = document.getElementsByClassName('slide');
var slideNavItems = document.getElementsByClassName("slide-nav-item");
var mainLoop;

slideInit();
mainLoop = setInterval(updateSlides, 1);

function updateSlides() {
	
	//Increasing timer
	if(!isPaused) {
		tick++;
	}
	
	//Change slide
	if(tick >= 1000) {
		slideIndex++;
		tick = 0;
	}
	
	if(slideIndex >= slides.length) {
		slideIndex = 0;
	}
	
	for(let i=0; i<slides.length; i++) {
		if(i!=slideIndex) {
//			slides[i].style.visibility = "hidden";
			slides[i].style.display = "none";
//			slides[i].style.opacity = "0";
			slideNavItems[i].classList.remove('slide-nav-cur-hl');
			slideNavItems[i].classList.add('slide-nav-cur');
		}
		else {
//			slides[i].style.visibility = "visible";
			slides[i].style.display = "block";
//			slides[i].style.opacity = "1.0";
			slideNavItems[i].classList.remove('slide-nav-cur');
			slideNavItems[i].classList.add('slide-nav-cur-hl');
		}
	}
}

function slideInit() {
	for(let i=0; i<slides.length; i++) {
		slides[i].onmouseover = function() {
			isPaused = true;
		}
		
		slides[i].onmouseout = function() {
			isPaused = false;
		}
		
		slideNavItems[i].onclick = function() {
			slideIndex = parseInt(slideNavItems[i].getAttribute('value'));
			tick = 0;
		}
	}
}
