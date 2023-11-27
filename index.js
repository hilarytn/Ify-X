import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import expenseRoute from './routes/expense.js'
import register from './routes/auth.js'


dotenv.config()

connectDB()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('client'));
app.use('/api', expenseRoute);
app.use('/api', register);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/client/signup.html')
})

app.get('/')
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))