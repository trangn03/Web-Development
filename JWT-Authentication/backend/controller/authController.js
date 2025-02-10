const bcrypt = require("bcrypt"); // Hashing passwords
const User = require("../model/User");

const authController = {
    // REGISTER
    registerUser: async (req, res) => {
        try {
            // Hash password 
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            // Create user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });

            // Save to database
            const user = await newUser.save();
            res.status(200).json(user);

        } catch (error) {
            res.status(500).json(err);
        }
    },

    // LOGIN
    loginUser: async(req, res) => {
        try {
            // Compare the username and password (is that correct?)

            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(400).json("User not found");
            }

            const validPassword = await bcrypt.compare(
                req.body.password, user.password
            );
            if (!validPassword) {
                return res.status(400).json("Wrong password");
            }
            
            // If user and password are correct, return a success message
            if (user && validPassword) {
                res.status(200).json("Login successful");
            }
            
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = authController;