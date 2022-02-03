let hearts = +localStorage.getItem('hearts')
let vital = +localStorage.getItem('vital')
let joy = +localStorage.getItem('joy')
let money = +localStorage.getItem('money')


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

function getRand(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

let character = document.querySelector('#character')
newCharacter = () =>{

	htmlHearts = '';

	for(i=0;i<hearts+1;i++) htmlHearts += `<span class="heart"></span>`

	character.innerHTML = "";
	character.insertAdjacentHTML("afterbegin", `
		<h1>Уровень: 1<h1>

		Здоровье:

		<div id="health">
			${htmlHearts}
		</div>

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

		gameEvents[ randoM( gameEvents.length) ]()

		this.innerHTML++

	}
}



const gameEvents = [
	Pivo = () =>{		
		html(
			'По пиву!',
			'https://avatars.mds.yandex.net/get-zen_doc/244664/pub_5d1dbd3787599000ac3f92e7_5d1dbe06ebe74c00adc055d7/scale_1200', 
			'Старый предлагает выпить пиво!', 
			'Cогласиться', 
			'Отказаться', 
		)
		RepetitionOfAnswers = (coast, min1, max1, min2, max2) =>{

			hearts -= coast
			localStorage.setItem('hearts', hearts)

			joy += getRand(min1, max1)
			localStorage.setItem('joy', hearts)

			vital += getRand(min2, max2)
			localStorage.setItem('vital', 50)

			newCharacter()
			change()
		}
		document.querySelector('#oo').onclick = () => RepetitionOfAnswers(1, 5, 20, 1, 7);
		document.querySelector('#os').onclick = () => RepetitionOfAnswers(0, -15, -5, -10, -3);
	},
	Sessia = () =>{		
		html(
			'Сессия',
			'https://mywishboard.com/thumbs/wish/q/s/l/1020x0_qzfkhaovbshhlrbk_jpg_6876.jpg', 
			`Сессия вроде как важное событие...`, 
			'Упорно готовиться', 
			'Забить', 
		)
		RepetitionOfAnswers = (min, max, coast) =>{

			joy += getRand(min, max)
			localStorage.setItem('money', joy)

			money += coast
			localStorage.setItem('money', money)

			newCharacter()
			change()
		}
		document.querySelector('#oo').onclick = () => RepetitionOfAnswers(-25,-10,20)
		document.querySelector('#os').onclick = () => RepetitionOfAnswers(5,15,-20)
	},
	Poltos = () =>{		

		html(
			'Опа полтос!',
			'https://bonimira.ru/images/goods/strany-sssr/rossia/1132456fb9b3ee0b862e47b5d4952019.jpg', 
			`Деньги же на дороге не валяются?`, 
			'Подобрать',
			'Не подбирать'
		)
		RepetitionOfAnswers = (coast) =>{

			money += coast
			localStorage.setItem('money', money)
			change()
			newCharacter()
		}
		document.querySelector('#oo').onclick = () => RepetitionOfAnswers(50)
		document.querySelector('#os').onclick = () => RepetitionOfAnswers(0)
	},
	HS = () =>{		

		html(
			'ХС',
			'https://pbs.twimg.com/media/CukU29lW8AAJ7Md.jpg:large', 
			`Играть или не играть?`, 
			'ИГРАТЬ ИГРАТЬ ИГРАТЬ',
			'Да не'
		)
		RepetitionOfAnswers = (min1, max1, min2, max2) =>{

			joy += getRand(min1, max1)
			localStorage.setItem('money', joy)

			vital += getRand(min2, max2)
			localStorage.setItem('vital', 50)

			change()
			newCharacter()
		}
		document.querySelector('#oo').onclick = () => RepetitionOfAnswers(5,30,-15,-5)
		document.querySelector('#os').onclick = () => RepetitionOfAnswers(-20,-1,1,10)
	},
]

randoM = (max) => Math.floor(Math.random() * max)

document.querySelector('#buttonNewMove').onclick = function() {

    gameEvents[ randoM( gameEvents.length) ]()

    this.innerHTML++
}