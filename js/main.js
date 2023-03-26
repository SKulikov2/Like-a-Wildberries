const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// Добавляем функционал для Cart

// DOM Элементы

const buttonCart = document.querySelector('.button-text');
const modalCart = document.querySelector('#modal-cart')
const buttonModalClose = document.querySelector('.modal-close')


// создаем функцию для - Открытия модального окна по нажатию на кнопку

const openModal = () => {
	modalCart.classList.add('show');
}

/* создаем функцию для - Закрытия модального окна по нажатию на X и 
   на любое место кроме самого модального окна */

const closeModal = (event) => {
	const target = event.target;
	if (target.classList.contains('overlay') || 
		target.classList.contains('modal-close')) {
		
			modalCart.classList.remove('show');
	} 
}

// Вызов функций
buttonCart.addEventListener('click', openModal)		
modalCart.addEventListener('click', closeModal) 


// scroll smooth

// DOM элемент
 
const scrollLinks = document.querySelectorAll('a.scroll-link')

for (let item of scrollLinks) {
	item.addEventListener('click', (event) => {
		event.preventDefault()

		const ID = item.getAttribute('href');
		
		document.querySelector(ID).scrollIntoView ({
			behavior: 'smooth',
			block: 'start',
		});
	})
}