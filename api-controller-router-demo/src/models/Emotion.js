const mongoose = require("mongoose");

const emotionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    ref: "User",
  },
  emotion: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  session_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session',
    required: true,
  }
});

const Emotion = mongoose.model("Emotion", emotionSchema);

module.exports = Emotion
