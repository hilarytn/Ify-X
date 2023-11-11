import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import path from 'path'


dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'client', 'index.html');
    res.sendFile(filePath)

})

app.listen(PORT, () => console.log(`Server running ${PORT}`))