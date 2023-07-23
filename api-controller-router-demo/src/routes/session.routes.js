const express = require('express')
const router = express.Router()
const { getSessions, getSession, postSession, updateSession, deleteSession } = require('../controllers/session.controller')

router.get("/all", getSessions);
router.get("/:id", getSession);
router.post("/", postSession);
router.put("/:id", updateSession);
router.delete("/:id", deleteSession);

module.exports = { sessionRouter:router }