function compas (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comparTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comparTv50, comprarTv32, manterSaudavel}
}
console.log(compas(true, true))
console.log(compas(true, false))
console.log(compas(false, false))