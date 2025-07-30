// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres=[];

//Se implementa funcion para agregar amigos al apretar el boton
function agregarAmigo(){
    let nombre=document.getElementById('amigo').value;;
    if(nombre){
        nombres.push(nombre);
        console.log(nombres)
        document.querySelector('#amigo').value='';
    }else{
        alert('Por favor, inserte un nombre.');
    }
}

