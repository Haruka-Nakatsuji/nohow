'use strict'

const ham = document.querySelector('.p_nav');

ham.addEventListener('click', () => {
	ham.classList.toggle('open');
	document.querySelectorAll('.p_nav__item').forEach(item => {
		item.classList.toggle('open');
	});
});

const hero = document.querySelector('.l_hero');
const sam = document.querySelector('.sam');
// const scrollcalc = innerHeight + 100;

window.addEventListener('scroll', () => {
	if(scrollY >= innerHeight) {
		ham.classList.add('change');
		document.querySelectorAll('.p_nav span').forEach(item => {
			item.classList.add('change');
		});
	} else {
		ham.classList.remove('change');
		document.querySelectorAll('.p_nav span').forEach(item => {
			item.classList.remove('change');
		});
	}
});

const vh = window.innerHeight;

window.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.l_hero').style.height = vh + 'px';
});