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

    let divJugador1 = document.getElementById("contadorJ1");
    divJugador1.style.backgroundColor="#84c3be";

    
    function registrarPais(turno){

        let esValido = true;
        let pais = document.getElementById("inputPais").value;
        pais = formatearPalabra(pais);

        if(paises.includes(pais) && turno===1){
            paisesJ1.push(pais);
        }
        else if(paises.includes(pais) && turno===0){
            paisesJ2.push(pais);
        }
        else{
            esValido = false;
        }

        return [esValido,pais];

    }

    document.getElementById("inputPais").addEventListener("keydown", function(event){
        
        if(event.key==='Enter'){
           const  [esPaisValido,paisIntroducido] = registrarPais(turno);
            if(turno===1){
                
                if(esPaisValido===true){
                    paisesJ1.push(paisIntroducido);
                     let divJugador1 = document.getElementById("contadorJ1");
                    divJugador1.style.backgroundColor="#a7a7a7";
                    turno=0;
                    let divJugador2 = document.getElementById("contadorJ2");
                    divJugador2.style.backgroundColor="#f34545ff";
                }
                else{
                    turno=1;
                }
               
            }
            else if(turno===0){

                if(esPaisValido===true){
                    paisesJ2.push(paisIntroducido);

                let divJugador2 = document.getElementById("contadorJ2");
                divJugador2.style.backgroundColor="#a7a7a7";
                turno=1;
                let divJugador1 = document.getElementById("contadorJ1");
                divJugador1.style.backgroundColor="#84c3be";
                }
                else{
                    turno=0;
                }

                 
            }
             
        }
    })

    

})