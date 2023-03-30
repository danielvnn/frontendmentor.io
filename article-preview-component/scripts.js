const shareIcon = document.querySelector('.share__icon')
const shareBox = document.querySelector('.share__box')
const mainbox = document.querySelector('.article__author')
const avatar = document.querySelector('.article__author-avatar')
const details = document.querySelector('.article__details')

window.addEventListener('resize', function () {
	const width = window.innerWidth
	if (width < 576 && shareBox.style.display === 'flex') {
		mainbox.classList.remove('article__author')
		mainbox.classList.add('article__author--mobile')
		avatar.style.display = 'none'
		details.style.display = 'none'
	} else if (width >= 577 && details.style.display === 'none') {
		avatar.style.display = 'block'
		details.style.display = 'flex'
		mainbox.classList.add('article__author')
		mainbox.classList.remove('article__author--mobile')
	}
})

function getSize() {
	return screen.width
}

shareIcon.addEventListener('click', () => {
	let widthsize = getSize()

	if (shareBox.style.display === 'flex' && widthsize <= 576) {
		shareBox.style.display = ''
		avatar.style.display = 'block'
		details.style.display = 'flex'
		mainbox.classList.add('article__author')
		mainbox.classList.remove('article__author--mobile')
	} else if (shareBox.style.display === '' && widthsize < 576) {
		shareBox.style.display = 'flex'
		mainbox.classList.remove('article__author')
		mainbox.classList.add('article__author--mobile')
		avatar.style.display = 'none'
		details.style.display = 'none'
	} else if (shareBox.style.display === 'flex' && widthsize > 576) {
		shareBox.style.display = ''
	} else if (shareBox.style.display === '' && widthsize > 576) {
		shareBox.style.display = 'flex'
	}
})
