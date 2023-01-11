// //Spread -> espalha e rest-> adiciona; ambos => ...name
// const funcionario = {
//     name: "lucas" , salario: 500.00
// }
// const clone ={
//     ativo: true, ...funcionario
// }

// console.log(clone)
// clone.salario = 600 //ao mudar o valor do objeto nao muda do principal q ele recebe, pois faz so um clone
// console.log(clone)
// console.log(funcionario)


// // usar spread com array

// const grupoA = ["Lucas", "Rafael"]
// const grupoFinal = ["Maria", "Jose", ...grupoA]
// console.log(grupoFinal)

function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    resultado.push(partes[indice], valor)
    })
    return resultado.join('')

}
    
const preco = 25.50
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)