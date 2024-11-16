
function imcCalculaTion(altura, peso) {
    imc = peso/(altura * altura)
    imc = typeof(imc)
    
    if(imc >= 18.5 ){
    console.log(`Você está saldavel IMC: "${imc}`)
    }else if( imc < 18.5){
        console.log(`Você está abaixo do peso IMC: ${imc.toFixed(2)}`)
    }
}

/*altura = 1.70
peso = 110

imc = peso/(altura * altura)

console.log(imc.toFixed(2))
*/
imcCalculaTion(1.70, 110)