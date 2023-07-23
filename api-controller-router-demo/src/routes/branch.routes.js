const express = require('express')
const router = express.Router()
const {getBranches, getBranch, postBranch, updateBranch, deleteBranch} = require('../controllers/branch.controller')

router.get("/all", getBranches);
router.get("/:id", getBranch);
router.post("/", postBranch);
router.put("/:id", updateBranch);
router.delete("/:id", deleteBranch);

module.exports = {branchRouter:router}