const Department = require("../models/Department")
const Branch = require("../models/Branch")

const getDepartments = async(req,res) => {
    try {
        const departments = await Department.find()
        res.json(departments)
    } catch (error) {
        res.status(500).send("Error fetching Departments: " + error.message);
    }
}

const getDepartment = async(req,res) => {
    try {
        const departments = await Department.findById(req.params.id).populate('branch')
        res.json(departments)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

const postDepartment = async(req,res) => {
    const departmentData = req.body;
    try {
        const branch = await Branch.findById(departmentData.branch);
    if (!branch) {
        return res.status(404).json({ message: 'Branch not found' });
    }
    const department = await Department.create(departmentData);
    res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const updateDepartment = async (req,res) => {
    const { id } = req.params;
    const departmentData = req.body;

    try {
    const branch = await Branch.findById(departmentData.branch);
    if (!branch) {
        return res.status(404).json({ message: 'Branch not found' });
    }

    const department = await Department.findByIdAndUpdate(id, departmentData, {
        new: true,
    }).populate('branch');

    if (!department) {
        return res.status(404).json({ message: 'Department not found' });
    }

    res.json(department);
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteDepartment = async(req,res) => {
    const {id} = req.params
    try {
        const department = await Department.findByIdAndDelete(id)
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
    
        res.json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports = {getDepartments, getDepartment, postDepartment, updateDepartment, deleteDepartment}