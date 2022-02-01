let container = document.querySelector('.game--container')
let cell = document.querySelectorAll('.cell')
let restart_button = document.querySelector('.game--restart')
const alphabet = "x0"

for (let el of cell) {
    el.addEventListener('click', (event) => {
        event.preventDefault()
        el.textContent = 'x'
        const number = Math.floor(Math.random() * 9) + 1
        if (cell[number].textContent != 'x' && cell[number].textContent != 0) {
            cell[number].textContent = 0
        } else if (cell[number].textContent != 0 && cell[number].textContent != 'x') {
            cell[number].textContent = 0
        } else cell[number].textContent = 0
    })
}

restart_button.addEventListener(('click'), () => {
    window.location.reload();
}) 