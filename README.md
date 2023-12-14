# IfyX App


        if (result) {
            const checkExpense = result.length
            if(checkExpense > 0) {
                return res.status(201).json({"User Expense": result.expense})
            }
            res.send("No expense for this user")
        }    