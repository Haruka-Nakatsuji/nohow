'use strict';

let typeS = 0;
let typeW = 0;
let typeN = 0;
let saveData = [];
let result = {};

const vh = window.innerHeight;
const vw = window.innerWidth;
const li = document.querySelectorAll('.p_checker__btn li');
const goPrev = document.querySelectorAll('.p_checker__prev');

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

///////////////////////////////////////////////////////

li.forEach(item => {
	item.addEventListener('click', () => {
        ganimation(); 
		checkType(item);
		window.scrollBy(0 , vh);
	});
	// item.addEventListener('mouseover', () => {
	// 	console.log(item.dataset.type);
	// });
});

function ganimation() {
    document.querySelector('.p_checker__frontg').classList.add('active');
    setTimeout(() => {
        document.querySelector('.p_checker__frontg').classList.remove('active');
    }, 500);
}

function checkType(item) {
	saveData.push(item.dataset.type);
	console.log(saveData);
}

goPrev.forEach(item => {
	item.addEventListener('click', () => {
		ganimation();
		saveData.pop();
		window.scrollBy(0 , -vh);
	});
});

// result ///////////////////////////////////////////////////

document.querySelector('.l_checker__result').addEventListener('click', () => {
	checkResult();

	if (result['s']) {
		for (let i = 0; i < result.s.length; i++) {
			typeS++;
		}
	}

	if (result['w']) {
		for (let i = 0; i < result.w.length; i++) {
			typeW++;
		}
	}

	if (result['n']) {
		for (let i = 0; i < result.n.length; i++) {
			typeN++;
		}
	}

	console.log([typeS,typeW,typeN]);
	checkTriple();
	checkdouble();
	checkSingle();
});

function checkResult() {
	for(let key of saveData) {
		result[key] = saveData.filter(x => {return x == key});
		//nの場合 result['n'] = saveData.filter((n) => {return n == key});
		//       =result.n。この場合はStringの変数なので''いらない。"n"と合っているもののみ抽出(x)
	}
	return result;
}



// random（無理やり） //////////////////////////////////////

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


// 結果を見る /////////////////////////////////////

if(navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
	document.querySelector('.p_checker__go-result--anime').textContent = 'TAP';
}