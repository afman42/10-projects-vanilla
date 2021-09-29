window.addEventListener('DOMContentLoaded',initializeApp);


const h6 = document.querySelector('h6');


function initializeApp(){
	popularFontSizesDropdown();
	doEventBindings();
}


function popularFontSizesDropdown(){
	const select = document.querySelector('[name="fontsize"]');
	for (var i = 0; i < 100; i += 2) {
		const option = document.createElement('option');
		option.innerHTML = i;
		select.appendChild(option);
	}
}

function changeFontSize (event) {
	h6.style.fontSize = `${event.target.value}px`;
}

function applyOrRemoveClass(inputClass,that) { 
	if (h6.classList.contains(inputClass)) {
		h6.classList.remove(inputClass)
		that.style.backgroundColor = 'red';
	} else {
		h6.classList.add(inputClass);
		that.style.backgroundColor = 'green';
	}
}

function makeTextBold(){
	applyOrRemoveClass('bold',this);
}

function makeTextItaliced(){
	applyOrRemoveClass('italic',this);
}
function makeTextUnderline(){
	applyOrRemoveClass('underline',this);
}
function makeTextReverse(){
	applyOrRemoveClass('reverse',this);
	h6.innerText = Array.from(h6.innerText).reverse().join('');
}

function doEventBindings(){
	document.querySelector('[name="fontsize"]').addEventListener('change',changeFontSize);
	document.querySelector('#bold').addEventListener('click',makeTextBold);
	document.querySelector('#italicized').addEventListener('click',makeTextItaliced);
	document.querySelector('#underline').addEventListener('click',makeTextUnderline);
	document.querySelector('#reverse').addEventListener('click',makeTextReverse);
}