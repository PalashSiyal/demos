const express = require('express')
const router = express.Router()
const {getUsers, getUser, postUser, updateUser, deleteUser} = require('../controllers/user.controller.js')

router.get("/all", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = {userRouter:router}