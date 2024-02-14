import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// @desc    Register a new user
// @route   POST /api/user/register
// @access  Public
export const register = async (req, res) => {
    const {
        first_name,
        last_name,
        username,
        email,
        password
      } = req.body;

    const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }

    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        console.log('Hashed password:', hashedPassword);

        const user = new User(
            {
                first_name,
                last_name,
                username,
                email,
                password: hashedPassword
            });

        const savedUser = await user.save();

        let token;
        try {
            token = jwt.sign(
                {
                    userId: savedUser.id,
                    email: savedUser.email
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: process.env.ACCESS_TOKEN_EXPIRE }
            );

            res.cookie('token', token, {
                httpOnly: true,
                path: '/api/user/register',
                maxAge: 1000 * 60 * 60 * 24 * 7,
                });

            console.log(req.cookies.token)
        } catch (err) {
            console.error("Error generating token:", err);
            return res.status(500).json({ error: "Error generating token" });
        }

        res.status(201).json({
            success: true,
            data: {
                userId: savedUser.id,
                email: savedUser.email,
                token: token
            },
        });
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ error: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let existingUser;

        existingUser = await User.findOne({ email : email})

        if (!existingUser) {
            return res.status(404).json( { message: "User not found" })
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        console.log(isPasswordValid)

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Incorrect Password' });
        }

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRE },
          );

          res.cookie('token', token, {
            httpOnly: true,
            path: '/api/user/register',
            maxAge: 1000 * 60 * 60 * 24 * 7,
            });
    } catch(err) {
        res.status(500).json({"message" : err.message})
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