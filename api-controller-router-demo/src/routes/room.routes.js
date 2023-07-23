const express = require('express')
const router = express.Router()
const {getRooms, getRoom, postRoom, updateRoom, deleteRoom} = require('../controllers/room.controller')

router.get("/all", getRooms);
router.get("/:id", getRoom);
router.post("/", postRoom);
router.put("/:id", updateRoom);
router.delete("/:id", deleteRoom);

module.exports = {roomRouter:router}