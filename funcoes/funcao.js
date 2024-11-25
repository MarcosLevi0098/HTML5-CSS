//Função em JavaScript e First-Class
//Higher-Order function


//Criar de forma literal
function fun1 (){
    //Essa função pode recever parametros e valor
}

//Armazenar função em uma variavel
const fun2 = function () {} //Função anonima

//Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]

//Armazenar em um atributo de objeto 
const obj = {}

obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//Passar função com param

function run(fun) {
    fun()
}