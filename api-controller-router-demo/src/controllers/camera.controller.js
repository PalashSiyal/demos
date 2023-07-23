const Camera = require("../models/Camera")
const Room = require("../models/Room")

const getCameras = async(req,res)=> {
    try {
        const cameras = await Camera.find();
        res.json(cameras)
    } catch (error) {
        res.status(500).send("Error fetching Cameras: " + error.message);
    }
}

const getCamera = async(req,res)=>{
    const { id } = req.params

    try {
        const camera = await Camera.findById(id).populate('roomId')
        if (!camera) {
            return res.status(404).json({ message: 'Camera not found' });
        }
        res.json(camera);

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });

    }
}

const postCamera = async(req,res)=>{
    const cameraData = req.body;

    try {
      // Check if the specified roomId exists
    const room = await Room.findById(cameraData.roomId);
    if (!room) {
        return res.status(404).json({ message: 'Room not found' });
    }

    const camera = await Camera.create(cameraData);
    res.status(201).json(camera);
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

const updateCamera = async(req,res)=>{
    const { id } = req.params;
    const cameraData = req.body;

    try {
    const room = await Room.findById(cameraData.roomId);
    if (!room) {
        return res.status(404).json({ message: 'Room not found' });
    }

    const camera = await Camera.findByIdAndUpdate(id, cameraData, {
        new: true,
    }).populate('roomId');

    if (!camera) {
        return res.status(404).json({ message: 'Camera not found' });
    }

    res.json(camera);
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteCamera = async(req,res) => {
    const {id} = req.params;
    try {
        const camera = await Camera.findByIdAndDelete(id)
        if (!camera) {
            return res.status(404).json({ message: 'Camera not found' });
        }
        res.json({ message: 'Camera deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { getCameras, getCamera, postCamera, updateCamera, deleteCamera }