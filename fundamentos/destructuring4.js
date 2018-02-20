function rand([min = 0, max = 100]){
    if(min>max)[min,max] = [max,min] // se minimo for maior que maximo, troca as posições
    const valor = Math.random()* (max-min) +min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([999]))
console.log(rand([,10]))
console.log(rand([]))