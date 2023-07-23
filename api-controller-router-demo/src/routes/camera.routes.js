const express = require('express')
const router = express.Router()
const {getCameras, getCamera, postCamera, updateCamera, deleteCamera} = require('../controllers/camera.controller')

router.get("/all", getCameras);
router.get("/:id", getCamera);
router.post("/", postCamera);
router.put("/:id", updateCamera);
router.delete("/:id", deleteCamera);

module.exports = {cameraRouter:router}