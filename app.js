const formRevistas = document.getElementById("form-revistas")

const inputNombre = document.getElementById("input-nombre-revista");

const inputPaginas = document.getElementById("input-pagina-revista");

const inputAño = document.getElementById("input-año-revista");

const btn = document.getElementById('btn')



formRevistas.addEventListener('submit', (event) =>{

    event.preventDefault();

    const nombre = inputNombre.value

    const paginas = inputPaginas.value

    const año = inputAño.value

    console.log(nombre)
    console.log(paginas)
    console.log(año)


    


    if(nombre == 'ole'){

        alert('Ya existe')
    
    }
    
    else if( nombre == 'el grafico'){
        alert('Ya existe')
    }
        
    else if(nombre == 'gente'){
        alert('Ya existe')
    }
    
    else if(nombre == 'billboard'){
        alert('Ya existe')
        }
    
    else if(nombre == 'forbes'){
        alert('Ya existe')
    }
    else {
        const div1 = document.getElementById('div1')
        const newDiv = document.createElement('div')
        newDiv.textContent = 'La revista ' + nombre + ' ya esta siendo revisada'
    
        div1.appendChild(newDiv)
        console.log(newDiv)



        alert('gracias por ayudar')
    }
    



})






btn.addEventListener('click',() =>{
console.log('Haz hecho click')

}
)





