// @desc    Register a new user
// @route   POST /api/user/register

import User from "../models/User.js";

// @access  Public
export const register = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            username,
            email
          } = req.body;

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