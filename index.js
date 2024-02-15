import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import expenseRoutes from './routes/expense.js'
import authRoutes from './routes/auth.js'


dotenv.config()

connectDB()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('client'));


app.use('/api', expenseRoutes);
app.use('/api', authRoutes);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
})


app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/client/signup.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/client/login.html')
})

app.get('/logout', (req, res) => {

})
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))