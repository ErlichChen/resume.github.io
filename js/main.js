(function(global){
    'use strict';

		function eventHandler(event) {
			switch(event.type) {
				case 'click':
					handleClick(event.target)
				break
				default:
				break
			}
		}

		function handleClick(target) {
			switch(target.className) {
				case 'photo':
				console.log(target.className);
				break;
				case 'arrow-right':

				break;
				case 'arrow-down':

				break;
			}
		}

		function handleRightArr() {

		}

		function handleDownArr() {
			console.log(target.className);
		}


		document.querySelector('.photo-btn').addEventListener('click', eventHandler, false);
		var arrow_right_btn = document.querySelector('.arrow-right-btn')
		arrow_right_btn.addEventListener('click', eventHandler, false);
		document.querySelector('.arrow-down-btn').addEventListener('click', eventHandler, false);

})(window)