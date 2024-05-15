const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
 
const userRoute = require('./src/routes/usuarioRoute')
const projectRoute = require('./src/routes/projectRoute')

app.use(userRoute)
app.use(projectRoute)

app.use(bodyParser.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))
 
//Configurando a conexão
const mongoose = require('mongoose')
let url = 'mongodb://127.0.0.1:27017/fatec'
let mongoDb = process.env.MONGODB_URI || url
mongoose.connect(mongoDb)
mongoose.Promise = global.Promise
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar com o banco de dados'))
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
 
app.listen(3000, ()=>{
    console.log('Servidor em execução na porta 3000')
})