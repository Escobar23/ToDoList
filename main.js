const inputPrincipal = document.querySelector('.input')
const btnAgregar = document.querySelector('.boton-agregar')
const container = document.querySelector('.container')
const message = document.querySelector('.message')

function editar(event) {
    event.preventDefault()
    console.log(event)
}


class Item {
    constructor(nuevaTarea) {

        this.crearDiv(nuevaTarea)

    }
    
    crearDiv = (tarea) => {

        let inputItem = document.createElement('input'),
            div = document.createElement('div'),
            botonEditar = document.createElement('button'),
            botonRemover = document.createElement('button')
        
        inputItem.type = 'text'
        inputItem.classList.add = 'item-input'
        inputItem.value = tarea
        inputItem.setAttribute('disabled', '')

        div.className = 'item'

        botonEditar.className = 'boton-editar'
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"

        botonRemover.className = 'boton-remover'
        botonRemover.innerHTML = "<i class='fa-solid fa-trash'></i>"

        div.appendChild(inputItem)
        div.appendChild(botonEditar)
        div.appendChild(botonRemover)
        container.appendChild(div)

        botonEditar.addEventListener('click', () => {
            
            if (inputItem.hasAttribute('disabled')) {

                inputItem.removeAttribute('disabled')
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>"

            } else {

                inputItem.setAttribute('disabled', '')
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>"

            }

        })

        botonRemover.addEventListener('click', () => { div.remove() })
    }
    
}

function chequearInput() {

    if (inputPrincipal.value) {

        message.style.display = 'none'
        new Item(inputPrincipal.value)
        inputPrincipal.value = ''

    } else {

        message.style.display = 'block'
        
    }
}