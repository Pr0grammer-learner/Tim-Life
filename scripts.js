let hearts = +localStorage.getItem('hearts')
let vital = +localStorage.getItem('vital')
let joy = +localStorage.getItem('joy')
let money = +localStorage.getItem('money')
let level = +localStorage.getItem('level')
const gameEvents = require('./Database/GameEvents')

if(hearts === 0||hearts === null||hearts === 'undefined'){
	localStorage.setItem('hearts', 4)
	hearts = +localStorage.getItem('hearts')
} 

if(vital === 0||vital === null||vital === 'undefined'){
	localStorage.setItem('vital', 50)
	vital = +localStorage.getItem('vital')
}

if(joy === 0||joy === null||joy === 'undefined'){
	localStorage.setItem('joy', 50)
	joy = +localStorage.getItem('joy')
}

if(money === 0||money === null||money === 'undefined'){
	localStorage.setItem('money', 0)
	money = +localStorage.getItem('money')
}


function getRand(min, max) { return Math.floor(Math.random() * (max - min) + min) }

let character = document.querySelector('#character')
newCharacter = () =>{

	htmlHearts = '';

	for( i = 0; i < hearts; i++ ) htmlHearts += `<span class="heart"></span>`;

	character.innerHTML = "";
	character.insertAdjacentHTML("afterbegin", `
		<h1>Уровень: ${level}<h1>

		Здоровье: <div id="health">${htmlHearts}</div>
		Еда и вода: ${vital}%
		Развлечения: ${joy}%
		Деньги: ${money}
	`)
}


window.onload = () => newCharacter()

checkResolutionSecond = (resolutionSecond) =>{return (resolutionSecond !== null) ? `<div class="resolution third" id="os">${resolutionSecond}</div>` : ``}
checkResolutionThird = (resolutionThird) =>{return (resolutionThird !== null) ? `<div class="resolution third" id="ot">${resolutionThird}</div>` : ``}

html = (Newspaper, src, strangeLorem, resolutionFirst, resolutionSecond = null, resolutionThird = null) =>{

	document.querySelector('#buttonNewMove').onclick = null;

	const newF = document.querySelector('#event')

	newF.innerHTML += `<div class="new first"></div>`

	newF.style.width = 700+'px'

	newF.style.height = 'auto'

	newF.style.backgroundColor = '#D5E29D'

	document.querySelector('.new.first').insertAdjacentHTML('beforeend',`
		<header class="header">${Newspaper}</header>
		<center><img class="img" src="${src}" alt=""></center>
		<div class="Lorem first">${strangeLorem}</div>
		<div id="resolutions">
			<div class="resolution first" id="oo">${resolutionFirst}</div>
			${checkResolutionSecond(resolutionSecond)}
			${checkResolutionThird(resolutionThird)}
		<div>
	`)
}

change = () =>{
	const newF = document.querySelector('#event');
	newF.innerHTML = null;
	newF.style.width = 0;
	newF.style.height = 0;

	document.querySelector('#buttonNewMove').onclick = function() {

		if(vital === 0 || joy === 0 || hearts === 0){

			localStorage.setItem('level', 0)
			localStorage.setItem('vital', 50)
			localStorage.setItem('hearts', 4)
			localStorage.setItem('joy', 50)
			localStorage.setItem('money', 0)

			html(
				'Ты сдох',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bZgDCFcLNCetK5oTqW49yI0HytjgBSdvFA&usqp=CAU', 
				'С добрым утром', 
				'Ок', 
				'Че',
				'Так стоп!'
			)
			document.querySelector('#oo').onclick = () => { window.location.reload() }
			document.querySelector('#os').onclick = () => { window.location.reload() }
			document.querySelector('#ot').onclick = () => { window.location.reload() }

			
		} else {
			gameEvents[ randoM(gameEvents.length) ]()
			level++
			localStorage.setItem('level', level)
		} 

	}
}

also = () =>{
	newCharacter() 
	change()
}

randoM = (max) => Math.floor(Math.random() * max)

document.querySelector('#buttonNewMove').onclick = function() {

    gameEvents[ randoM( gameEvents.length) ]()

    level++
	localStorage.setItem('level', level)
}