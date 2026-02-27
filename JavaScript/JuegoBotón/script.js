const botonAdivinar = document.getElementById('adivinar');
const numeroSecreto = Math.floor(Math.random()*11);
const entrada = document.getElementById('entrada');
const resultado = document.getElementById('resultado');
let nIntento = 0;
botonAdivinar.addEventListener('click', adivinar);

function adivinar(){
    nIntento++;
    if (numeroSecreto == entrada.value){
        resultado.textContent = "¡Has ganado! Número de intentos: " + nIntento;

    } else if (numeroSecreto > entrada.value){
        resultado.textContent = "El número que estoy pensando es mayor. Número de intentos: " + nIntento;
    } else if (numeroSecreto < entrada.value) {
        resultado.textContent = "El número que estoy pensando es menor. Número de intentos: " + nIntento;
    }
}