//par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec(){
        const saudacao = 'Falaaa' // contexto lexico 2
        return saudacao
}
//objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome:'pedro',
    idade: 32,
    peso:90,
    endereco:{
        logradouro: 'rua fulando de tal',
        nomero:123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)