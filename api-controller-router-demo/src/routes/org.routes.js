const express = require('express')
const router = express.Router()
const {getOrgs, getOrg, postOrg, updateOrg, deleteOrg} = require('../controllers/org.controller')

router.get("/all", getOrgs);
router.get("/:id", getOrg);
router.post("/", postOrg);
router.put("/:id", updateOrg);
router.delete("/:id", deleteOrg);

module.exports = {orgRouter:router}