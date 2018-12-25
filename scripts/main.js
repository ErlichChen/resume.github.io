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
				console.log(target.className);
				break;
				case 'arrow-down':
				console.log(target.className);
				break;
			}

		}


		document.querySelector('.photo-btn').addEventListener('click', eventHandler, false);
		document.querySelector('.arrow-right-btn').addEventListener('click', eventHandler, false);
		document.querySelector('.arrow-down-btn').addEventListener('click', eventHandler, false);

})(window)