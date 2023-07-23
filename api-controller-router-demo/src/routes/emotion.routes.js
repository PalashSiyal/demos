const express = require('express')
const router = express.Router()
const {getEmotions, getEmotion, postEmotion, updateEmotion, deleteEmotion} = require('../controllers/emotion.controller')

router.get("/all", getEmotions);
router.get("/:id", getEmotion);
router.post("/", postEmotion);
router.put("/:id", updateEmotion);
router.delete("/:id", deleteEmotion);

module.exports = { emotionRouter:router }