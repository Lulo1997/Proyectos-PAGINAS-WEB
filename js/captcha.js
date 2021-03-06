"use strict";

//llamo al boton
document.querySelector("#btnEnviar").addEventListener("click",comprobrarCaptcha);

//variable contenedora de un random
let random= Math.floor(Math.random()*(6-1)+1); 

//funcion que me genera el random
function MostrarImg(){
   switch(random){
      
       case 1:{
        document.querySelector("#imgCaptcha").src="img/captcha/resultado1.jpg"
        break;
       }
       case 2:{
        document.querySelector("#imgCaptcha").src="img/captcha/resultado2.jpg"
        break;
       }
       case 3:{
        document.querySelector("#imgCaptcha").src="img/captcha/resultado3.jpg"
        break;
       }
       case 4:{
        document.querySelector("#imgCaptcha").src="img/captcha/resultado4.jpg"
        break;
       }
       case 5:{
        document.querySelector("#imgCaptcha").src="img/captcha/resultado5.jpg"
        break;
       }
   }
}

//llamo a la funcion para que se muestre una imagen por pantalla al cargar el dom
MostrarImg();


//verifico lo que ingresa el usuario

function comprobrarCaptcha(event){
    event.preventDefault();
    let numIngresado= document.querySelector("#respuestaIngresada").value;
    
    if(numIngresado==random){
        
        document.querySelector("#verificado-incorrecto").classList.remove("hide");
        
        document.querySelector("#verificado-incorrecto").src="img/captcha/captcha validado.png";
        setTimeout(()=>{

            document.querySelector("#verificado-incorrecto").classList.add("hide");
            
           
        }, 2000)
    }
    else{

         document.querySelector("#verificado-incorrecto").classList.remove("hide");
         document.querySelector("#verificado-incorrecto").src="img/captcha/captcha error.png";
        
        setTimeout(()=>{
            
            document.querySelector("#verificado-incorrecto").classList.add("hide");
            
        }, 2000)
       
    }
}
