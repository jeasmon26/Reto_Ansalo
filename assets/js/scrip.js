/*Temas */
const dark = document.getElementById('switchDark');
const retro = document.getElementById('switchRetro');
const container = document.getElementById('contenedor');
const footer = document.getElementById('footer');
const botones = document.getElementById('botons')

dark.addEventListener('click', () => {
    if (dark.checked == true) {
        localStorage.setItem('tema', 'dark')
        const temaActual = localStorage.getItem('tema')
        document.getElementById('contenedor').classList.remove(temaActual)
        document.getElementById('contenedor').classList.add('dark')
    } else {
        document.getElementById('contenedor').classList.remove('dark')
        localStorage.setItem('tema', '')
    }
});

retro.addEventListener('click', () => {
    if (retro.checked == true) {
        localStorage.setItem('tema', 'retro')
        const temaActual = localStorage.getItem('tema')
        document.getElementById('contenedor').classList.remove(temaActual)
        document.getElementById('contenedor').classList.add('retro')
    } else {
        document.getElementById('contenedor').classList.remove('retro')
        localStorage.setItem('tema', '')
    }
});

/*Letras y Números */

const A1 = document.getElementById('A');
const B2 = document.getElementById('B');
const C3 = document.getElementById('C');
const D4 = document.getElementById('D');
const E5 = document.getElementById('E');
const F6 = document.getElementById('F');
const G7 = document.getElementById('G');
const H8 = document.getElementById('H');
const I9 = document.getElementById('I');
const J0 = document.getElementById('J');
const reset = document.getElementById('reset');

let arrayDeLetras = [];
let arrayDeNumeros = [];

A1.addEventListener('click', () => {
    console.log(arrayDeLetras);
    console.log(arrayDeLetras.length)
    if (arrayDeLetras[0] != 'A' && arrayDeLetras.length == 0) {
        arrayDeLetras.push(document.getElementById('letras').value = 'A');
        console.log(arrayDeLetras);

        document.getElementById('letras').value = arrayDeLetras;
    } else if (arrayDeLetras[0] == 'A' && arrayDeLetras.length != 10) {
        swal("Advertencia!", "La letra A ya fue ingresada!", "warning");
    }
});