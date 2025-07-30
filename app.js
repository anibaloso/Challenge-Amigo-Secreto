// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres=[];

//Se implementa funcion para agregar amigos al apretar el boton
function agregarAmigo(){
    let nombre=document.getElementById('amigo').value;;
    if(nombre){
        nombres.push(nombre);
        console.log(nombres);
        document.querySelector('#amigo').value='';
        listarAmigos();
    }else{
        alert('Por favor, inserte un nombre.');
    }
}

// Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

function listarAmigos(){
    let listaAmigos=document.getElementById('listaAmigos');
    listaAmigos.innerHTML='';
    nombres.forEach(nombre=>{
        const li=document.createElement('li');
        li.textContent=nombre;
        listaAmigos.appendChild(li);
    })
}

// Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

function sortearAmigo(){
    let amigoElegido=Math.floor(Math.random() * nombres.length);
    console.log("🚀 ~ sortearAmigo ~ amigoElegido:", amigoElegido)
    
    alert(`El amigo elegido es : ${nombres[amigoElegido]}`);
}