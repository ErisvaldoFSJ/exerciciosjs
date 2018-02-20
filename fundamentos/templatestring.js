const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
            olá
            ${nome} !
            `
console.log(concatenacao)
console.log(template)

//expressoes
console.log(`1 + 1 = ${1+1}`)

const up = text => text.toUpperCase()

console.log(`Ei ... ${up('cuidado')}!`)