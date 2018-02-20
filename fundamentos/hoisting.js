console.log('a =',a)
var a = 2
console.log('a =',a)

function teste(){
    console.log('a =',a)
    var a = 2
    console.log('a =',a)
}
teste()
// com let ele nao joga a variavel para cima, como faz com VAR o chamado HOISTING
// hoisting é um movimento padrão do js, para alocar no topo a var
console.log('a =',b)
let b = 2
console.log('a =',b)
