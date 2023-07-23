const Room = require('../models/Room')
const Department = require("../models/Department")

const getRooms = async(req,res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms)
    } catch (error) {
        res.status(500).send("Error fetching rooms: " + error.message);
    }
}

const postRoom = async(req,res) => {
    const { roomNo, department } = req.body;

    try {
    const department1 = await Department.findById(department);
    
    if (!department1) {
        return res.status(404).json({ message: 'Department not found' });
    }

    const room = await Room.create({
        roomNo,
        department: department,
    });

    res.status(201).json(room);
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
};

const getRoom = async(req,res) => {
    const { id } = req.params;

    try {
        const room = await Room.findById(id).populate('department');

    if (!room) {
    return res.status(404).json({ message: 'Room not found' });
    }

    res.json(room);
} catch (error) {
    res.status(500).json({ message: 'Internal server error' });
}
}

const updateRoom = async(req,res)=>{
    const { id } = req.params;
    const roomData = req.body;

    try {
    const room = await Room.findByIdAndUpdate(id, roomData, {
        new: true,
    }).populate('department');

    if (!room) {
        return res.status(404).json({ message: 'Room not found' });
    }

    res.json(room);
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteRoom = async(req,res)=>{
    const { id } = req.params;

    try {
    const room = await Room.findByIdAndDelete(id);

    if (!room) {
        return res.status(404).json({ message: 'Room not found' });
    }

    res.json({ message: 'Room deleted successfully' });
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports  = {getRooms, postRoom, getRoom, updateRoom, deleteRoom}