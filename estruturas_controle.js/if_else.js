const  minhaFuncao = function(nota){
    if(nota >=7){
        console.log("Aluno aprovado com: " + nota)
    }else{
        console.log("Aluno reprovado com: " + nota)
    }
}

minhaFuncao(8.5)
minhaFuncao(6.9)
minhaFuncao("EPA!!!") //Cuidado

//Lembre-se o JavaScript é uma linguagem fracamente tipada
