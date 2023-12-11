import mongoose from 'mongoose';


const { Schema } = mongoose;

const expenseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date: { type: Date, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
  }, {timestamps: true});

  export default expenseSchema;