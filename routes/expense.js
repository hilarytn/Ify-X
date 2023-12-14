import express from 'express';
const router = express.Router();
import {newExpense, allExpenses } from '../controllers/ExpenseController.js'

router.post('/expense/:_id/new', newExpense)
router.get('/expense/:_id/all', allExpenses);


export default router;