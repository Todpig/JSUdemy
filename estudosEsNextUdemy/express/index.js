const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const saudacao = require('./saudacao')

app.get("", saudacao('Lucas'))
app.use(bodyParse.json())

app.use("", (req, res, next) => {
    console.log('Será so imaginção')
    next()
})
//app.use -> tudo que vai aaprecer na pagina web
app.get('',(req, res) => {
    res.json({
        name: 'ipad 32Gb',
        price: 1899.99,
        discount: 0.12    
    })
    //res.send('<h1>hello World</h1>')
})

app.listen(3000, () => {
    console.log('Executando BackEnd...')
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })
    // req.on('end', function(){
    //     res.send(corpo)
    // })
    //  req.on('end', function(){
    //      res.json(JSON.parse(corpo))
    //  })

    res.send(JSON.stringify(req.body))
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Ciente relatorio: completo = ${req.query.completo}, ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res) =>{
        res.send(`Cliente ${req.params.id} selecionado!`)
})