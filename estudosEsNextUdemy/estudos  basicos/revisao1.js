// let and const -> escopo de função e global
// var -> tem escopo de função
{
    var a = 2 // nao tem escopo de bloco
    let b = 3 // tem escopo de bloco
}

//Template String -> ()`${object} text/string`)

const produto = "ipad"

console.log(`${produto} é caro`)

//operador Destruturing

const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const { name, age} = {
    name: "lucas", age: "15"
}
console.log(name, age)

//Arrow function
//EXEMPLO 1
const soma = (a, b) => a + b //nao percisa dar return 

//EXEMPLO 2
const soma2 = (a, b) => {
    return a + b
}
console.log(soma(2, 3))
console.log(soma2(2, 3))

//Arrow Function ex2

const lexicol = () => console.log(this === exports)
const lexico2 = lexicol.bind({})
lexicol()
lexico2()


//paramentos default

function log(texto = "Mesagem Original"){
    console.log(texto)
}

log()
log("Outra mensagem")

//operador rest

function total(...numeros){
    //...nomevariavel -> pode receber varios parametros
    let total = 0
    numeros.forEach(n => total += n) // for Each metodo q percorre oque fr passado, seja oq for, percorreum loop qualquer
    return total
}
//EXE1
console.log(total(2, 8))
//EXE2
console.log(total(1, 2, 3, 4, 5))

//ES8 objects.values/objects.entries
const obj = { a:1, b:2, c:3}

//EXE1 return value
console.log(Object.values(obj))
//EXE2 return keys
console.log(Object.keys(obj))
//EXE3 return array keys the value
console.log(Object.entries(obj))

//melhorias na notalçao literal

const nome = "lucas"
const pessoa ={
    nome, 
    ola(){
        return 'Hello world'
    }
}
console.log(pessoa.nome, pessoa.ola())

//class

class Animal {}
//extends seria uma forma de Herança
class Cachorro extends Animal{
    falar(){
        return "au au"
    }
}

console.log(new Cachorro().falar()) //new palavra reservada usada uando for chamar a class


//tagged templates - processar o template dentro de uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return "Outra String"
}

const aluno = "Gui"
const situacao = "Aprovado"
console.log(`${aluno} está ${situacao}!`)

//EXE2
console.log(tag `${aluno} está ${situacao}!`)
