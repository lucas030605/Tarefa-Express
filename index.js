const express = require('express')
const app = express()
const port = 5000  //Variavel ambiente

const path = require("path")
const inicial = require('./inicial')
const inicial2 = require('./inicial2')

const basepath = path.join(__dirname) 

app.use('/inicial', inicial)
app.use('/inicial2', inicial2)

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
})  