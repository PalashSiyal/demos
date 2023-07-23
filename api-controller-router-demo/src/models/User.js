const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department',
        required:true
    },
    roleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role',
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    entryTime: {
        type: Date,
        default: null
    },
    exitTime: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive', 'Pending'],
        default: 'Active'
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User