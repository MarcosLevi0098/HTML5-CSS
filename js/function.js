

function teste () {
    var local = 123;
    console.log(local)
}
//  SO CONSIGO CHAMAR A VARIAVEL DE DENTRO DA FUMÇÃO
teste();

let algo = 123;
console.log('FORA = ', algo);

{
    let algo = 321
    console.log('DENTRO = ', algo);
}