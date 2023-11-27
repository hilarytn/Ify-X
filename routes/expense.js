import express from 'express';
const router = express.Router();
import {newExpense, allExpenses } from '../controllers/ExpenseController.js'

router.post('/expense/new', newExpense)
router.get('/expense/all', allExpenses);


export default router;