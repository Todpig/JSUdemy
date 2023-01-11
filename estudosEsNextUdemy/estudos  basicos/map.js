const tecnologias = new Map()

tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.get("react").framework)

const chaves_variadas = new Map([
    [function () {}, 'Função'], // chave-> uma função, valor-> string
    [{}, 'Objeto'], // chave -> objeto, valor-> objeto padrão
    [123, 'Numero'], // chave -> inteiro, valor -> string 

])

chaves_variadas.forEach((vl, ch) => {
    console.log(ch, vl)
})
//has metodo que diz se est dentro ou não
console.log(chaves_variadas.size)
console.log(chaves_variadas.has(123))
chaves_variadas.delete(123)
console.log(chaves_variadas.has(123))
console.log(chaves_variadas.size)