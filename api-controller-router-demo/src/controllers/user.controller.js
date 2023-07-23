const User = require("../models/User");
const Department = require("../models/Department");
const Role = require("../models/Role");

const postUser = async (req, res) => {
  const userData = req.body;
  try {
    const user = await User.create(userData);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId)
      .populate("department")
      .populate("roleId")
      .exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
    
        // Find the user document by _id and update it
        const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
    
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.status(200).json(updatedUser);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndRemove(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
          }
          res.status(200).json("User Deleted Successfully");
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { postUser, getUsers, getUser, updateUser, deleteUser };
