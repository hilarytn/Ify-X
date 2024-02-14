import User from "../models/User.js"

// @desc    Create a new expense
// @route   POST /api/expense/new
// @access  Private
//@returns {object} The created Expense
//@throws {Error} If request is invalid or an error occurs
export const newExpense = async (req, res) => {
    const {date, category, amount, description} = req.body
    const userId = req.params._id;
    try {
        const expenseDate = date ? new Date(date) : new Date();
        const userToExpend = await User.findOneAndUpdate(
            { _id: userId },
            { $push: { expense: {date: expenseDate.toDateString(), category, amount, description} } },
            { new: true }
          );

        if (!userToExpend) {
            return res.status(404).json({ error: 'User not found' });
          }

        const latestUserExpense = userToExpend.expense.length - 1 

        res.status(201).json(userToExpend.expense[latestUserExpense]);
    } catch(error) {
        res.status(500).json({ error: "Error fetching user"});
    }
}

export const allExpenses = async (req, res) => {
    const userId = req.params._id
    try {
        const result = await User.findById({_id: userId}, 'expense')

        if(!result) return res.status(500).json({error: "No user found"})
        
        res.status(200).json(result)
    } catch(error) {
        res.status(500).json({error: "Could not fetch expenses for this user"});
    }
}

export const updateExpense = async (req, res) => {
    const userId = req.params
}