// Сніпет для header - при прокрутці зявляється/зникає фон
(function () {
	let header = document.querySelector('.header');
	let header__wraper = document.querySelector('.header__wraper');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header__active')
			header__wraper.classList.add('header__active__padding')
		} else {
			header.classList.remove('header__active')
			header__wraper.classList.remove('header__active__padding')
		}
	}
}());

