window.addEventListener('DOMContentLoaded', () => {
	move()
function move() {
	let elem = document.getElementById('box')
	let top_pos = 0
	let right_pos = 0
	let left = 0
	let flag_down = true
	let flag_right = true
	let id = setInterval(frame, 10)
	function frame() {
		if(flag_down) {
			if(top_pos != 350) {
				top_pos++
			} else {
				flag_down = false
			}
		} else {
			if(top_pos != 0) {
				top_pos--
			} else {
				flag_down = true
			}
		}
		if(flag_right) {
			if(right_pos != 750) {
				right_pos ++
			} else {
				flag_right = false
			}
		} else {
			if(right_pos != 0) {
				right_pos--
			} else {
				flag_right = true
			}
		}
		elem.style.top = top_pos + 'px'
		elem.style.right = right_pos + 'px'
	}
}
})