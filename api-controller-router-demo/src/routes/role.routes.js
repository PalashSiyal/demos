const express = require('express')
const router = express.Router()
const {getRoles, getRole, postRole, updateRole, deleteRole} = require('../controllers/role.controller')

router.get("/all", getRoles);
router.get("/:id", getRole);
router.post("/", postRole);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);

module.exports = {roleRouter:router}