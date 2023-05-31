/*esto es para enlazar la estiqueta html en una variable en javascript*/
const opera1 = document.getElementById("op1")
const opera2 = document.getElementById("op2")
const operax = document.getElementById("operador")
const butts = document.getElementById("butts")
const resulx = document.getElementById("resul")
/* Esto es para añadirle un evento al boton  */
butts.addEventListener('click', rex)
function rex(){
    const perrohp = operax.value
    const ope1 = parseFloat (opera1.value)
    const ope2 = parseFloat(opera2.value)

    

    if((perrohp == "+" || perrohp == "-" || perrohp == "*" || perrohp == "/") && (ope1 && ope2)){
        let resultado;
        switch(perrohp){
            case "+":
              resultado =  ope1 + ope2
              break;
              case "-": 
              resultado = ope1 - ope2       
              break; 
              case "*":
                resultado = ope1 * ope2
                break;
                case "/":
                    resultado = ope1 / ope2
                    break;
        }
        resulx.innerText = "= " + resultado
        resulx.style = "color:black"
        
    }else{
        resulx.innerText = "Calculo   imposible"
        resulx.style = "color:red"
    }
}




