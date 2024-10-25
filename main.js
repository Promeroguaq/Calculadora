const botones = document.querySelectorAll(".btn")
const pantalla = document.querySelector("#pantalla")

console.log(botones)
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent
        if (botonApretado === "AC") {
            pantalla.textContent = "0"
        } 
        
        else if (botonApretado === "del") {
            try { pantalla.textContent.length ==1 }{
                pantalla.textContent = "0"
            } else{
                pantalla.textContent = pantalla.textContent.slice(0,-1)
            }
        } else if (botonApretado == "="){
            try{
                pantalla.textContent =eval(pantalla.textContent)
            }catch (error){
                pantalla.textContent = "Error"
            }

        } else if(botonApretado == "%"){
            try{
                pantalla.textContent = eval(pantalla.textContent)*0.01
            }catch (error){
            pantalla.textContent = "Error!"
            }
        }
        pantalla.textContent = pantalla.textContent + botonApretado
    }
    })
