window.addEventListener('DOMContentLoaded',initializeApp);

function initializeApp() {
	const modal = new Modal(document.querySelector('.modal'));
	modal.init();
}

class Modal {
	constructor(modal) {
		this.modalWrapper = modal.parentElement;
		this.openButton = modal.parentElement.previousElementSibling;
		this.closeButton = modal.firstElementChild;
		this.submitButton = modal.querySelector('#modal-submit');
	}

	init(){
		this.doEventBindings();
	}

	showModal(){
		console.log('opening the modal');
		this.modalWrapper.style.display = 'block';
	}

	closeModal(){
		console.log('closing the modal ...');
		this.modalWrapper.style.display = 'none';
	}

	doEventBindings(){
		this.openButton.addEventListener('click', this.showModal.bind(this));
		this.closeButton.addEventListener('click', this.closeModal.bind(this));
		this.submitButton.addEventListener('click',this.closeModal.bind(this));
		window.addEventListener('click', e => {
			if (e.target == this.modalWrapper) {
				this.closeModal();
			} else{
				return false;
			}
		})
		window.addEventListener('keydown', e => {
			if (e.key == 'Escape') {
				this.closeModal();
			}
		})
	}
}