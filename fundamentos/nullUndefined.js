let valor // não atribir nada ainda

valor = null //ausencia de valor

const produto = {}

produto.preco = 10
produto.quantidade = 200
produto.cor = 'vermelho'

if(!!produto && produto.preco != 0){
    console.log(produto)
}else{
    console.log('produto inexistente')
}


