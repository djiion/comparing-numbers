const form = document.querySelector('.form')



form.addEventListener('submit', e => {
	e.preventDefault()
    
	const firstValue = Number(document.querySelector('.first-input').value)
	const secondValue = Number(document.querySelector('.second-input').value)

	if (firstValue > secondValue) {
		console.log("В данном случае больше:",firstValue)
	}else {
		console.log("В данном случае больше:",secondValue)
	}
})