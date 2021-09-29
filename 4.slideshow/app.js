window.addEventListener('DOMContentLoaded', initializeApp)

function initializeApp(){
 	const slideshow = new SlideShow(document.querySelector('.slideshow'));
 	slideshow.doEventBindings();
}

class SlideShow {
	constructor(slideshow) {
		this.slideshow = slideshow;
		this.slides = slideshow.querySelector('.slides');
		this.previousButton = slideshow.nextElementSibling.querySelector('#prev');
		this.nextButton = slideshow.nextElementSibling.querySelector('#next');
		this.currentSlide = this.slideshow.querySelector('.current') || this.slides.firstElementChild ;
		this.previousSlide = this.currentSlide.previousElementSibling || this.slides.lastElementChild;
		this.nextSlide = this.currentSlide.nextElementSibling || this.slides.firstElementChild;
		this.currentSlide.classList.add('current');
		this.previousSlide.classList.add('previous');
		this.nextSlide.classList.add('next');
	}

	switchSlide(direction){
		const classes = ['previous', 'current', 'next'];
		this.previousSlide.classList.remove(...classes);
		this.currentSlide.classList.remove(...classes);
		this.nextSlide.classList.remove(...classes);
		if (direction === 0) {
			this.previousSlide = this.previousSlide.previousElementSibling || this.slides.lastElementChild;
			this.currentSlide = this.previousSlide;
			this.nextSlide = this.currentSlide;
		} else {
			this.previousSlide = this.currentSlide;
			this.currentSlide = this.nextSlide;
			this.nextSlide = this.nextSlide.nextElementSibling || this.slides.firstElementChild;
		}
		this.previousSlide.classList.add('previous');
		this.currentSlide.classList.add('current');
		this.nextSlide.classList.add('next');
	}

	handleKeyUp(event) {
		if (event.key === 'ArrowRight') return this.switchSlide(1);
		if (event.key === 'ArrowLeft') return this.switchSlide(0);
	}

	doEventBindings(){
		window.addEventListener('keyup', this.handleKeyUp.bind(this));
		this.previousButton.addEventListener('click', () => this.switchSlide(0));
		this.nextButton.addEventListener('click',() => this.switchSlide(1))
	}
}