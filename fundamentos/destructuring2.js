const [a] = [10]
console.log(a)

const [n1,n2,n3, ,n5, , n9 = 0] = [10, 7, 9, 8]
console.log(n1,n2,n3,n5,n9)

//um array dentro de outro e no segundo ignorando o primeiro elemento
const [ , [,nota]] = [[,8,9], [9,6,8]]
console.log(nota)