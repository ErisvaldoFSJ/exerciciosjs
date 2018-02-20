//novo recurso ES2015

const pessoa ={
    nome: 'ana',
    idade: 5,
    endereco:{
        logradouro: 'rua abc',
        numero: 1000
    }
}
//tirar os dois atributos nome,idade do objeto pessoa
const { nome,idade } = pessoa
console.log(nome,idade)

const {nome:n, idade:i} = pessoa
console.log(n,i)

const{sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const{endereco:{logradouro, numero, cep}, idade: i2} = pessoa
console.log(logradouro,numero, cep, i2)