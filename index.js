const $vezes = document.querySelector("#vezes")
const $repetidas = document.querySelector("#repetidas")
const $apagadas = document.querySelector("#apagadas")
const $quadro = document.querySelector("#quadro")
const $finalizar = document.querySelector('.finalizar')
function repetir () {
fechar ()
const vezes = $vezes.value
const apagadas = Math.floor((vezes-1) / 11)
const escritas =  vezes % 11 || 11
let contador = 0 
while (contador< escritas) {
    const $escrita = document.createElement('span')
    $escrita.className = 'escrita'
    $escrita.innerHTML = 'Eu não andarei de skate nos corredores'

    $quadro.appendChild($escrita)

    contador++
}

$apagadas.innerHTML = `O numero de apagadas é ${apagadas}`
$repetidas.innerHTML = `O numero de repetidas é ${vezes}`
$finalizar.style.display = 'flex'
}
