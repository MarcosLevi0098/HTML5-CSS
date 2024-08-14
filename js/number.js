

const pessoa1 = 1.0 // numero com casa decimal
const pessoa2 = Number('2.0') // numero com o atributo number

console.log(pessoa1, pessoa2)
console.log(Number.isInteger(pessoa1)) // verificação se o tipo e inteiro
console.log(Number.isInteger(pessoa2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * pessoa1 + avaliacao2 * pessoa2
const media = total /(pessoa1 + pessoa2)

console.log(media.toFixed(2)) // to fixed impoe que teremos apenas duas casas decimais apos a virgula
console.log(media.toString(2)) // Converte em binario

console.log(typeof(media)) // mostrando qual e o tipo de dado passado na nossa constante media
console.log(typeof(Number)) // Number com N maiusculo e uma função


// ALGUNS CUIDADOS COM O NUMBER








