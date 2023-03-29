const shareIcon = document.querySelector('.share__icon')
const shareBox = document.querySelector('.share__box')

shareIcon.addEventListener('click', () => {
	if (shareBox.style.display === 'flex') {
		shareBox.style.display = 'none'
	} else {
		shareBox.style.display = 'flex'
	}
})
