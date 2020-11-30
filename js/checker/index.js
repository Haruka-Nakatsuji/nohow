'use strict';

let typeA = 0;
let typeI = 0;
let typeY = 0;

const vh = window.innerHeight;
const vw = window.innerWidth;
const li = document.querySelectorAll('.p_checker__btn li');

window.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.l_checker__sec').forEach(item => {
		item.style.height = vh + "px";
	})
	document.querySelector('.l_checker__info').style.height = vh + "px";
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
});

function checkType(item) {
	switch (item.dataset.type) {
		case 'a':
			typeA += Number(item.dataset.point);
			break;
		case 'i':
			typeI += Number(item.dataset.point);
			break;
		case 'y':
			typeY += Number(item.dataset.point);
			break;
	}
	console.log(typeA);
	console.log(typeI);
	console.log(typeY);
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
	if(typeA === typeI && typeA === typeY && typeI === typeY) {
		switch (randomNumT) {
			case 0:
				location.href = '../checker/typea.html';
				break;
			case 1:
				location.href = '../checker/typei.html';
				break;	
			case 2:
				location.href = '../checker/typey.html';
				break;
		}
	}
	return;
}

function checkdouble() {
	const randomNumD = Math.floor(Math.random() *2);
	if(typeA === typeI && typeA !== typeY && typeI !== typeY) {
		switch (randomNumD) {
			case 0:
				location.href = '../checker/typea.html';
				break;
			case 1:
                location.href = '../checker/typei.html';
				break;
		}
	} else if(typeA === typeY && typeA !== typeI && typeI !== typeY) {
		switch (randomNumD) {
			case 0:
				location.href = '../checker/typea.html';
				break;
			case 1:
				location.href = '../checker/typey.html';
				break;
		}
	} else if(typeI === typeY && typeA !== typeI && typeI !== typeA) {
		switch (randomNumD) {
			case 0:
				location.href = '../checker/typei.html';
				break;
			case 1:
				location.href = '../checker/typey.html';
				break;
		}
	}
	return;
}

function checkSingle() {
	if(typeA > typeI && typeA > typeY) {
		location.href = "../checker/typea.html";
	} else if(typeI > typeA && typeI > typeY) {
		location.href = "../checker/typei.html";
	} else if(typeY > typeA && typeY > typeI) {
		location.href = "../checker/typey.html";
	}}