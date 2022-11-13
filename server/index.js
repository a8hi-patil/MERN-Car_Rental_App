const express = require('express')
const app = express()
const port = 5000
require('./dbConnection')
var cors = require('cors')
const carRouter = require('./routes/carRoute')
const userRouter = require('./routes/userRoute')



app.use(express.json())
app.use(cors())
app.use(carRouter)
app.use(userRouter)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Node JS Server listening on port ${port}!`))