//sem promise
// usando apenas callbacks
//NAõ é tao interessante de fazer pq o codigo fica menos explicito, de certa forma feio.
const http = require('http')

const getTurma = (letra_da_turma, callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra_da_turma}.json`
    http.get(url, res => {
        let resultado = ''
        res.on('data', dados => {
            resultado += dados
        })
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    //console.log(nomes)
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        //console.log(nomes)
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})