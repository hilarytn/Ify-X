// @desc    Register a new user
// @route   POST /api/user/register

import User from "../models/User.js";

// @access  Public
export const register = async (req, res) => {
    const {
        first_name,
        last_name,
        username,
        email,
        password
      } = req.body;
    try {
        const user = new User(
            {
                first_name,
                last_name,
                username,
                email
            })

        const savedUser = await user.save();

        res.status(201).json(savedUser);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}


export const profilePic = async (req, res) => {
    const file = req.file
    try {
        if (!file) {
            res.send('No file uploaded')
        }

        res.send('File uploaded successfully!')
    } catch(error) {
        res.status(500).json({error: message.error})
    }
}