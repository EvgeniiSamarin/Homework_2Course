document.addEventListener('DOMContentLoaded', () => {
	document.onmousemove = function(event) {
		let x = event.x - 133
		let y = event.y - 25
		console.log(x + ' ' + y)
		//if((x < 20 && x > -20) && (y < 5 && y > -35 )) {
		//	let elem = document.getElementById('.pupil-left')
		//	elem.style.top = y + 'px'
		//	elem.style.left = x + 'px'
		//}
		document.querySelector('.eye--left').style.transform = 'rotate(' + 57.2958 * arcctg(x, y) + 'deg)';
		document.querySelector('.eye--right').style.transform = 'rotate(' + 57.2958 * arcctg(x - 25, y) + 'deg)';
		function arcctg(x , y) {
			if (y > 0) return Math.PI / 2 - Math.atan(x / y)
			if(x < 0 && y < 0) return Math.PI + Math.atan(y / x)
			if(x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y))
		} 
	}

	
})