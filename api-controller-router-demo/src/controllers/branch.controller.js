const Branch = require("../models/Branch")
const Organization = require("../models/Organization")

const getBranches = async(req,res)=>{
    try {
        const branches = await Branch.find();
        res.json(branches)
    } catch (error) {
        res.status(500).send("Error fetching Branches: " + error.message);
    }
}

const getBranch = async(req, res)=>{
    const { id } = req.params;

    try {
    const branch = await Branch.findById(id).populate('organization');

    if (!branch) {
        return res.status(404).json({ message: 'Branch not found' });
    }

    res.json(branch);
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

const postBranch = async(req,res) => {
    const branchData = req.body;

    try {
    const organization = await Organization.findById(branchData.organization);
    if (!organization) {
        return res.status(404).json({ message: 'Organization not found' });
    }

    const branch = await Branch.create(branchData);
    res.status(201).json(branch);
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

const updateBranch = async(req,res)=> {
    const { id } = req.params;
    const branchData = req.body;

    try {
      // Check if the provided organization exists
    if (branchData.organization) {
        const organization = await Organization.findById(branchData.organization);
        if (!organization) {
        return res.status(404).json({ message: 'Organization not found' });
        }
    }
      // Find and update the branch with the provided data
    const branch = await Branch.findByIdAndUpdate(id, branchData, {
        new: true,
    }).populate('organization');

    if (!branch) {
        return res.status(404).json({ message: 'Branch not found' });
    }

    res.json(branch);
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteBranch = async(req,res)=>{
    const { id } = req.params;
    try {
        const branch = Branch.findByIdAndDelete(id);
        if (!branch){
            return res.status(404).json({message:"Branch not found"})
        }
        res.json({message:"Branch Deleted Successfully"})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

module.exports = { getBranches, getBranch, postBranch, updateBranch, deleteBranch }