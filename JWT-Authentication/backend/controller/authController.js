const bcrypt = require("bcrypt"); // Hashing passwords
const User = require("../model/User");
const jwt = require("jsonwebtoken");

let refreshTokens = [];

const authController = {
    // Register
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

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Generate access token
    generateAccessToken: (user) => {
        return jwt.sign(
            { 
                id: user.id, 
                admin: user.admin 
            },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: "1m" }
        );
    },

    // Generate refresh token
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: "365d" },
        );
    },

    // Login
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
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefreshToken(user);
                refreshTokens.push(refreshToken);
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    path: "/",
                    sameSite: "strict",
                    secure: false
                })

                // Hide the password
                const { password, ...others } = user._doc;

                res.status(200).json({...others, accessToken});
            }
            
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Refresh token
    refreshToken: async (req, res) => {
        // Take refresh token from user because it is long term
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json("User not authenticated");
        } 
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid");
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err);
            }

            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

            // Create new access token, refresh token
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                path: "/",
                sameSite: "strict",
                secure: false
            });
            res.status(200).json({ accessToken: newAccessToken });
        });
    },

    // Log out
    userLogout: async (req, res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        res.status(200).json("User has been logged out");
    },

};

module.exports = authController;


// Store token
// 1. Local storage (easy to attack - XSS)
// 2. Cookies (CSRF attack) CSRF -> Samesite
//    HTTPONLY cookies (secure)
// 3. Redux store -> access token
//    HTTPONLY cookies -> refresh token

// BFF Pattern (Backend for Frontend)

// Access token: short term
// Refresh token: long term