//recurso ES8
const http = require('http')

const getTurma = letra_da_turma => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra_da_turma}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }
                catch(e){
                    reject(e)
                }
            })
        })
    })
}

let obteralunos = async() => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // desse jeito ele retorna um  objeto do tipo Asyncfunction

obteralunos()
.then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))