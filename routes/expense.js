import express from 'express';
const router = express.Router();
import {newExpense} from '../controllers/ExpenseController.js'

router.post('/expense/new', newExpense)


export default router;