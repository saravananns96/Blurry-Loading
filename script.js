'use strict';

const loadtext=document.querySelector('.number');
const bg=document.querySelector('.bg');

let load=0;
let interval=setInterval(blur,20);

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function blur(){
	load++;

	
	if(load>99)
		clearInterval(interval);
	
		loadtext.textContent=`${load}%`;
		
		loadtext.style.opacity=scale(load,0,100,1,0);
		bg.style.filter=`blur(${scale(load,0,100,80,0)}px)`;
		
}

/* const num = 5;
console.log(scale(num, 0, 10, -50, 50)); // 0
console.log(scale(num, -20, 0, -100, 100)); // 150 */

//blur(0px);