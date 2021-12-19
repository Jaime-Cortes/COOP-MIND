let imagen = document.getElementById('logo');
let links = document.getElementById('links');
let muestra = document.getElementById('mem');
let ventana = document.querySelector('.overlay')
let cierra = document.getElementById('close')
let contenedor = document.querySelector('.present_card')

function popup() {
    muestra.addEventListener('click', () => {
        ventana.classList.add('ocultar')
        contenedor.style.display = 'none';
    })
}

function closepopup() {
    cierra.addEventListener('click',()=> {
        ventana.classList.remove('ocultar')
        contenedor.style.display = 'flex';
    })
}
function ocultar() {
    imagen.addEventListener('click', () => {
        links.classList.toggle("mostrar")
    })
}

// ocultar();
popup()
closepopup();