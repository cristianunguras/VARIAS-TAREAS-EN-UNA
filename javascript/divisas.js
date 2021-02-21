//variables que recogen importes introducidos

let importe_dolares = 0,
    importe_euros = 0


//funciones para convertir importes

const convertir_euros = () => {
    importe_euros = document.getElementById('display_euro').value
    let importe_calculado = importe_euros * 1.22
    let display = document.getElementById('display_dolar')
    display.value = importe_calculado.toFixed(2)

}
const convertir_dolares = () => {
    importe_dolares = document.getElementById('display_dolar').value
    let importe_calculado = importe_dolares / 1.22
    let display = document.getElementById('display_euro')
    display.value = importe_calculado.toFixed(2)
}

//verificar cuando se presiona alguno de los botones de conversion y mostrar resultado
let boton_dolar = document.getElementById('dolar')
boton_dolar.addEventListener('click', () => {
    convertir_dolares()
})
let boton_euro = document.getElementById('euro')
boton_euro.addEventListener('click', () => {
    convertir_euros()
})