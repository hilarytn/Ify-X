import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')

})

app.listen(PORT, () => console.log(`Server running ${PORT}`))