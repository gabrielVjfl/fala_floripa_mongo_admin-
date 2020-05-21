let port = 8085

let express = require('express')

let app = express()

let bodyParser = require('body-parser')

let cors = require('cors')

let mongoose = require('mongoose')

require('./models/table')

let Fala_floripa = mongoose.model("fp")

mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://gabrielVjfl:60818181@cluster0-lqnvw.gcp.mongodb.net/PROJETOMONGO2', {useNewUrlParser: true})

.then(() => {
    console.log('sucessoooo')
})



.catch((err) => {
    console.log('ERRO!')
    console.log(err)
})

app.use((req,res,next) => {
    // * permite tudo
  res.header('Access-Control-Allow-Origin', '*') // ou http://localhost:8080 ou o site .com.br

   res.header('Access-Control-Allow-Headers', 
       'Origin, X-Requested-With, Content-Type, Accept, Authorization')

      res.header('Access-Control-Allow-Methods', 'GET', 'PUT','POST','DELETE')

        app.use(cors())

        next()
})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

// app.use(express.static(__dirname))




app.get('/pessoas', (req,res) => {
    Fala_floripa.find().then((suc )=> { // Find lista todas as categorias

console.log(suc, res)

    }).catch((err) => {
        console.log(err)
    })
    

    
})
  
  


  app.listen(port, () => {
      console.log('rodando!!!')
  })



