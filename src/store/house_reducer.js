let init_state = {
	streliza: [
		{ id: 1, street: 'ул. Гагарина', num: '26' },
		{ id: 2, street: 'ул. Гагарина', num: '27' },
		{ id: 3, street: 'ул. Гагарина', num: '29' },
		{ id: 4, street: 'ул. Космонавтов', num: '3' },
		{ id: 5, street: 'ул. Космонавтов', num: '5' },
		{ id: 6, street: 'ул. Космонавтов', num: '7' },
		{ id: 7, street: 'ул. Космонавтов', num: '9' },
		{ id: 8, street: 'пер. 1й Стрелицкий', num: '2' },
		{ id: 9, street: 'ул. Победа', num: '12' },
		{ id: 10, street: 'ул. Победа', num: '18а' }
	],
	voronezh: [
		{ id: 1, street: 'ул. Берёзовая роща', num: '56а' }
	],
	semiluki: [
		{ id: 1, street: 'ул. Гагарина', num: '36' },
		{ id: 2, street: '25 лет Октября', num: '122' },
		{ id: 1, street: 'ул. Крупской', num: '7' }
	]
}

let house_reduce = (state = init_state, action) => {
	return state;
}

export default house_reduce