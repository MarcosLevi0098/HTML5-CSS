

function soBoaNoticia(nome, nota) {
    if(nota >= 7){
        console.log(nome + " Aprovado nota: " + nota)
    }else{
        console.log(nome + " reprovado nota: " + nota)
    }
}

soBoaNoticia("Marcos Levi",8.1)
soBoaNoticia("Carlos Almeida",6.7)

function noMefunCao(paran1, paran2) {
    console.log("Executando uma função simples de retorno ")
    console.log(paran1)
    console.log(paran2)
}

noMefunCao("Primeiro parametro da função", "Segundo parametro da função")
