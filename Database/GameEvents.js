module.exports = [
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
			if(hearts > 4)joy = 4
			if(hearts < 0)hearts = 0
			localStorage.setItem('hearts', hearts)

			joy += getRand(min1, max1)
			if(joy > 100)joy = 100
			if(joy < 0)joy = 0

			localStorage.setItem('joy', joy)

			vital += getRand(min2, max2)
			if(vital>100)vital = 100
			if(vital < 0)vital = 0

			localStorage.setItem('vital', vital)

			also()
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
			if(joy > 100)joy = 100
			if(joy < 0)joy = 0

			localStorage.setItem('joy', joy)

			money += coast
			if(money < 0)money = 0;
			localStorage.setItem('money', money)

			also()
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
			if(money < 0)money = 0;
			localStorage.setItem('money', money)

			also()
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
			if(joy > 100)joy = 100
			if(joy < 0)joy = 0

			localStorage.setItem('joy', joy)

			vital += getRand(min2, max2)
			if(vital>100)vital = 100
			if(vital < 0)vital = 0

			localStorage.setItem('vital', vital)

			also()
		}
		document.querySelector('#oo').onclick = () => RepetitionOfAnswers(5,30,-15,-5)
		document.querySelector('#os').onclick = () => RepetitionOfAnswers(-20,-1,1,10)
	},
]
