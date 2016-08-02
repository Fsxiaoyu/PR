var allwrap = document.getElementsByClassName("allwrap");
var skilltopimg = document.getElementsByClassName("skilltopimg");
var skillb = document.getElementsByClassName("skillb");
var skilljsword = document.getElementsByClassName("skilljsword");
var worksbutton = document.getElementsByClassName("worksbutton");
var worksimg = document.getElementsByClassName("worksimg");

function resize() {
	var seeW = window.innerWidth;
	var seeH = window.innerHeight;
	for(var i = 0; i < allwrap.length; i++) {
		allwrap[i].style.width = seeW + "px";
		allwrap[i].style.height = seeH + "px";
	}
}
resize();
window.onresize = resize;

function skill(obj1, obj2, obj3) {
	obj1.onclick = function() {
		for(var i = 0; i < skillb.length; i++) {
			skillb[i].style.transform = "rotateZ(0deg)";
			skilljsword[i].style.height = 0;
			skilljsword[i].style.display = "none";
		}
		obj3.style.display = "block";
		obj2.style.transform = "rotateZ(180deg)";
		obj3.style.height = "100%";
	}
}
skill(skilltopimg[0], skillb[0], skilljsword[0]);
skill(skilltopimg[1], skillb[1], skilljsword[1]);
skill(skilltopimg[2], skillb[2], skilljsword[2]);
skill(skilltopimg[3], skillb[3], skilljsword[3]);

function big(obj, attr) {
	obj.onmouseover = function() {
		obj.className = attr;
	}
	obj.onmouseleave = function() {
		obj.className = "skilltopimg";
	}
}
big(skilltopimg[0], "skilltopimg animated rubberBand");
big(skilltopimg[1], "skilltopimg animated pulse");
big(skilltopimg[2], "skilltopimg animated flip");
big(skilltopimg[3], "skilltopimg animated rotateIn");
var mySwiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	slidesPerView: 3,
	nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    scrollbar: '.swiper-scrollbar',
	centeredSlides: true,
	coverflow: {
		rotate: 30,
		stretch: 10,
		depth: 60,
		modifier: 2,
		slideShadows: true
	}
})


function down(obj01, obj02) {
	obj02.onmouseenter = function() {
		var index = 100;
		obj01.style.display = "block";
		var time = setInterval(function() {
			index -= 2;
			if(index <= 0) {
				index = 0;
				clearInterval(time);
			}
			obj01.style.bottom = index + "%";
		}, 10);
	}
}
down(worksbutton[0], worksimg[0]);
down(worksbutton[1], worksimg[1]);

function up(obj01, obj02) {
	obj01.onmouseleave = function(){
		var index1 = 0;
		var time = setInterval(function() {
			index1 += 2;
			if(index1 >= 100) {
				index1 = 100;
				obj01.style.display = "none";
				clearInterval(time);
			}
			obj01.style.bottom = index1 + "%";
		}, 10)
	}
}
up(worksbutton[0], worksimg[0]);
up(worksbutton[1], worksimg[1]);