import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    first_name: { type: String,
        required: true },
    last_name: { type: String,
        required: true },
    username: { type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 12, },
    email: { type: String,
        required: true },
  });

  const User = mongoose.model('User', userSchema);

  export default User;