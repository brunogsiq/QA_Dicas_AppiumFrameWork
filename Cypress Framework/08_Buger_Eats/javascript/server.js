const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send({ message: 'Hello Cypress Discovery' })
})

app.get('/avengers', function (req, res) {
    var avengers = ['Tony Stark', 'Steve Rogers', 'Natasha Romanoff', 'Bruce Banner'];
    return res.json({ data: avengers })
})

app.get('/cnh', function (req, res) {
    const idade = req.query.idade

    if (!idade) {
        return res.json({ message: 'Idade é um campo obrigatório.' })

    }

    var idadeNum = parseInt(idade)

    if (idadeNum >= 18) {
        return res.json({ message: 'ok, você pode tirar carteira de motorista.' })
    } else if (idadeNum > 4) {
        return res.json({ message: 'Infelizmente você poderá andarde bike ou de carona.' })
    } else {
        return res.json({ message: 'ah vá! Só pode beber leite.' })
    }

    console.log(nome.value)
    console.log(typeof nome.value)
    console.log(idade.value)
    console.log(typeof idadeNum)

    return res.json({ test: idade })
})

app.listen(3000)