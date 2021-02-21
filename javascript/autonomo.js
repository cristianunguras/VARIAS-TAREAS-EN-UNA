// variable que guardan el tiempo transcurrido en segundos
let tiempoTranscurrido = 0

//variable que identifica si el boton de parar ha sido pulsado
let parado = true

//variable que identifica cuantas veces el boton de parar ha sido pulsado
let etapa = 0

//variable selecionar elemento html body
let body = document.querySelector('body')

// función pasar de segundos a horas,minutos,segundos
const tiempoReal = tiempoDeContador => {
    let segundos = ('0' + Math.floor(tiempoDeContador % 60)).slice(-2),
        minutos = ('0' + Math.floor(tiempoDeContador / 60 % 60)).slice(-2),
        horas = ('0' + Math.floor(tiempoDeContador / 3600 % 60)).slice(-2)
    return {
        segundos,
        minutos,
        horas
    }
}

// función refrescar digitos
const contador = () => {
    const actualizar = setInterval(() => {
        let tiempo = tiempoReal(tiempoTranscurrido)
        document.getElementById('h1').innerHTML = `${tiempo.horas}h:${tiempo.minutos}m:${tiempo.segundos}s`
        if (parado) {
            clearInterval(actualizar)
        }
        tiempoTranscurrido++
    }, 1000)
}

//función resetear contadores(variables) y mostramos contador a 0
const reset = () => {
    tiempoTranscurrido = 0
    etapa = 0
    parado = true
}

//función parada temporal
const parada = () => {
    parado = true
    etapa++
}

//función crear elemento html(h2) para mostrar métrica
const resultado = () => {
    let tiempo = tiempoReal(tiempoTranscurrido - 1)
    const h2 = document.createElement("h2")
    h2.textContent = `Has trabajado ${tiempo.horas}h:${tiempo.minutos}m:${tiempo.segundos}s en ${etapa} etapa(s).`
    body.appendChild(h2)
}

//verificar cuando se presiona alguno de los botones de comenzar,parar,jornada y mostramos resultados
let boton_comenzar = document.getElementById('comenzar')
boton_comenzar.addEventListener('click', () => {
    parado = false
    contador()
})
let boton_parar = document.getElementById('parar')
boton_parar.addEventListener('click', () => {
    parada()
})
let boton_jornada = document.getElementById('jornada')
boton_jornada.addEventListener('click', () => {
    if (parado) {
        resultado()
        reset()
        let tiempo = tiempoReal(tiempoTranscurrido)
        document.getElementById('h1').innerHTML = `${tiempo.horas}h:${tiempo.minutos}m:${tiempo.segundos}s`
    } else {
        alert('Por favor pare primero el contador!!!')
    }
})