'use strict';

let typeS = 0;
let typeW = 0;
let typeN = 0;

const vh = window.innerHeight;
const vw = window.innerWidth;
const li = document.querySelectorAll('.p_checker__btn li');

window.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.l_checker__sec').forEach(item => {
		item.style.height = vh + "px";
	})
});

function no_scroll() {
    // PCでのスクロール禁止
    document.addEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止
    document.addEventListener("touchmove", scroll_control, { passive: false });
}
function scroll_control(event) {
    event.preventDefault();
}
no_scroll();


li.forEach(item => {
	item.addEventListener('click', () => {
        ganimation(); 
		checkType(item);
		window.scrollBy(0 , vh);
	});
	item.addEventListener('mouseover', () => {
		console.log(item.dataset.type);
	});
});

function checkType(item) {
	switch (item.dataset.type) {
		case 's':
			typeS += Number(item.dataset.point);
			break;
		case 'w':
			typeW += Number(item.dataset.point);
			break;
		case 'n':
			typeN += Number(item.dataset.point);
			break;
	}
	console.log(typeS);
	console.log(typeW);
	console.log(typeN);
}

function ganimation() {
    document.querySelector('.p_checker__frontg').classList.add('active');
    setTimeout(() => {
        document.querySelector('.p_checker__frontg').classList.remove('active');
    }, 500);
}

document.querySelector('.p_checker__result-btn').addEventListener('click', () => {
	checkTriple();
	checkdouble();
	checkSingle();
});

function checkTriple() {
	const randomNumT = Math.floor(Math.random() *3);
	if(typeS === typeW && typeS === typeN && typeW === typeN) {
		switch (randomNumT) {
			case 0:
				location.href = '../checker/typeS.html';
				break;
			case 1:
				location.href = '../checker/typeW.html';
				break;	
			case 2:
				location.href = '../checker/typeN.html';
				break;
		}
	}
	return;
}

function checkdouble() {
	const randomNumD = Math.floor(Math.random() *2);
	if(typeS === typeW && typeS !== typeN && typeW !== typeN) {
		switch (randomNumD) {
			case 0:
				location.href = '../checker/typeS.html';
				break;
			case 1:
                location.href = '../checker/typeW.html';
				break;
		}
	} else if(typeS === typeN && typeS !== typeW && typeW !== typeN) {
		switch (randomNumD) {
			case 0:
				location.href = '../checker/typeS.html';
				break;
			case 1:
				location.href = '../checker/typeN.html';
				break;
		}
	} else if(typeW === typeN && typeS !== typeW && typeW !== typeS) {
		switch (randomNumD) {
			case 0:
				location.href = '../checker/typeW.html';
				break;
			case 1:
				location.href = '../checker/typeN.html';
				break;
		}
	}
	return;
}

function checkSingle() {
	if(typeS > typeW && typeS > typeN) {
		location.href = "../checker/typeS.html";
	} else if(typeW > typeS && typeW > typeN) {
		location.href = "../checker/typeW.html";
	} else if(typeN > typeS && typeN > typeW) {
		location.href = "../checker/typeN.html";
	}}