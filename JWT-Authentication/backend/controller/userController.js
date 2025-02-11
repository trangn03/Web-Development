const User = require("../model/User");

const userController = {
    // Get all users
    getAllUsers: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete user
    deleteUser: async (req, res) => {
        try {
            // /v1/user/12345 (id)
            const user = await User.findById(req.params.id); // apply for all numbers
            res.status(200).json("User has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = userController;