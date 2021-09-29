window.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp(){
	doEventBindings();
}

function changeProgress(){
	const unitsScrollFromTop = document.body.scrollTop;
	const height = document.body.scrollHeight - document.body.clientHeight;
	const percentageScrolled = (unitsScrollFromTop / height) * 100;
	document.querySelector('#bar').style.width = `${percentageScrolled}%`;
}

function doEventBindings(){
	window.addEventListener('scroll', changeProgress);
}