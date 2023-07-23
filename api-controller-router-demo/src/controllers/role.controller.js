const Role = require("../models/Role")

const getRoles = async(req,res) => {
    try {
        const roles = await Role.find();
        res.json(roles)
    } catch (error) {
        res.status(500).send("Error fetching roles: " + error.message);
    }
}

const getRole = async(req,res) =>{
    const {id} = req.params;
    try {
        const role = await Role.findById(id);
        if (!role) {
            return res.status(404).json({message:"Role not found"})
        }
        res.json(role)
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

const postRole = async(req,res) => {
    const roleData = req.body
    try {
        const role = await Role.create(roleData);
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

const updateRole = async(req,res) => {
    const { id } = req.params;
    const roleData = req.body;

    try {
    const role = await Role.findByIdAndUpdate(id, roleData, {
        new: true,
    });

    if (!role) {
        return res.status(404).json({ message: 'Role not found' });
    }

    res.json(role);
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteRole = async(req, res) => {
    const { id } = req.params;

    try {
    const role = await Role.findByIdAndDelete(id);

    if (!role) {
        return res.status(404).json({ message: 'Role not found' });
    }

    res.json({ message: 'Role deleted successfully' });
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { getRoles, getRole, postRole, updateRole, deleteRole}