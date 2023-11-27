import User from "../models/User.js"
import Expense from "../models/Expense.js"


// @desc    Create a new expense
// @route   POST /api/expense/new
// @access  Private
//@returns {object} The created Expense
//@throws {Error} If request is invalid or an error occurs
export const newExpense = async (req, res) => {
    try {
        const {date, category, amount, description} = req.body

        const expense = new Expense({
            date,
            category,
            amount,
            description
        })

        const savedExpense = await expense.save();
        res.status(201).json(savedExpense);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}