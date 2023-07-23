const Organization = require('../models/Organization')

const getOrgs = async(req,res)=>{
    try {
        const organizations = await Organization.find();
        res.json(organizations)
    } catch (error) {
        res.status(500).send("Error fetching Organizations: " + error.message);
    }
}

const getOrg = async(req,res)=>{
    const { id } = req.params;

    try {
    const organization = await Organization.findById(id);
    if (!organization) {
    return res.status(404).json({ message: 'Organization not found' });
    }
    res.json(organization);
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

const postOrg = async(req,res)=>{
    const organizationData = req.body;

    try {
        const organization = await Organization.create(organizationData)
        res.status(201).json(organization)
    } catch (error) {
        res.status(500).json({ message:"Internal server error" })
    }
}

const updateOrg = async(req,res)=>{
    const { id } = req.params;
    const organizationData = req.body;

    try {
    const organization = await Organization.findByIdAndUpdate(id, organizationData, {
    new: true,
    });

    if (!organization) {
    return res.status(404).json({ message: 'Organization not found' });
    }

    res.json(organization);
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteOrg = async(req,res) => {
    const { id } = req.params;

    try {
    const organization = await Organization.findByIdAndDelete(id);

    if (!organization) {
    return res.status(404).json({ message: 'Organization not found' });
    }

    res.json({ message: 'Organization deleted successfully' });
    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {getOrgs, getOrg, postOrg, updateOrg, deleteOrg}