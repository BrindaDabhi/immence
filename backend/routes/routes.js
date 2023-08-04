const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

module.exports = router;

router.post("/", UserController.create);
router.get("/", UserController.findAll);