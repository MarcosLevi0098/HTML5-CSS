//INICIANDO A ESTRUTURA DO SWITCH COMPARAÇÃO

const imprimirresultado = function (nota) {
    switch(Math.floor(nota)){
    case 10: // MINHAS CASES SÃO AS MINHAS CONDIÇÕES
    case 9:
        console.log("Quadro de honra")
        //break // TODA VEZ QUE CAI EM UMA CONDIÇÃO ELE PARA O PROGRAMA
    case 8: case 7: // POSSO TER UMA OU MAIS CASE UMA AO LADO DA OUTRA
        console.log("Aprovado")
        //break
    case 6: case 6.99:
        console.log("Recuperação")
        //break
    case 0: case 1: case 2: case 3:case 4: case 5:
        console.log("Reprovado")
}
}
// SE EU NÃO ADICIONAR O BREAK O LAÇO SERA EXECUTADO ATE A MINHA ULTIMA CONDIÇÃO

//imprimirresultado(10)
//imprimirresultado(8)
//imprimirresultado(6)
//imprimirresultado(4)
imprimirresultado(10)
// OCODIGO É EXECUTADO DE CIMA PARA BAIXO