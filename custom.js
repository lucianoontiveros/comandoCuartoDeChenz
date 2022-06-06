const listaInformativo = document.querySelector('.lista__informativo');
const informativo = document.querySelector('.informativo');

const listaSonidos= document.querySelector('.lista__sonidos');
const sonidos = document.querySelector('.sonidos'); 

const listaInteractuar= document.querySelector('.lista__interactuar');
const interactuar = document.querySelector('.interactuar'); 

const listaAcciones= document.querySelector('.lista__acciones');
const acciones = document.querySelector('.acciones'); 

const listaBebidas= document.querySelector('.lista__bebidas');
const bebidas = document.querySelector('.bebidas'); 

const botones = document.querySelectorAll(".list-group-item button");
const texto =  document.querySelectorAll(".itemText button");



 listaInformativo.addEventListener('click', (e) => {
     e.stopPropagation()

    if(informativo.classList.contains('disable')){
        informativo.classList.remove('disable');
        informativo.classList.add('active');
    } else {
        informativo.classList.remove('active');
        informativo.classList.add('disable');
        
    }
    
});

listaSonidos.addEventListener('click', (e) => {
    e.stopPropagation()

    if(sonidos.classList.contains('disable')){
        sonidos.classList.remove('disable');
        sonidos.classList.add('active');
    } else {
        sonidos.classList.remove('active');
        sonidos.classList.add('disable');
        
    }
    
});

listaInteractuar.addEventListener('click', (e) => {
    e.stopPropagation()

    if(interactuar.classList.contains('disable')){
        interactuar.classList.remove('disable');
        interactuar.classList.add('active');
    } else {
        interactuar.classList.remove('active');
        interactuar.classList.add('disable');
        
    }
    
});

listaAcciones.addEventListener('click', (e) => {
    e.stopPropagation()

    if(acciones.classList.contains('disable')){
        acciones.classList.remove('disable');
        acciones.classList.add('active');
    } else {
        acciones.classList.remove('active');
        acciones.classList.add('disable');
        
    }
    
});

listaBebidas.addEventListener('click', (e) => {
    e.stopPropagation()

    if(bebidas.classList.contains('disable')){
        bebidas.classList.remove('disable');
        bebidas.classList.add('active');
    } else {
        bebidas.classList.remove('active');
        bebidas.classList.add('disable');
        
    }
    
}); 



botones.forEach((boton) => boton.addEventListener("click", (e)=> {
    e.stopPropagation()

    texto.forEach((text) => text.addEventListener("click", (e)=> {
        e.stopPropagation()
        console.log(text.value);
       navigator.clipboard
       .writeText(text.value)
       .then(() => console.log("texto copiado"))
       .catch((e) => console.log(e));
    }))
    
}));
