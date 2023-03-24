fetch('data.json')
	.then((response) => response.json())
	.then((data) => {
		summary = data
		summary.map((data) => {
			let body = document.getElementsByClassName('summary__body')[0]
			body.innerHTML += `<div class="summary__item summary__item--${data.category.toLowerCase()}">
            <div class="summary__item-name">
              <img
                src="${data.icon}"
                alt=""
                class="summary__item-icon"
              />
              <p class="summary__item-text">${data.category}</p>
            </div>
            <div class="summary__score">
              <p class="summary__score-value">
                <span class="summary__item-value--bold">
                ${data.score}
                </span> / 100
              </p>
            </div>
          </div>`
		})
	})
