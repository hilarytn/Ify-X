import mongoose from 'mongoose';
import expenseSchema from './Expense.js';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    first_name: { type: String,
        minlength: 2,
        maxlength: 20,
        required: true },
    last_name: { type: String,
        minlength: 2,
        maxlength: 20,
        required: true },
    username: { type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 12, },
    email: { type: String,
        required: true },
    password: {
        type: String,
        required: true,
        minlength: 6,
        unique: true,
    },
    expense: {type: [expenseSchema]}
  },  { timestamps: true });

  const User = mongoose.model('User', userSchema);

  export default User;