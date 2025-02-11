const router = require("express").Router();
const userController = require("../controller/userController");
const middlewareController = require("../controller/middlewareController");

// Get all users
router.get("/", middlewareController.verifyToken, userController.getAllUsers); 

// Delete user
// v1/user/12345 (id)
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, userController.deleteUser);

module.exports = router;