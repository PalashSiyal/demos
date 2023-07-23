const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    start_time: {
        type: Date,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    camera_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Camera',
        required: true
    },
    end_time: {
        type: Date,
        required: true
    },
    isOnline: {
        type: Boolean,
        default: true
    }
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
