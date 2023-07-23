const express = require('express')
const router = express.Router()
const {getDepartments, getDepartment, postDepartment, updateDepartment, deleteDepartment} = require('../controllers/department.controller.js')

router.get("/all", getDepartments);
router.get("/:id", getDepartment);
router.post("/", postDepartment);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);

module.exports = { departmentRouter:router }