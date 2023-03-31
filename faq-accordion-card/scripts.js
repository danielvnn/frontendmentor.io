let answer = document.getElementsByClassName('faq-items__answer')
let question = document.getElementsByClassName('faq-items__question')

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener(
    'click',
    (function (index) {
      return function () {
        let active = document.getElementsByClassName('faq-items__question-h2')[
          index
        ]
        question[index].classList.toggle('rotate-icon')

        active.classList.toggle('active')
        let answerText = answer[index]
        if (answerText.style.display === 'block') {
          answerText.style.display = 'none'
        } else {
          answerText.style.display = 'block'
        }
      }
    })(i)
  )
}
