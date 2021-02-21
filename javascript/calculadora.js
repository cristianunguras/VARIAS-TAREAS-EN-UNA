let numero_actual = "",
    ultimo = "",
    resultado = ""


//verificar cuando se presiona alguna cifra o punto y mostrarlo en pantalla
for (i = 0; i <= 9; i++) {
    const boton_cifra = document.getElementById(`cifra${i}`)
    boton_cifra.addEventListener('click', () => {
        let display = document.getElementById('display')
        display.value = display.value + boton_cifra.value
        numero_actual = numero_actual + boton_cifra.value
    })
}

//verificar cuando se presiona algun signo y mostrarlo en pantalla
//si cumple la condicion de no tener delante signos
for (i = 1; i <= 4; i++) {
    const boton_signo = document.getElementById(`signo${i}`)
    boton_signo.addEventListener('click', () => {
        let display = document.getElementById('display')
        ultimo = display.value.charAt(display.value.length - 1)
        if ((ultimo !== "") && (ultimo !== "/") && (ultimo !== "*") && (ultimo !== "-") && (ultimo !== "+") && (ultimo !== ".")) {
            switch (boton_signo.value) {
                case "+":
                    resultado = resultado + numero_actual + '+'
                    numero_actual = ""
                    break
                case "-":
                    resultado = resultado + numero_actual + '-'
                    numero_actual = ""
                    break
                case "*":
                    resultado = resultado + numero_actual + '*'
                    numero_actual = ""
                    break
                case "/":
                    resultado = resultado + numero_actual + '/'
                    numero_actual = ""
                    break
            }
            display.value = display.value + boton_signo.value
        }
    })
}
//verificar cuando se presiona punto y mostrarlo en pantalla
//si cumple la condicion de no tener delante signos
let boton_punto = document.getElementById('punto')
boton_punto.addEventListener('click', () => {
    let display = document.getElementById('display')
    ultimo = display.value.charAt(display.value.length - 1)
    if ((ultimo !== "") && (ultimo !== "/") && (ultimo !== "*") && (ultimo !== "-") && (ultimo !== "+") && (numero_actual.indexOf('.') === -1)) {
        numero_actual = numero_actual + boton_punto.value
        display.value = display.value + boton_punto.value
    }
})

//verificar cuando se presiona reset y borrar texto en pantalla
let boton_reset = document.getElementById('reset')
boton_reset.addEventListener('click', () => {
    let display = document.getElementById('display')
    display.value = ""
    numero_actual = ""
    resultado = ""
})

//verificar cuando se presiona igual y mostrar resultado final en pantalla
//si cumple la condicion de no tener delante signos
let boton_resultado = document.getElementById('resultado')
boton_resultado.addEventListener('click', () => {
    let display = document.getElementById('display')
    ultimo = display.value.charAt(display.value.length - 1)
    if ((ultimo !== "/") && (ultimo !== "*") && (ultimo !== "-") && (ultimo !== "+") && (ultimo !== ".")) {
        resultado = resultado + numero_actual
        numero_actual = ""
        display.value = eval(resultado)
    }
})