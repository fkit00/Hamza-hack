// go to teh express docs- go straight to applications
//https://expressjs.com/en/5x/api.html

import express from 'express'
import cors from 'cors'
import router from './routes/index.js'

const PORT=3001
const app = express()


app.use(express.json())
app.use(cors())

app.use('/todo', router)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, console.log(`listening on ${PORT}`))