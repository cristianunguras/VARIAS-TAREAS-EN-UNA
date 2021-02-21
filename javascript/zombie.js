// VARIABLES / FUNCIONES
let x = 0,
    y = 0

// mover zombie con las flechas 
const zombie_flechas = document.getElementById('zombie'),
    up = () => {
        //comprobamos margen superior
        if (document.getElementById('zombie').getBoundingClientRect().top >= 50) {
            zombie.style.transform = `translate(${x}px,${y -= 50}px) rotate(-90deg)`
        } else {
            alert('No puedes seguir hacia arriba!!!')
        }

    },
    down = () => {
        //comprobamos margen inferior
        if (document.getElementById('zombie').getBoundingClientRect().bottom <= (innerHeight - 50)) {
            zombie.style.transform = `translate(${x}px,${y += 50}px) rotate(90deg)`
        } else {
            alert('No puedes seguir hacia abajo!!!')
        }

    },
    left = () => {
        //comprobamos margen izquierdo
        if (document.getElementById('zombie').getBoundingClientRect().left >= 50) {
            zombie.style.transform = `translate(${x -= 50}px,${y}px) rotate(-180deg)`
        } else {
            alert('No puedes seguir hacia la izquierda!!!')
        }

    },
    right = () => {
        //comprobamos margen derecho
        if (document.getElementById('zombie').getBoundingClientRect().right <= (innerWidth - 50)) {
            zombie.style.transform = `translate(${x += 50}px,${y}px)`
        } else {
            alert('No puedes seguir hacia la derecha!!!')
        }

    }

// escuchar y mover zombie con las flechas
document.addEventListener('keyup', evento => {
    switch (evento.key) {
        case 'ArrowLeft':
            left()
            break
        case 'ArrowUp':
            up()
            break
        case 'ArrowDown':
            down()
            break
        case 'ArrowRight':
            right()
            break
    }
})