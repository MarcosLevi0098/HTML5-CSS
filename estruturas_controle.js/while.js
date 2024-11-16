// INICIANDO COM O LAÇO DE REPETIÇÃO WHILE
// SEMPRE USE A ESTRURURA DE REPETIÇÃO QUE MAIS SE ADEQUA A SUA NECESSIDADE


function getinteiroaleatorio(min, max) {
    
const valor = Math.random() * (max - min) + min
return Math.floor(valor)

}


let opcao = 0

while (opcao != -1) {
    opcao = getinteiroaleatorio(-1, 10)
    console.log(`A opção escolhida foi: ${opcao}.` ) //Usando o assento agudo consigo chamar uma variavel dentro de uma string
}

console.log("Ate a proxima")