const paises = ["alemania", "austria", "belgica", "bulgaria", "chipre", "croacia", "dinamarca",
    "eslovaquia", "eslovenia", "españa", "estonia", "finlandia", "francia", "grecia", "hungria",
    "irlanda", "italia", "letonia", "lituania", "luxemburgo", "malta", "paises bajos", "polonia",
    "portugal", "republica checa", "rumania", "suecia"];


function formatearPalabra(palabra){

    palabra = palabra.trim().toLowerCase();
    let palabraNueva = "";

    for(letra of palabra){
    if(letra === "á"){
        letra = "a";
        palabraNueva+=letra;
    }
    else if(letra === "é"){
         letra = "e";
        palabraNueva+=letra;
    }
    else if(letra === "í"){
         letra = "i";
        palabraNueva+=letra;
    }
    else if(letra === "ó"){
         letra = "o";
        palabraNueva+=letra;
    }
    else if(letra == "ú"){
         letra = "u";
        palabraNueva+=letra;
    }
    else{

        palabraNueva+=letra;

    }
}
    return palabraNueva;
}




document.addEventListener("DOMContentLoaded", function(){

    const paisesJ1=[];
    const paisesJ2=[];
    let turno=1;

    if(paisesJ2.length===13){
        alert("Ha ocurrido un empate por límite de puntos");
    }

    let divJugador1 = document.getElementById("contadorJ1");
    divJugador1.style.backgroundColor="#84c3be";

     function resulltadoPais( pais, esPaisValido){

        let div = document.getElementById("respuestaInput");

            if( esPaisValido==false && paisesJ2.includes(pais) || paisesJ1.includes(pais)){
                let resultado = document.createElement("p");
                resultado.textContent = "El país ya ha sido introducido ❌";
                resultado.style.color="#FF2F05";
                div.appendChild(resultado);
                setTimeout(() => {
                    div.removeChild(resultado);
                }, 1500);
            }

            if( esPaisValido == false && !paises.includes(pais)){

                let resultado = document.createElement("p");
                resultado.textContent = "El país no existe en la Unión Europea ❌";
                resultado.style.color="#FF2F05";
                div.appendChild(resultado);
                setTimeout(() => {
                    div.removeChild(resultado);
                 }, 1500);
            }

            else if(esPaisValido==true && !paisesJ2.includes(pais) && !paisesJ1.includes(pais)){


                if(turno==1){
                    paisesJ1.push(pais);
                     let divJugador1 = document.getElementById("contadorJ1");
                    let contador = divJugador1.children[0];
                    contador.textContent = paisesJ1.length;
                }else{
                    paisesJ2.push(pais);
                    let divJugador2 = document.getElementById("contadorJ2");
                    let contador = divJugador2.children[0];
                    contador.textContent = paisesJ2.length;
                }

                  let resultado = document.createElement("p");
                resultado.textContent = "El país es correcto ✅";
                resultado.style.color="#05ff22ff";
                div.appendChild(resultado);
                setTimeout(() => {
                    div.removeChild(resultado);
                }, 1500);

            }
        }
    function registrarPais(turno){

        let esValido = false;
        let pais = document.getElementById("inputPais").value;
        pais = formatearPalabra(pais);

        if(paises.includes(pais) && turno===1 && !paisesJ2.includes(pais)){
            esValido = true;
        }
        else if(paises.includes(pais) && turno===0 && !paisesJ1.includes(pais)){
            esValido = true;
        }
        

        return [esValido,pais];

    }

    document.getElementById("inputPais").addEventListener("keydown", function(event){
        
        if(event.key==='Enter'){
           const  [esPaisValido,paisIntroducido] = registrarPais(turno);

            if(turno===1){
                
                if(esPaisValido===true){
                 resulltadoPais(paisIntroducido,esPaisValido);
                   let divJugador1 = document.getElementById("contadorJ1");
                    divJugador1.style.backgroundColor="#a7a7a7";
                    turno=0;
                    let divJugador2 = document.getElementById("contadorJ2");
                    divJugador2.style.backgroundColor="#f34545ff";
                }
                else{
                    resulltadoPais(paisIntroducido, esPaisValido);
                    turno=1;
                }
               
            }
            else if(turno===0){

                if(esPaisValido===true){
                    resulltadoPais(paisIntroducido,esPaisValido);
                   if(paisesJ2.length===13){
                        alert("Ha ocurrido un empate por límite de puntos");
    }
                     let divJugador2 = document.getElementById("contadorJ2");
                    divJugador2.style.backgroundColor="#a7a7a7";
                    turno=1;
                    let divJugador1 = document.getElementById("contadorJ1");
                    divJugador1.style.backgroundColor="#84c3be";
                }
                else{
                    resulltadoPais(paisIntroducido, esPaisValido);
                    turno=0;
                }

                 
            }
             
        }
    })

    document.getElementById("boton").addEventListener("click", function(){


        if (turno===1){
            alert("Ha ganado el Jugador 2");
        }else{
            alert("Ha ganado el Jugador 1");
        }
        document.location.reload();
    })

})