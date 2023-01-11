// for (let letra of "Cod3r"){
//     console.log(letra)
// }

const assuntos = ["Map", "Set"]

//intera encima do indice
for (let i in assuntos){
    console.log(i)
}
//acessa o valor
for (let assunto of assuntos){
    console.log(assunto)
}
//criacao do map para percorrer com for of
const chaves_variadas = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])

for (let assunto of chaves_variadas){
    //se quiser printar so as chaves "for (let assunto of chaves_variadas.keys()"
    //se quiser printar so os valores "for (let assunto of chaves_variadas.values()"
    
    console.log(assunto)
}

for (let [ch, vl] of chaves_variadas.entries()) {
    console.log(ch, vl)
}