import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';


dotenv.config()

connectDB()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');

})

app.listen(PORT, () => console.log(`Server running ${PORT}`))